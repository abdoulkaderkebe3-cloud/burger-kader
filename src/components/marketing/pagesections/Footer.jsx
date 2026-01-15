import React from "react";
import Container from "../../elements/Container";
import immg from "../../../medias/images/background/bg-footer.jpg";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import logoo from "../../../medias/svg/Logo-burger-house-white.svg";
import ig from "../../../medias/svg/lets-icons_insta.svg";
import fb from "../../../medias/svg/ic_baseline-facebook.svg";
import tw from "../../../medias/svg/Vector (5).svg";
import gi from "../../../medias/svg/mdi_github.svg";

export default function Footer() {
  return (
    <Container>
      <div className="relative mb-20 text-white p-5    overflow-hidden ">
        <img
          src={immg}
          alt="un plan de travail "
          className="bg-black absolute top-0 left-0 w-full object-cover z-0"
        />
        <div className="grid grid-cols-2 relative h-96 z-10">
          <div className=" p-5 mt-8 mb-28  w-full h-full">
            <img src={logoo} alt=" logo" className="w-2/3 " />
            <p className="mt-10 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              cupiditate animi repudiandae quis illum error dolores harum
              blanditiis, laboriosam doloribus quo ratione, voluptates dolorum
              est corporis voluptas neque. Ratione, impedit!
            </p>
          </div>
          <div className=" h-full w-full  flex flex-col items-center justify-center">
            <div className=" flex items-center">
              <MapPinIcon className="h-10 w-10 mr-5" />
              <span className="uppercase font-extrabold text-lg tracking-tighter">
                {" "}
                yopougon toit rouge ,rue M37
              </span>
            </div>
            <div className=" flex items-center mt-5 ">
              <EnvelopeIcon className="h-10 w-10 mr-5" />
              <span className="uppercase font-extrabold text-lg tracking-tighter">
                info@buger-house.com
              </span>
            </div>
          </div>
          <div className="col-span-2 absolute bottom-0 left-0 z-20 flex items-center justify-between w-full h-10 px-5 pt-10 ">
            <div className="uppercase font-extrabold text-sm tracking-tighter">
              © burger house 2026. all rights reserved.
            </div>
            <div className="flex">
              <div>
                <img
                  src={ig}
                  alt=""
                  className="w-7 h-7 mr-2 p-1 bg-white rounded-full"
                />
              </div>
              <div>
                <img
                  src={fb}
                  alt=""
                  className="w-7 h-7 mr-2 p-1 bg-white rounded-full"
                />
              </div>
              <div>
                <img
                  src={tw}
                  alt=""
                  className="w-7 h-7 mr-2 p-1 bg-white rounded-full"
                />
              </div>
              <div>
                < a href="https://github.com/dashboard" target="_blanck">
                <img
                  src={gi}
                  alt="insta"
                  className="h-7 w-7 p-1 bg-white rounded-full "
                />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
