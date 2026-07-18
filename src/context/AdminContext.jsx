import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { apiAdmin, CLE_JETON_ADMIN } from "../services/api";

// Contexte de la session administrateur : connexion/déconnexion et bascule
// entre la vue publique (vitrine) et la vue admin (tableau de bord).
const AdminContext = createContext(null);

export function AdminProvider({ children }) {
  // Le jeton (base64 "utilisateur:motDePasse") est lu une seule fois au montage :
  // s'il existe déjà en sessionStorage, l'admin reste connecté tant que l'onglet
  // est ouvert, même après un rafraîchissement de page.
  const [jeton, setJeton] = useState(() => sessionStorage.getItem(CLE_JETON_ADMIN));
  const [formulaireOuvert, setFormulaireOuvert] = useState(false);

  const ouvrirFormulaire = useCallback(() => setFormulaireOuvert(true), []);
  const fermerFormulaire = useCallback(() => setFormulaireOuvert(false), []);

  // Tente une connexion : vérifie les identifiants en appelant une route protégée
  // (GET /api/commandes exige le rôle ADMIN). Renvoie true/false, ne lève jamais.
  const connecter = useCallback(async (nomUtilisateur, motDePasse) => {
    const jetonCandidat = btoa(`${nomUtilisateur}:${motDePasse}`);
    try {
      await apiAdmin.get("/api/commandes", {
        headers: { Authorization: `Basic ${jetonCandidat}` },
      });
      sessionStorage.setItem(CLE_JETON_ADMIN, jetonCandidat);
      setJeton(jetonCandidat);
      setFormulaireOuvert(false);
      return true;
    } catch {
      return false;
    }
  }, []);

  const deconnecter = useCallback(() => {
    sessionStorage.removeItem(CLE_JETON_ADMIN);
    setJeton(null);
  }, []);

  const valeur = useMemo(
    () => ({
      estConnecte: Boolean(jeton),
      formulaireOuvert,
      ouvrirFormulaire,
      fermerFormulaire,
      connecter,
      deconnecter,
    }),
    [jeton, formulaireOuvert, ouvrirFormulaire, fermerFormulaire, connecter, deconnecter]
  );

  return <AdminContext.Provider value={valeur}>{children}</AdminContext.Provider>;
}

export function useAdmin() {
  const contexte = useContext(AdminContext);
  if (!contexte) {
    throw new Error("useAdmin() doit être utilisé à l'intérieur d'un <AdminProvider>.");
  }
  return contexte;
}
