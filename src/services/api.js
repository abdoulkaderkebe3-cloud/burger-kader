// Configuration centrale d'axios pour parler au back Spring Boot.
// axios est une bibliothèque qui simplifie les appels HTTP (GET, POST...) depuis le navigateur.
import axios from "axios";

// Adresse de base du back (API REST Spring Boot). Configurable via la variable
// d'environnement Vite VITE_API_URL (définie au build en production) ; par
// défaut, le back local en développement.
export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

// Instance axios pré-configurée : toutes les requêtes partiront de API_URL
// (ex : api.get("/api/produits") appellera http://localhost:8080/api/produits).
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

// Clé sessionStorage sous laquelle est conservé le jeton Basic (base64 "user:motDePasse")
// de la session admin en cours. Exportée pour que AdminContext puisse le lire/écrire.
export const CLE_JETON_ADMIN = "adminToken";

// Instance axios DÉDIÉE aux appels admin (paiements, liste des commandes...).
// Séparée de `api` exprès : si on attachait l'en-tête Authorization à TOUTES les
// requêtes (y compris les publiques), un jeton invalide ferait échouer en 401
// jusqu'aux appels publics (Spring Security traite les identifiants Basic avant
// de vérifier si la route est permitAll).
export const apiAdmin = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiAdmin.interceptors.request.use((config) => {
  const jeton = sessionStorage.getItem(CLE_JETON_ADMIN);
  if (jeton && !config.headers.Authorization) {
    config.headers.Authorization = `Basic ${jeton}`;
  }
  return config;
});
