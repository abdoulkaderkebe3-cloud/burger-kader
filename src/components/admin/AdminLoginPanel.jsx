import React, { useEffect, useRef, useState } from "react";
import { useAdmin } from "../../context/AdminContext";
import Button from "../elements/Button";

/**
 * Panneau de connexion administrateur (identifiants HTTP Basic).
 * Même schéma que CartPanel : overlay + boîte, accessible au clavier
 * (focus initial, Échap pour fermer, piège de focus).
 */
export default function AdminLoginPanel() {
  const { formulaireOuvert, fermerFormulaire, connecter } = useAdmin();

  const [nomUtilisateur, setNomUtilisateur] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState(null);
  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  const envoiEnCoursRef = useRef(false);

  const panneauRef = useRef(null);
  const champUtilisateurRef = useRef(null);

  useEffect(() => {
    if (!formulaireOuvert) return;
    champUtilisateurRef.current?.focus();

    function surTouche(evenement) {
      if (evenement.key === "Escape") {
        fermerFormulaire();
        return;
      }
      if (evenement.key !== "Tab" || !panneauRef.current) return;
      const elementsFocusables = panneauRef.current.querySelectorAll(
        'button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
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
  }, [formulaireOuvert]);

  if (!formulaireOuvert) return null;

  function fermerEtReinitialiser() {
    fermerFormulaire();
    setErreur(null);
    setMotDePasse("");
  }

  async function soumettre(evenement) {
    evenement.preventDefault();
    if (envoiEnCoursRef.current) return;
    envoiEnCoursRef.current = true;
    setEnvoiEnCours(true);
    setErreur(null);

    const succes = await connecter(nomUtilisateur, motDePasse);

    envoiEnCoursRef.current = false;
    setEnvoiEnCours(false);
    if (!succes) {
      setErreur("Identifiant ou mot de passe incorrect.");
      setMotDePasse("");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={fermerEtReinitialiser} />

      <div
        ref={panneauRef}
        role="dialog"
        aria-modal="true"
        aria-label="Connexion administrateur"
        className="relative w-full max-w-sm bg-white rounded-md shadow-2xl p-6"
      >
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold uppercase text-marron">Connexion admin</h2>
          <button
            onClick={fermerEtReinitialiser}
            className="text-2xl leading-none text-marron"
            aria-label="Fermer la connexion"
          >
            &times;
          </button>
        </div>

        <form onSubmit={soumettre} className="flex flex-col gap-3">
          <input
            ref={champUtilisateurRef}
            type="text"
            placeholder="Identifiant"
            value={nomUtilisateur}
            onChange={(e) => setNomUtilisateur(e.target.value)}
            autoComplete="username"
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            autoComplete="current-password"
            className="w-full border rounded px-3 py-2"
          />

          {erreur && <p className="text-rouge text-sm">{erreur}</p>}

          <Button color="marron" theme="big" className="w-full mt-2" disabled={envoiEnCours}>
            {envoiEnCours ? "connexion..." : "se connecter"}
          </Button>
        </form>
      </div>
    </div>
  );
}
