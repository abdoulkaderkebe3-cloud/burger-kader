import React from "react";
import Container from "../../elements/Container";
import Header from "./Header";
import burger from "/src/medias/images/heroTop/burger-hero-top.png";
import Button from "../../elements/Button";
export default function heroTop() {
  return (
    <div className="  bg-kader w-full  ">
      <div className="bg w-full h-full  bg-repeat pb-20 md:pb-40">
        <Container>
          <Header />
          <div className=" w-full relative md:mt-28 mt-10  ">
            <img
              src={burger}
              className="absolute z-0 lg:-top-64 -top-20 right-0  hidden lg:block  "
              style={{ width: "568px" }}
              alt=""
            />
            <div className=" hidden lg:block   absolute right-80 top-40 bg-rouge w-40 rounded-full  h-40 p-3">
              <div className="w-full h-full border-2 border-dashed border-white text-white rounded-full flex items-center">
                <div className="text-center">
                  <span className="font-extrabold block">
                    <span className="text-5xl">2</span>.5k
                  </span>
                  <span className="tracking-widest uppercase  text-sm ">
                    {" "}
                    seulement
                  </span>
                </div>
              </div>
            </div>

            <div className=" text-[#3d2514] uppercase text-xl w-full relative z-1 text-left md:text-center lg:text-left ">
              <h1 className="mb-4 font-semibold">
                c'est le moment de gouter au bon gout des hamburgers
              </h1>
              <h2 className=" shadowTitle fff ">
                {" "}
                <span className="md:text-8xl block text-7xl ">Burger</span>{" "}
                <span className="md:text-6xl text-5xl sm:inline-block  ">
                  House
                </span>{" "}
                <span className="text-4xl sm:ml-3 ml-0">
                  {" "}
                  Click <span className="text-rouge">&</span> collect
                </span>{" "}
              </h2>
            </div>
          </div>
          <Button
            className="mt-5 w-full lg:w-1/2    rounded-sm"
            color="marron"
            theme="big"
          >
            créer un compte
          </Button>
        </Container>
      </div>
    </div>
  );
}
