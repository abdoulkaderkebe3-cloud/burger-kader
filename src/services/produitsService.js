// Service dédié aux appels liés aux produits (le catalogue de burgers).
// On regroupe ici toute la logique d'appel à l'API produits, pour ne pas la
// disperser dans les composants React.
import api, { API_URL } from "./api";

// --- Images des produits embarquées dans le build du front ---
// Les visuels du catalogue existent déjà dans le dépôt front. En les servant
// depuis le bundle (CDN du front, mis en cache par le navigateur) plutôt que
// depuis le back, on évite de re-télécharger ~1,6 Mo d'images à CHAQUE visite
// (le back renvoie « Cache-Control: no-store », donc rien n'est mis en cache).
// import.meta.glob (Vite) importe tous ces fichiers au build.
const imagesLocales = import.meta.glob(
  "../medias/images/products/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const imagesParNom = {};
for (const [chemin, url] of Object.entries(imagesLocales)) {
  imagesParNom[chemin.split("/").pop()] = url; // clé = nom de fichier
}

/**
 * Renvoie l'URL d'affichage de l'image d'un produit.
 * Priorité à la version embarquée dans le front (rapide, mise en cache) ;
 * repli sur l'image servie par le back pour tout produit ajouté après coup
 * (dont l'image n'est pas dans le bundle).
 *
 * @param {string} cheminBack chemin stocké en base, ex : "/images/produits/Product-1.jpg"
 * @returns {string} URL utilisable dans <img src=...>
 */
export function imageProduit(cheminBack) {
  if (!cheminBack) return "";
  const nom = cheminBack.split("/").pop();
  return imagesParNom[nom] || API_URL + cheminBack;
}

/**
 * Récupère TOUS les produits depuis le back.
 * GET http://localhost:8080/api/produits
 * @returns {Promise<Array>} la liste des produits (au format JSON).
 */
export async function getProduits() {
  const reponse = await api.get("/api/produits");
  return reponse.data; // axios place le corps de la réponse dans .data
}

// Clé localStorage sous laquelle on garde la dernière liste de produits reçue.
// Sert à afficher le menu INSTANTANÉMENT aux visites suivantes (voir ci-dessous).
const CLE_CACHE_PRODUITS = "produitsDisponibles";

/**
 * Lit (de façon synchrone) la dernière liste de produits mise en cache dans le
 * navigateur, ou null si aucune / cache illisible. Permet au composant de rendre
 * le menu tout de suite, sans attendre le réseau.
 * @returns {Array|null}
 */
export function lireProduitsCache() {
  try {
    const brut = localStorage.getItem(CLE_CACHE_PRODUITS);
    return brut ? JSON.parse(brut) : null;
  } catch {
    return null; // JSON corrompu ou localStorage indisponible (navigation privée)
  }
}

/**
 * Récupère uniquement les produits DISPONIBLES à la vente et met le résultat en
 * cache pour les prochaines visites (stratégie « stale-while-revalidate » :
 * on affiche le cache immédiatement, puis on rafraîchit avec cette réponse).
 * GET http://localhost:8080/api/produits?disponibles=true
 * @returns {Promise<Array>} la liste des produits disponibles.
 */
export async function getProduitsDisponibles() {
  const reponse = await api.get("/api/produits", {
    params: { disponibles: true },
  });
  try {
    localStorage.setItem(CLE_CACHE_PRODUITS, JSON.stringify(reponse.data));
  } catch {
    // Quota plein ou stockage indisponible : le cache est optionnel, on ignore.
  }
  return reponse.data;
}
