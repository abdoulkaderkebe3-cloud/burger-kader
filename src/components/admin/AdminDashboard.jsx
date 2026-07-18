import React, { useCallback, useEffect, useState } from "react";
import { useAdmin } from "../../context/AdminContext";
import { listerCommandesAdmin } from "../../services/commandesService";
import {
  confirmerPaiement,
  refuserPaiement,
  rembourserPaiement,
} from "../../services/paiementsService";
import Button from "../elements/Button";
import Container from "../elements/Container";

// Libellés lisibles pour les statuts (StatutCommande / StatutPaiement côté back).
const LIBELLE_STATUT_COMMANDE = {
  EN_ATTENTE: "En attente",
  SUCCESS: "Réussie",
  ECHECS: "Échouée",
};

const LIBELLE_STATUT_PAIEMENT = {
  EN_ATTENTE: "En attente",
  PAYE: "Payé",
  ECHEC: "Échec",
  REMBOURSE: "Remboursé",
};

/**
 * Tableau de bord administrateur : liste des commandes et de leur paiement,
 * avec les actions de traitement (confirmer / refuser / rembourser).
 *
 * Remplace entièrement la vitrine tant que l'admin est connecté (pas de routeur
 * dans ce projet) ; possède donc son propre bandeau avec le bouton de déconnexion.
 */
export default function AdminDashboard() {
  const { deconnecter } = useAdmin();

  const [commandes, setCommandes] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [actionEnCoursId, setActionEnCoursId] = useState(null);

  const chargerCommandes = useCallback(async () => {
    setChargement(true);
    setErreur(null);
    try {
      const donnees = await listerCommandesAdmin();
      // Les plus récentes en premier.
      setCommandes([...donnees].reverse());
    } catch (e) {
      if (e.response?.status === 401) {
        deconnecter();
        return;
      }
      setErreur("Impossible de charger les commandes.");
    } finally {
      setChargement(false);
    }
  }, [deconnecter]);

  useEffect(() => {
    chargerCommandes();
  }, [chargerCommandes]);

  async function traiter(action, paiementId) {
    setActionEnCoursId(paiementId);
    try {
      await action(paiementId);
      await chargerCommandes();
    } catch (e) {
      if (e.response?.status === 401) {
        deconnecter();
        return;
      }
      setErreur(e.response?.data?.detail || "Action impossible.");
    } finally {
      setActionEnCoursId(null);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-marron py-5">
        <Container>
          <div className="flex items-center justify-between">
            <h1 className="text-white font-bold uppercase tracking-widest">
              Burger House — Administration
            </h1>
            <Button color="danger" theme="small" onClick={deconnecter}>
              déconnexion
            </Button>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-10">
          <h2 className="text-2xl font-bold text-marron uppercase mb-6">Commandes</h2>

          {chargement && <p>Chargement des commandes…</p>}
          {erreur && <p className="text-rouge font-bold mb-4">{erreur}</p>}

          {!chargement && commandes.length === 0 && !erreur && (
            <p className="text-gray-600">Aucune commande pour le moment.</p>
          )}

          <div className="flex flex-col gap-4">
            {commandes.map((commande) => (
              <div
                key={commande.id}
                className="bg-white rounded-md shadow p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <p className="font-bold text-marron">{commande.reference}</p>
                  <p className="text-sm text-gray-600">
                    {commande.nomClient} — {commande.email} — {commande.telephone}
                  </p>
                  <p className="text-sm text-gray-600">
                    {new Date(commande.dateCreation).toLocaleString("fr-FR")}
                  </p>
                  <p className="mt-1">
                    Commande :{" "}
                    <span className="font-bold">
                      {LIBELLE_STATUT_COMMANDE[commande.statutCommande] ?? commande.statutCommande}
                    </span>
                    {" · "}
                    {commande.montantTotal} FCFA
                  </p>
                </div>

                <div className="flex flex-col items-start md:items-end gap-2">
                  <p>
                    Paiement (
                    {commande.paiement?.moyen || "—"}) :{" "}
                    <span className="font-bold">
                      {commande.paiement
                        ? LIBELLE_STATUT_PAIEMENT[commande.paiement.statutPaiement] ??
                          commande.paiement.statutPaiement
                        : "—"}
                    </span>
                  </p>

                  {commande.paiement?.statutPaiement === "EN_ATTENTE" && (
                    <div className="flex gap-2">
                      <Button
                        theme="small"
                        color="idole"
                        disabled={actionEnCoursId === commande.paiement.id}
                        onClick={() => traiter(confirmerPaiement, commande.paiement.id)}
                      >
                        confirmer
                      </Button>
                      <Button
                        theme="small"
                        color="danger"
                        disabled={actionEnCoursId === commande.paiement.id}
                        onClick={() => traiter(refuserPaiement, commande.paiement.id)}
                      >
                        refuser
                      </Button>
                    </div>
                  )}

                  {commande.paiement?.statutPaiement === "PAYE" && (
                    <Button
                      theme="small"
                      color="marron"
                      disabled={actionEnCoursId === commande.paiement.id}
                      onClick={() => traiter(rembourserPaiement, commande.paiement.id)}
                    >
                      rembourser
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
