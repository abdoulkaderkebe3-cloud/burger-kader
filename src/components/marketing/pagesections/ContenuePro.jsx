import React from "react";
import img1 from "/src/medias/images/products/Product-1.jpg";
import img2 from "/src/medias/images/products/Product-2.jpg";
import img3 from "/src/medias/images/products/Product-3.jpg";
import Heading from "../../elements/Displaytitles/Heading";
import Button from "../../elements/Button";
import { ID_ANCRE_MENU } from "../../../constants/ancres.js";
function allerAuMenu() {
  document.getElementById(ID_ANCRE_MENU)?.scrollIntoView({ behavior: "smooth" });
}

export default function ContenuePro() {
  return (
    <div className="grid  lg:grid-cols-3 lg:gap-x-1 lg:mt-10 lg:mb-20 ">
      <div className="h-full w-full  ">
        <div className="h-72 w-full">
          <img src={img1} alt="burger"  />
        </div>
        <div className="flex justify-center items-center flex-col px-5 pt-30 lg:pt-10 sm:pt-75 md:pt-100 xl:pt-23 2xl:pt-30 pb-10 min-[562px]:pt-45  ">
          <Heading variant="h3" className="lg:my-5 ">Classic Burger</Heading>
          <p className="text-center">
            {" "}
            Steak de bœuf grillé, cheddar fondant, salade croquante et notre sauce maison, dans un pain brioché tout juste sorti du four.
          </p>
          <Button color="danger" className="fff" onClick={allerAuMenu}>
            commandez
          </Button>
        </div>
      </div>
      <div className="h-full  w-full">
        <div className="h-72 w-full">
          <img src={img2} alt="burger" />
        </div>
        <div className="flex justify-center items-center flex-col px-5 pt-30 min-[600px]:pt-45 lg:pt-10 sm:pt-75 md:pt-100 xl:pt-23 2xl:pt-30 pb-10 ">
          <Heading variant="h3" className="my-5">Spicy Chicken</Heading>
          <p className="text-center">
            {" "}
            Filet de poulet pané croustillant, sauce pimentée maison et crudités fraîches pour les amateurs de sensations relevées.
          </p>
          <Button color="danger" className="fff" onClick={allerAuMenu}>
            commandez
          </Button>
        </div>
      </div>
      <div className="h-full w-full">
        <div className="h-72 w-full">
          <img src={img3} alt="burger" />
        </div>
        <div className="flex justify-center items-center flex-col px-5 pt-30 lg:pt-10 sm:pt-75 md:pt-100 xl:pt-23 2xl:pt-30  pb-10 min-[600px]:pt-45 ">
          <Heading variant="h3" className="my-5">Veggie Délice</Heading>
          <p className="text-center">
            {" "}
            Galette de légumes grillée, avocat, tomate confite et sauce yaourt citronnée, pour une pause gourmande et légère.
          </p>
          <Button color="danger" className="fff" onClick={allerAuMenu}>
            commandez
          </Button>
        </div>
      </div>
    </div>
  );
}
