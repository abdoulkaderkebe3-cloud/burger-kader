import React from "react";
import Container from "../../elements/Container";
import assiette from "../../../medias/images/background/assiette-burger-frites.png";
import sauce from "../../../medias/images/background/Sauce-pimente.png";
import food from "../../../medias/images/background/burger.png";
import Heading from "../../elements/Displaytitles/Heading";

export default function booking() {
  return (
    <Container>
      <div className="relative py-10 sm:py-16 lg:py-20 lg:mb-20">
        <img
          src={food}
          alt="image"
          className="absolute -top-20 -left-36 z-10 hidden lg:block"
        />
        <img
          src={sauce}
          alt="image"
          className="absolute bottom-0 left-0 hidden lg:block"
        />
        <img
          src={assiette}
          alt="image"
          className="absolute -bottom-52 -right-96 hidden lg:block"
        />
        <div className="max-w-3xl mx-auto px-2 sm:px-6 lg:px-10 relative z-20">
          <Heading variant="h3" alignement="center">
            Réservation
          </Heading>
          <Heading alignement="center" theme="marron" className="mt-3 sm:mt-5">
            <span className="text-2xl sm:text-3xl md:text-5xl">Réservez votre table</span>
          </Heading>
          <form className="grid md:grid-cols-2 grid-cols-1 gap-x-5 sm:gap-x-7 gap-y-4 sm:gap-y-6 mt-8 sm:mt-12 lg:mt-20">
            <div>
              <label htmlFor="name" className="block text-sm sm:text-base font-medium mb-1">NOM</label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                className="focus:ring-yellow-500 focus:border-yellow-500 block w-full border border-gray-400 rounded p-3 sm:p-4 lg:p-5 text-sm sm:text-base"
                placeholder="Kader"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm sm:text-base font-medium mb-1">EMAIL</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                className="focus:ring-yellow-500 focus:border-yellow-500 block w-full border border-gray-400 rounded p-3 sm:p-4 lg:p-5 text-sm sm:text-base"
                placeholder="abdoulkader@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm sm:text-base font-medium mb-1">DATE</label>
              <input
                type="date"
                name="date"
                id="date"
                autoComplete="off"
                className="focus:ring-yellow-500 focus:border-yellow-500 block w-full border border-gray-400 rounded p-3 sm:p-4 lg:p-5 text-sm sm:text-base"
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm sm:text-base font-medium mb-1">HEURE</label>
              <input
                type="time"
                name="time"
                id="time"
                autoComplete="off"
                className="focus:ring-yellow-500 focus:border-yellow-500 block w-full border border-gray-400 rounded p-3 sm:p-4 lg:p-5 text-sm sm:text-base"
              />
            </div>
            <div>
              <label htmlFor="customer" className="block text-sm sm:text-base font-medium mb-1">NOMBRE DE PERSONNES</label>
              <input
                type="number"
                name="customer"
                id="customer"
                autoComplete="off"
                className="focus:ring-yellow-500 focus:border-yellow-500 block w-full border border-gray-400 rounded p-3 sm:p-4 lg:p-5 text-sm sm:text-base"
                placeholder="5"
              />
            </div>
            <div className="flex items-end">
              <input
                type="button"
                name="send"
                id="send"
                value="trouver une table "
                autoComplete="off"
                className="bg-rouge hover:bg-red-600 w-full text-white fff cursor-pointer tracking-widest uppercase py-3 sm:py-4 lg:py-5 rounded-md active:rotate-y-20 transition-normal text-sm sm:text-base"
              />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
