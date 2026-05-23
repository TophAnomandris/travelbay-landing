import React from "react";
import { LandingPagePackages } from "components/packages";
import { IoIosArrowForward } from "react-icons/io";
import { Heading3 } from "./Text";

const SecondLayer = ({ country }) => {
  return (
    <div
      id="we-offer"
      className="bg-white-100 py-9 lg:pt-14 lg:pb-0 px-4 lg:px-16"
    >
      <div className="">
        <div className="flex items-end justify-between mb-9">
          <div className="">
            <Heading3 text="Handpicked Trips. Real Experiences." className="" />
            <p className="mt-2 text-tint-80 text-base md:text-lg md:w-2/3">
              We’ve scouted the continent to find the best deals and
              destinations so you can turn that dream African escape into your
              next real adventure.
            </p>
          </div>
        </div>

        <LandingPagePackages country={country} />

        <div className="hidden lg:block mt-6 relative">
          <div className="pointer-events-none cursor-not-allowed">
            <LandingPagePackages country={country} />
          </div>

          <div className="absolute z-[40] inset-0 pointer-events-auto flex justify-center items-center bg-gradient-to-b from-white-100/60 via-white-100 via-40% to-white-100 ">
            <button className="cursor-pointer land_btn rounded-[8px] gap-[11px] h-[56px] font-bold hover:bg-opacity-80 px-[20px] md:px-[40px] text-white-100 disabled:bg-opacity-50 focus:bg-opacity-80 bg-blue-100 flex justify-center items-center">
              <span>Explore more packages</span>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondLayer;
