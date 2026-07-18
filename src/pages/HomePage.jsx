import React, { useEffect, useState } from 'react'
import HeroTop from '../components/marketing/pagesections/HeroTop.jsx'
import LastProducts from '../components/marketing/pagesections/LastProducts.jsx'
import Products from '../components/marketing/pagesections/Products.jsx'
import MenuProduits from '../components/marketing/pagesections/MenuProduits.jsx'
import ContenuePro from '../components/marketing/pagesections/ContenuePro.jsx'
import Event from '../components/marketing/pagesections/Event.jsx'
import Booking from '../components/marketing/pagesections/Booking.jsx'
import Footer from '../components/marketing/pagesections/Footer.jsx'
import { ID_ANCRE_MENU } from '../constants/ancres.js'
export default function HomePage() {
  // Retour depuis la page de paiement GeniusPay (?commande=...&paiement=succes|echec).
  const [retourPaiement, setRetourPaiement] = useState(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const commande = params.get('commande')
    const paiement = params.get('paiement')
    if (commande && paiement) {
      setRetourPaiement({ commande, paiement })
      // Nettoie l'URL pour ne pas réafficher la bannière à un rafraîchissement.
      window.history.replaceState({}, '', window.location.pathname)
    }
  }, [])

  return (
    <div className="">
      {retourPaiement && (
        <div
          className={`text-center py-4 font-bold text-white ${
            retourPaiement.paiement === 'succes' ? 'bg-green-600' : 'bg-rouge'
          }`}
        >
          {retourPaiement.paiement === 'succes'
            ? `Paiement réussi pour la commande ${retourPaiement.commande} !`
            : `Le paiement de la commande ${retourPaiement.commande} a échoué ou a été annulé.`}
        </div>
      )}
      <HeroTop/>
      <LastProducts/>
      <Products/>
      <div id={ID_ANCRE_MENU}>
        <MenuProduits/>
      </div>
      <ContenuePro/>
      <Event/>
      <Booking/>
      <Footer/>
    </div>
  )
}
