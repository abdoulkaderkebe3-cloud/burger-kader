import React, { useEffect, useState } from "react";
import Container from "../../elements/Container";
import HeadingTitle from "../../elements/Displaytitles/HeadingTitle";
import Heading from "../../elements/Displaytitles/Heading";
import Button from "../../elements/Button";
import { getProduitsDisponibles, imageProduit, lireProduitsCache } from "../../../services/produitsService";
import { useCart } from "../../../context/CartContext";

/**
 * Section "Menu" : affiche dynamiquement les burgers récupérés depuis le back.
 *
 * Contrairement aux autres sections (statiques), celle-ci va CHERCHER les données
 * dans l'API REST Spring Boot au chargement de la page, via axios.
 */
export default function MenuProduits() {
  // --- États locaux du composant ---
  // On initialise avec le cache navigateur (s'il existe) : le menu s'affiche
  // alors INSTANTANÉMENT aux visites suivantes, sans écran de chargement.
  const cache = lireProduitsCache();
  const [produits, setProduits] = useState(cache || []); // la liste reçue du back
  const [chargement, setChargement] = useState(!cache);  // spinner seulement si pas de cache
  const [erreur, setErreur] = useState(null);      // message d'erreur éventuel
  const { ajouter, ouvrir } = useCart();

  // useEffect avec [] : exécuté UNE fois, au premier affichage du composant.
  // Rafraîchit toujours les données en tâche de fond (« revalidate »), même quand
  // le cache a déjà permis d'afficher le menu.
  useEffect(() => {
    getProduitsDisponibles()
      .then((data) => setProduits(data))
      .catch(() => {
        // En cas d'échec, on ne casse pas l'affichage si le cache a déjà rempli
        // la grille : on ne montre l'erreur que si l'écran serait vide.
        if (!cache) {
          setErreur(
            "Impossible de charger le menu. Vérifie que le back (http://localhost:8080) est démarré."
          );
        }
      })
      .finally(() => setChargement(false));
  }, []);

  // Affichage pendant le chargement.
  if (chargement) {
    return (
      <Container>
        <p className="text-center my-16">Chargement du menu…</p>
      </Container>
    );
  }

  // Affichage en cas d'erreur (back éteint, etc.).
  if (erreur) {
    return (
      <Container>
        <p className="text-center my-16 text-rouge font-bold">{erreur}</p>
      </Container>
    );
  }

  // Affichage normal : la grille des burgers.
  return (
    <Container>
      <HeadingTitle>notre menu</HeadingTitle>
      <Heading
        theme="marron"
        alignement="center"
        className="my-5 text-xl md:text-5xl"
      >
        nos burgers
      </Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {produits.map((produit) => (
          <div
            key={produit.id}
            className="rounded-md shadow-lg overflow-hidden bg-white flex flex-col"
          >
            {/* Image servie depuis le bundle du front (rapide, mise en cache) ;
                repli sur le back pour un produit ajouté après coup. */}
            <img
              src={imageProduit(produit.image)}
              alt={produit.nom}
              loading="lazy"
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex flex-col gap-2 grow">
              <h3 className="font-bold uppercase text-marron">{produit.nom}</h3>
              <p className="text-sm text-gray-600 grow">{produit.description}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="font-black">{produit.prix} FCFA</span>
                <Button
                  color="idole"
                  theme="small"
                  onClick={() => {
                    ajouter(produit);
                    ouvrir();
                  }}
                >
                  commander
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
