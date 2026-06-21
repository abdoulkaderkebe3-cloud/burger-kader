import React from "react";
import AliceCarousel from "react-alice-carousel";
import "../../../css/carousel.css";
import Container from "../../elements/Container";
import imge from "../../../medias/images/photos/117209-cnse-e (1).webp";
import Heading from "../../elements/Displaytitles/Heading";
import img1 from "/src/medias/images/products/Product-1.jpg";
import img2 from "/src/medias/images/products/Product-2.jpg";

export default function Event() {
  const Slide = ({ children, category, title, image, alt }) => {
    return (
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 sm:gap-6 p-3 sm:p-5">
        <div className="p-2 sm:p-6 md:p-8 lg:p-10 min-w-0">
          <Heading variant="h4">{category}</Heading>
          <Heading theme="marron" variant="h3" className="mb-3 sm:mb-5">
            {title}
          </Heading>
          <p className="tracking-wide text-sm sm:text-base lg:text-lg leading-relaxed font-light text-gray-800">
            {children}
          </p>
        </div>
        <div className="relative w-full min-w-0">
          <img
            src={image}
            alt={alt}
            className="w-full h-48 sm:h-64 md:h-full object-cover object-bottom rounded-md md:rounded-none"
          />
        </div>
      </div>
    );
  };

  const items = [
    <Slide
      image={imge}
      category="evenement  a venir"
      title="vivez la demi finale"
      alt="descrption"
    >
      Vivez la demi-finale en direct sur grand écran chez Burger House à
      Yopougon ! Ambiance conviviale, menu burger-frites-boisson à prix
      spécial et animations toute la soirée. Réservez votre table dès
      maintenant, les places partent vite.
    </Slide>,
    <Slide
      image={img1}
      category="decouvrez le nouveau burger"
      title="kader burger"
      alt="descrption"
    >
      Le Kader Burger fait son entrée sur la carte ! Steak de bœuf grillé
      100% pur bœuf, double cheddar fondant, oignons caramélisés et notre
      sauce maison épicée, le tout dans un pain brioché doré. Un goût
      intense pour les amateurs de sensations fortes.
    </Slide>,
    <Slide
      image={img2}
      category="decouvrez le burger fav"
      title="marasse burger"
      alt="descrption"
    >
      Le Marasse Burger, le chouchou de nos clients d'Abidjan ! Steak juteux,
      bacon croustillant, salade fraîche, tomate et notre sauce signature,
      généreusement garnis dans un pain moelleux. Un classique qui ne déçoit
      jamais.
    </Slide>,
  ];

  return (
    <Container>
      <div className="shadow-2xl mb-10 sm:mb-20 overflow-hidden rounded-lg">
        <AliceCarousel
          autoPlay
          infinite
          autoPlayInterval="4000"
          disableButtonsControls
          mouseTracking
          animationType="fadeout"
          items={items}
        />
      </div>
    </Container>
  );
}
