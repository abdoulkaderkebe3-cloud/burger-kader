import React, { useEffect, useRef, useState } from "react";
import { useCart } from "../../context/CartContext";
import { creerCommande } from "../../services/commandesService";
import { imageProduit } from "../../services/produitsService";
import Button from "../elements/Button";

/**
 * Panneau latéral du panier.
 *
 * Affiche les lignes ajoutées depuis le menu, permet d'ajuster les quantités,
 * puis un formulaire client qui envoie POST /api/commandes au back.
 */
export default function CartPanel() {
  const { lignes, changerQuantite, retirer, vider, totalMontant, estOuvert, fermer } =
    useCart();

  const [formulaire, setFormulaire] = useState({
    nomClient: "",
    email: "",
    telephone: "",
    moyen: "Espèces",
  });
  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  // Verrou synchrone : useState seul ne suffit pas, deux clics dans le même tick
  // liraient encore l'ancienne valeur (le re-render n'a pas encore eu lieu).
  const envoiEnCoursRef = useRef(false);
  const [erreurGenerale, setErreurGenerale] = useState(null);
  const [erreursChamps, setErreursChamps] = useState({});
  const [commandeConfirmee, setCommandeConfirmee] = useState(null);

  const panneauRef = useRef(null);
  const boutonFermerRef = useRef(null);

  // Accessibilité clavier du panneau modal : focus initial, Échap pour fermer,
  // Tab qui boucle sur les éléments focusables du panneau (pas de fuite vers le fond).
  useEffect(() => {
    if (!estOuvert) return;
    boutonFermerRef.current?.focus();

    function surTouche(evenement) {
      if (evenement.key === "Escape") {
        fermerEtReinitialiser();
        return;
      }
      if (evenement.key !== "Tab" || !panneauRef.current) return;

      const elementsFocusables = panneauRef.current.querySelectorAll(
        'button:not([disabled]), input, select, textarea, [href], [tabindex]:not([tabindex="-1"])'
      );
      if (elementsFocusables.length === 0) return;

      const premier = elementsFocusables[0];
      const dernier = elementsFocusables[elementsFocusables.length - 1];
      if (evenement.shiftKey && document.activeElement === premier) {
        evenement.preventDefault();
        dernier.focus();
      } else if (!evenement.shiftKey && document.activeElement === dernier) {
        evenement.preventDefault();
        premier.focus();
      }
    }

    document.addEventListener("keydown", surTouche);
    return () => document.removeEventListener("keydown", surTouche);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [estOuvert]);

  if (!estOuvert) return null;

  function majChamp(champ, valeur) {
    setFormulaire((precedent) => ({ ...precedent, [champ]: valeur }));
  }

  function fermerEtReinitialiser() {
    fermer();
    setCommandeConfirmee(null);
    setErreurGenerale(null);
    setErreursChamps({});
  }

  async function validerCommande(evenement) {
    evenement.preventDefault();
    if (envoiEnCoursRef.current) return;
    envoiEnCoursRef.current = true;
    setEnvoiEnCours(true);
    setErreurGenerale(null);
    setErreursChamps({});

    const payload = {
      ...formulaire,
      lignes: lignes.map((l) => ({ produitId: l.produit.id, quantite: l.quantite })),
    };

    try {
      const commande = await creerCommande(payload);
      vider();
      if (commande.paiement?.checkoutUrl) {
        // Paiement en ligne (Carte, Mobile Money...) : direction la page de
        // paiement GeniusPay, le client revient sur le site une fois payé.
        window.location.href = commande.paiement.checkoutUrl;
        return;
      }
      // Espèces : pas de paiement en ligne, on affiche juste la confirmation.
      setCommandeConfirmee(commande);
    } catch (erreur) {
      const donnees = erreur.response?.data;
      if (donnees?.erreurs) {
        setErreursChamps(donnees.erreurs);
      } else {
        setErreurGenerale(
          donnees?.detail || "Impossible d'envoyer la commande. Réessaie dans un instant."
        );
      }
    } finally {
      envoiEnCoursRef.current = false;
      setEnvoiEnCours(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Fond assombri : cliquer dessus ferme le panneau */}
      <div className="absolute inset-0 bg-black/50" onClick={fermerEtReinitialiser} />

      <div
        ref={panneauRef}
        role="dialog"
        aria-modal="true"
        aria-label="Panier"
        className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <h2 className="font-bold uppercase text-marron">Votre panier</h2>
          <button
            ref={boutonFermerRef}
            onClick={fermerEtReinitialiser}
            className="text-2xl leading-none text-marron"
            aria-label="Fermer le panier"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {commandeConfirmee ? (
            <div className="text-center my-10">
              <p className="text-xl font-bold text-marron mb-2">Commande envoyée !</p>
              <p className="mb-1">Référence : {commandeConfirmee.reference}</p>
              <p className="mb-4">Total : {commandeConfirmee.montantTotal} FCFA</p>
              <Button color="idole" onClick={fermerEtReinitialiser}>
                fermer
              </Button>
            </div>
          ) : lignes.length === 0 ? (
            <p className="text-center my-10 text-gray-600">Ton panier est vide.</p>
          ) : (
            <>
              <ul className="flex flex-col gap-4 mb-6">
                {lignes.map(({ produit, quantite }) => (
                  <li key={produit.id} className="flex gap-3 items-center">
                    <img
                      src={imageProduit(produit.image)}
                      alt={produit.nom}
                      loading="lazy"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-sm uppercase text-marron">{produit.nom}</p>
                      <p className="text-sm text-gray-600">{produit.prix} FCFA</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Button
                          theme="mini"
                          color="idole"
                          aria-label={`Retirer un ${produit.nom}`}
                          onClick={() => changerQuantite(produit.id, -1)}
                        >
                          -
                        </Button>
                        <span>{quantite}</span>
                        <Button
                          theme="mini"
                          color="idole"
                          aria-label={`Ajouter un ${produit.nom}`}
                          onClick={() => changerQuantite(produit.id, 1)}
                        >
                          +
                        </Button>
                        <button
                          className="ml-auto text-rouge text-xs uppercase"
                          onClick={() => retirer(produit.id)}
                        >
                          retirer
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="font-black text-right mb-6">Total : {totalMontant} FCFA</p>

              <form onSubmit={validerCommande} className="flex flex-col gap-3">
                <div>
                  <input
                    type="text"
                    placeholder="Nom complet"
                    value={formulaire.nomClient}
                    onChange={(e) => majChamp("nomClient", e.target.value)}
                    className="w-full border rounded px-3 py-2"
                  />
                  {erreursChamps.nomClient && (
                    <p className="text-rouge text-xs mt-1">{erreursChamps.nomClient}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    value={formulaire.email}
                    onChange={(e) => majChamp("email", e.target.value)}
                    className="w-full border rounded px-3 py-2"
                  />
                  {erreursChamps.email && (
                    <p className="text-rouge text-xs mt-1">{erreursChamps.email}</p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Téléphone"
                    value={formulaire.telephone}
                    onChange={(e) => majChamp("telephone", e.target.value)}
                    className="w-full border rounded px-3 py-2"
                  />
                  {erreursChamps.telephone && (
                    <p className="text-rouge text-xs mt-1">{erreursChamps.telephone}</p>
                  )}
                </div>
                <select
                  value={formulaire.moyen}
                  onChange={(e) => majChamp("moyen", e.target.value)}
                  className="w-full border rounded px-3 py-2"
                >
                  <option>Espèces</option>
                  <option>Carte</option>
                  <option>Mobile Money</option>
                </select>

                {erreurGenerale && <p className="text-rouge text-sm">{erreurGenerale}</p>}

                <Button color="idole" theme="big" className="w-full mt-2" disabled={envoiEnCours}>
                  {envoiEnCours ? "envoi en cours..." : "valider la commande"}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
