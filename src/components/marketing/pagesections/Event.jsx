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
      <div className=" grid lg:grid-cols-2 p-6 grid-cols-1   ">
        <div className=" p-5 sm:p-10 mb-10">
          <Heading variant="h4">{category}</Heading>
          <Heading theme="marron" variant="h3" className="mb-5">
            {title}
          </Heading>
          <p className="tracking-wide text-lg leading-relaxed font-light text-gray-800">
            {children}
          </p>
        </div>
        <div className="relative w-full h-full">
          <img
            src={image}
            alt={alt}
            className="lg:absolute lg:top-0 lg:left-0 w-full h-full object-cover object-bottom  lg:pb-15 lg:z-0 p-5 lg:p-0 "
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
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ut fugit
      at placeat nam deserunt in incidunt quis maiores quaerat? Animi dolore
      ratione a ut illum vel! Minus, ad dolores orem ipsum is simply text for
      designer and developper.
    </Slide>,
    <Slide 
      image={img1}
      category="decouvrez le nouveau burger"
      title="kader burger"
      alt="descrption"
    >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ut fugit
      at placeat nam deserunt in incidunt quis maiores quaerat? Animi dolore
      ratione a ut illum vel! Minus, ad dolores orem ipsum is simply text for
      designer and developper.
    </Slide>,
    <Slide
      image={img2}
      category="decouvrez le burger fav"
      title="marasse burger"
      alt="descrption"
    >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ut fugit
      at placeat nam deserunt in incidunt quis maiores quaerat? Animi dolore
      ratione a ut illum vel! Minus, ad dolores orem ipsum is simply text for
      designer and developper.
    </Slide>,
  ];

  return (
    <Container>
      <div className="shadow-2xl mb-20 h-96 ">
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
