import React from "react";
import logo from "/src/medias/svg/Logo-burger-house.svg";
import bag from "/src/medias/svg/ico-bag-clickAndCollect.svg";
import Button from "../../elements/Button";
import picto from "../../../medias/svg/picto-burger-house.svg"
export default function Header() {
  return (
    <div className="flex justify-between items-center py-10  font-roboto relative z-10 ">
      <div className=" w-full">
        <img src={logo} alt="burger" className="w-64 hidden md:block" />
        <img src={picto} alt="burger" className="w-10 md:hidden" />
      </div>
      <div className=" w-full">
        <div className="text-marron font-bold  items-center justify-end hidden gap-1 md:flex ">
          <img src={bag} alt="" className="w-5 h-5 " />
          <span>commandez votre repas en ligne </span>
        </div>
        <div className="flex items-center justify-end md:mt-5">
          <Button className="mr-3 tracking-widest rounded-sm hover:bg-[#f5b029]" color="idole">
            inscription
          </Button>
          <Button className="tracking-widest rounded-sm " color="marron">
            connexion
          </Button>
        </div>
      </div>
    </div>
  );
}
