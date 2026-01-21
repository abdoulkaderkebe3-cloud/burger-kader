import React from "react";
import Container from "../../elements/Container";
import assiette from "../../../medias/images/background/assiette-burger-frites.png";
import sauce from "../../../medias/images/background/Sauce-pimente.png";
import food from "../../../medias/images/background/burger.png";
import Heading from "../../elements/Displaytitles/Heading";

export default function booking() {
  return (
    <Container>
      <div className=" relative lg:mb-20 lg:mt-0    mt-125  ">
        <img
          src={food}
          alt="image"
          className="absolute -top-20 -left-36 z-10"
        />
        <img src={sauce} alt="image" className="absolute bottom-0 left-0" />
        <img
          src={assiette}
          alt="image"
          className="absolute -bottom-52 -right-96"
        />
        <div className="max-w-3xl  mx-auto px-10 py-20 ">
          <Heading variant="h3" alignement="center">
            Réservation
          </Heading>
          <Heading alignement="center" theme="marron" className="mt-5">
            Réservez votre table
          </Heading>
          <form className="grid grid-cols-2 gap-x-7 gap-y-6 mt-20">
            <div>
              <label htmlFor="name">NOM</label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                className="focus:ring-yellow-500 focus:border-yellow-500 block w-full border border-gray-400 rounded p-5  "
                placeholder="Kader"
              />
            </div>
            <div>
              <label htmlFor="name">EMAIL</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                className="focus:ring-yellow-500 focus:border-yellow-500 block w-full border border-gray-400 rounded p-5  "
                placeholder="abdoulkader@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="name">DATE</label>
              <input
                type="date"
                name="date"
                id="date"
                autoComplete="off"
                className="focus:ring-yellow-500 focus:border-yellow-500 block w-full border border-gray-400 rounded p-5  "
              />
            </div>
            <div>
              <label htmlFor="name">HEURE</label>
              <input
                type="time"
                name="time"
                id="time"
                autoComplete="off"
                className="focus:ring-yellow-500 focus:border-yellow-500 block w-full border border-gray-400 rounded p-5  "
              />
            </div>
            <div>
              <label htmlFor="customer">NOMBRE DE PERSONNES</label>
              <input
                type="number"
                name="customer"
                id="customer"
                autoComplete="off"
                className="focus:ring-yellow-500 focus:border-yellow-500 block w-full border border-gray-400 rounded p-5  "
                placeholder="5"
              />
            </div>
            <div>
              <label htmlFor="send" className="invisible">
                Réserver votre repas
              </label>
              <input
                type="button"
                name="send"
                id="send"
                value="trouver une table "
                autoComplete="off"
                className="bg-rouge hover:bg-red-600 w-full text-white fff cursor-pointer tracking-widest uppercase py-5 rounded-md animate active:rotate-3 animate-bounce "
              />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
