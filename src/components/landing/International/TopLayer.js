import React from "react";
import { images } from "constants";
import LandingPageHeader from "layout/NonAuthLayout/LandingPageHeader";
import { IoIosArrowForward } from "react-icons/io";

const TopLayer = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/hero1.webp")`,
      }}
      className="bg-no-repeat bg-cover bg-center w-full h-screen"
    >
      <LandingPageHeader shadowed={false} />

      <div className="pt-[90px] relative mx-auto w-full ">
        <div className=" h-10 flex items-center relative">
          <img
            src={images.curve}
            alt=""
            className="absolute top-0 z-[55] h-full w-full"
          />

          <div className=" z-[60] w-full bar_content whitespace-nowrap max-w-[1440px]">
            <div className="flex items-center gap-[10px] font-bold text-[#06202C] text-[14px]">
              <img alt="" src={images.car} />
              Africa Awaits! Book Now, Pay in Full, and Save 3% on Your
              Adventure!
              <img alt="" src={images.car1} />
              Africa Awaits! Book Now, Pay in Full, and Save 3% on Your
              Adventure!!
              <img alt="" src={images.car2} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 ">
          <div className="flex flex-col gap-y-4 justify-center w-full pt-[40px] ">
            <div className="mt-2 md:mt-5 relative flex-col flex justify-center items-center gap-y-4">
              <h1 className=" tracking-small lg:tracking-heavy font-interDisplay text-blue-90  w-[80%] text-center text-[32px] md:text-6xl lg:text-7xl leading-[40px] lg:leading-[115%]  2xl:text-8xl font-bold">
                The Easiest Way to{" "}
                <span className="block italic font-playfair font-normal text-brown-100">
                  Experience the Real Africa
                </span>
              </h1>
              <div className="text-[#1D2939] px-5 md:px-[unset] text-center mb-0 md:mb-2 text-base md:text-xl 2xl:text-2xl ">
                Reconnect with your roots and rediscover Africa, your way.
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <button className="cursor-pointer land_btn rounded-[8px] gap-[11px] h-[48px] md:h-[56px] font-bold hover:bg-opacity-80 px-[20px] md:px-[40px] text-white-100 disabled:bg-opacity-50 focus:bg-opacity-80 bg-blue-100 flex justify-center items-center">
                <span>Get Started</span>
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopLayer;
