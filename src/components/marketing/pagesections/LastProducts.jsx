import React from "react";
import Container from "../../elements/Container";

export default function LastProducts() {
  return (
    <Container>
      <div className=" w-full h-96 my-20 lg:px-11  lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-9  flex flex-col   gap-3 text-white uppercase ">
        <div className=" lg:h-full lg:row-span-2  rounded-md bgg   lg:p-7 min-h-40 md:min-h-70 ">
          <div className="lg:text-2xl text-xm pl-2 pt-2">
            <span className=" lg:block font-bold block ">killer Buger </span>
            <span className=" font-black">
              le Burger le plus <span className="block lg:inline-block">populaire</span>
            </span>
          </div>
        </div>
        <div className="lg:h-full rounded-md lg:p-7 bggg p-7 md:min-h-50 ">
          <div className="text-xm">
            <span className="block lg:font-bold lg:text-lg">Island Burger</span>
            <span className="block lg:text-2xl font-black">plus de plaisir</span>
            <span className="block lg:text-2xl font-black">plus de gout</span>
          </div>
        </div>
        <div className=" h-full rounded-md p-9 bgggg md:min-h-50">
          <div className="lg:text-2xl text-base pt-2">
            <span className="block font-bold">orland's Burger</span>
            <span className=" font-black">frais & pimenté</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
