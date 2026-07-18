import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

// Contexte du panier : permet à n'importe quel composant (menu, header, panneau
// panier...) de lire/modifier les articles commandés sans tout faire passer par props.
const CartContext = createContext(null);

export function CartProvider({ children }) {
  // Une ligne = { produit, quantite }. On garde le produit entier pour l'affichage
  // (nom, prix, image) sans avoir à le rechercher à nouveau.
  const [lignes, setLignes] = useState([]);
  const [estOuvert, setEstOuvert] = useState(false);

  const ajouter = useCallback((produit) => {
    setLignes((precedent) => {
      const existante = precedent.find((l) => l.produit.id === produit.id);
      if (existante) {
        return precedent.map((l) =>
          l.produit.id === produit.id ? { ...l, quantite: l.quantite + 1 } : l
        );
      }
      return [...precedent, { produit, quantite: 1 }];
    });
  }, []);

  const changerQuantite = useCallback((produitId, delta) => {
    setLignes((precedent) =>
      precedent
        .map((l) =>
          l.produit.id === produitId ? { ...l, quantite: l.quantite + delta } : l
        )
        .filter((l) => l.quantite > 0)
    );
  }, []);

  const retirer = useCallback((produitId) => {
    setLignes((precedent) => precedent.filter((l) => l.produit.id !== produitId));
  }, []);

  const vider = useCallback(() => {
    setLignes([]);
  }, []);

  const ouvrir = useCallback(() => setEstOuvert(true), []);
  const fermer = useCallback(() => setEstOuvert(false), []);

  const totalArticles = useMemo(
    () => lignes.reduce((somme, l) => somme + l.quantite, 0),
    [lignes]
  );

  const totalMontant = useMemo(
    () => lignes.reduce((somme, l) => somme + l.produit.prix * l.quantite, 0),
    [lignes]
  );

  const valeur = useMemo(
    () => ({
      lignes,
      ajouter,
      changerQuantite,
      retirer,
      vider,
      totalArticles,
      totalMontant,
      estOuvert,
      ouvrir,
      fermer,
    }),
    [lignes, ajouter, changerQuantite, retirer, vider, totalArticles, totalMontant, estOuvert, ouvrir, fermer]
  );

  return <CartContext.Provider value={valeur}>{children}</CartContext.Provider>;
}

// Hook pratique pour consommer le panier : useCart() au lieu de useContext(CartContext).
export function useCart() {
  const contexte = useContext(CartContext);
  if (!contexte) {
    throw new Error("useCart() doit être utilisé à l'intérieur d'un <CartProvider>.");
  }
  return contexte;
}
