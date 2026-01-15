import React from "react";
import Container from "../../elements/Container";

export default function LastProducts() {
  return (
    <Container>
      <div className=" w-full h-96 my-20 lg:px-11  lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-9  grid grid-cols-1 grid-rows-1  gap-3 text-white uppercase ">
        <div className=" h-full lg:row-span-2 rounded-md bgg lg:p-7 row-span-3 ">
          <div className="lg:text-2xl text-base pl-2 pt-2">
            <span className=" block font-bold">killer Buger</span>
            <span className=" font-black">
              Burger le plus <span className="block lg:inline-block">populaire</span>
            </span>
          </div>
        </div>
        <div className=" h-full rounded-md lg:p-7 bggg p-7 ">
          <div className="">
            <span className="block lg:font-bold lg:text-lg">Island Burger</span>
            <span className="block lg:text-2xl font-black">plus de plaisir</span>
            <span className="block lg:text-2xl font-black">plus de gout</span>
          </div>
        </div>
        <div className=" h-full rounded-md p-9 bgggg">
          <div className="lg:text-2xl text-base pt-2">
            <span className="block font-bold">orland's Burger</span>
            <span className=" font-black">frais & pimenté</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
