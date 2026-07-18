import React from "react";
import logo from "/src/medias/svg/Logo-burger-house.svg";
import bag from "/src/medias/svg/ico-bag-clickAndCollect.svg";
import Button from "../../elements/Button";
import picto from "../../../medias/svg/picto-burger-house.svg"
import { useCart } from "../../../context/CartContext";
import { useAdmin } from "../../../context/AdminContext";
export default function Header() {
  const { totalArticles, ouvrir } = useCart();
  const { ouvrirFormulaire } = useAdmin();
  return (
    <div className="flex justify-between items-center py-10  font-roboto relative z-10 ">
      <div className=" w-full flex items-center justify-between md:block">
        <img src={logo} alt="burger" className="w-64 hidden md:block" />
        <img src={picto} alt="burger" className="w-10 md:hidden" />
        <button
          type="button"
          onClick={ouvrir}
          aria-label="Ouvrir le panier"
          className="relative text-marron md:hidden"
        >
          <img src={bag} alt="" className="w-6 h-6" />
          {totalArticles > 0 && (
            <span className="absolute -top-2 -right-2 bg-rouge text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              {totalArticles}
            </span>
          )}
        </button>
      </div>
      <div className=" w-full">
        <div
          onClick={ouvrir}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              ouvrir();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Ouvrir le panier"
          className="text-marron font-bold  items-center justify-end hidden gap-1 md:flex relative cursor-pointer"
        >
          <img src={bag} alt="" className="w-5 h-5 " />
          {totalArticles > 0 && (
            <span className="absolute -top-2 -left-2 bg-rouge text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              {totalArticles}
            </span>
          )}
          <span>commandez votre repas en ligne </span>
        </div>
        <div className="flex items-center justify-end md:mt-5">
          <Button className="mr-3 tracking-widest rounded-sm hover:bg-[#f5b029]" color="idole">
            inscription
          </Button>
          <Button
            className="tracking-widest rounded-sm "
            color="marron"
            onClick={ouvrirFormulaire}
          >
            connexion
          </Button>
        </div>
      </div>
    </div>
  );
}
