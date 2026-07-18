// Service dédié aux appels admin liés aux paiements.
import { apiAdmin } from "./api";

/**
 * Confirme (encaisse) un paiement : PAYE + commande passée à SUCCESS.
 * POST /api/paiements/{id}/confirmer (admin uniquement)
 */
export async function confirmerPaiement(id) {
  const reponse = await apiAdmin.post(`/api/paiements/${id}/confirmer`);
  return reponse.data;
}

/**
 * Marque un paiement en échec : ECHEC + commande passée à ECHECS.
 * POST /api/paiements/{id}/refuser (admin uniquement)
 */
export async function refuserPaiement(id) {
  const reponse = await apiAdmin.post(`/api/paiements/${id}/refuser`);
  return reponse.data;
}

/**
 * Rembourse un paiement précédemment payé : REMBOURSE.
 * POST /api/paiements/{id}/rembourser (admin uniquement)
 */
export async function rembourserPaiement(id) {
  const reponse = await apiAdmin.post(`/api/paiements/${id}/rembourser`);
  return reponse.data;
}
