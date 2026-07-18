// Service dédié aux appels liés aux commandes.
import api, { apiAdmin } from "./api";

/**
 * Crée une nouvelle commande.
 * POST http://localhost:8080/api/commandes
 *
 * @param {{nomClient: string, email: string, telephone: string, moyen: string, lignes: {produitId: number, quantite: number}[]}} commande
 * @returns {Promise<Object>} la commande créée (avec référence, montant total, statut...).
 */
export async function creerCommande(commande) {
  const reponse = await api.post("/api/commandes", commande);
  return reponse.data;
}

/**
 * Liste TOUTES les commandes (avec leur paiement associé).
 * GET /api/commandes (admin uniquement)
 * @returns {Promise<Array>} la liste des commandes.
 */
export async function listerCommandesAdmin() {
  const reponse = await apiAdmin.get("/api/commandes");
  return reponse.data;
}
