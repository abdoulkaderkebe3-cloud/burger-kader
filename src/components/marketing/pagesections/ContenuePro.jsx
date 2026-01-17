import React from "react";
import img1 from "/src/medias/images/products/Product-1.jpg";
import img2 from "/src/medias/images/products/Product-2.jpg";
import img3 from "/src/medias/images/products/Product-3.jpg";
import Heading from "../../elements/Displaytitles/Heading";
import Button from "../../elements/Button";
export default function ContenuePro() {
  return (
    <div className="grid  lg:grid-cols-3 lg:gap-x-1 lg:mt-10 lg:mb-20 ">
      <div className="h-full w-full  ">
        <div className="h-72 w-full">
          <img src={img1} alt="burger"  />
        </div>
        <div className="flex justify-center items-center flex-col px-5 pt-30 lg:pt-10 sm:pt-75 md:pt-100 xl:pt-23 2xl:pt-30 pb-10 min-[562px]:pt-45  ">
          <Heading variant="h3" className="lg:my-5 ">lorem ipsum dolor</Heading>
          <p className="text-center">
            {" "}
            lorem ipsum is simply text for designer and developper.
          </p>
          <Button color="danger" className="fff">
            commandez
          </Button>
        </div>
      </div>
      <div className="h-full  w-full">
        <div className="h-72 w-full">
          <img src={img2} alt="burger" />
        </div>
        <div className="flex justify-center items-center flex-col px-5 pt-30 min-[600px]:pt-45 lg:pt-10 sm:pt-75 md:pt-100 xl:pt-23 2xl:pt-30 pb-10 ">
          <Heading variant="h3" className="my-5">lorem ipsum dolor</Heading>
          <p className="text-center">
            {" "}
            lorem ipsum is simply text for designer and developper.
          </p>
          <Button color="danger" className="fff">
            commandez
          </Button>
        </div>
      </div>
      <div className="h-full w-full">
        <div className="h-72 w-full">
          <img src={img3} alt="burger" />
        </div>
        <div className="flex justify-center items-center flex-col px-5 pt-30 lg:pt-10 sm:pt-75 md:pt-100 xl:pt-23 2xl:pt-30  pb-10 min-[600px]:pt-45 ">
          <Heading variant="h3" className="my-5">lorem ipsum dolor</Heading>
          <p className="text-center">
            {" "}
            lorem ipsum is simply text for designer and developper.
          </p>
          <Button color="danger" className="fff">
            commandez
          </Button>
        </div>
      </div>
    </div>
  );
}
