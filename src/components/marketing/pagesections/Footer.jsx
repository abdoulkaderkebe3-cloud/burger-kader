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
      <div className="relative mb-20 text-white p-5 overflow-hidden">
        <img
          src={immg}
          alt="un plan de travail"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="grid md:grid-cols-2 grid-cols-1 relative z-10 gap-6 py-12">
          <div className="p-5 mt-8 w-full">
            <img src={logoo} alt="logo" className="w-40 sm:w-2/3" />
            <p className="mt-6 text-sm sm:text-base leading-relaxed max-w-prose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              cupiditate animi repudiandae quis illum error dolores harum
              blanditiis, laboriosam doloribus quo ratione, voluptates dolorum
              est corporis voluptas neque. Ratione, impedit!
            </p>
          </div>
          <div className="w-full flex flex-col items-start md:items-center justify-center p-5">
            <div className="flex items-center">
              <MapPinIcon className="h-8 w-8 mr-4" />
              <span className="uppercase font-extrabold text-sm sm:text-lg tracking-tighter">
                yopougon toit rouge, rue M37
              </span>
            </div>
            <div className="flex items-center mt-4">
              <EnvelopeIcon className="h-8 w-8 mr-4" />
              <span className="uppercase font-extrabold text-sm sm:text-lg tracking-tighter">
                <a href="https://github.com/abdoulkaderkebe3-cloud/burger-kader">info@buger-house.com.kader</a>
              </span>
            </div>
          </div>
        </div>
        <div className="relative z-10 border-t border-white/20 mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between px-5">
          <div className="uppercase font-extrabold text-sm tracking-tighter text-center sm:text-left">
            © kebe abdoul kader 2026. all rights reserved.
          </div>
          <div className="flex mt-3 sm:mt-0">
            <img
              src={ig}
              alt=""
              className="w-7 h-7 mr-2 p-1 bg-white rounded-full"
            />
            <img
              src={fb}
              alt=""
              className="w-7 h-7 mr-2 p-1 bg-white rounded-full"
            />
            <img
              src={tw}
              alt=""
              className="w-7 h-7 mr-2 p-1 bg-white rounded-full"
            />
            <a
              href="https://github.com/dashboard"
              target="_blanck"
              rel="noreferrer"
            >
              <img
                src={gi}
                alt="github"
                className="h-7 w-7 p-1 bg-white rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
