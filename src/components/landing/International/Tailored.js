import React from "react";
import { Link } from "react-router-dom";
import { Check } from "@mui/icons-material";
import { images } from "constants";
import { IoIosArrowForward } from "react-icons/io";
import { Heading2, Heading3 } from "./Text";

const Tailored = () => {
  return (
    <section className="pb-9 lg:pb-20 px-4 lg:px-16 bg-white-100">
      <div className="text-center">
        <span className="uppercase text-sm font-medium text-blue-100">
          WHY TRAVELBAY
        </span>

        <Heading2
          text="Tailored travel for real connection, culture, and ease."
          className="lg:w-2/3 xl:w-[60%] mx-auto mt-2 mb-4 text-blue-90"
        />
      </div>

      <div className="mt-9 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-9">
        <article className="  ">
          <img src={images.tailoredImg} alt={"unique story"} />
        </article>
        <article className="flex flex-col justify-center">
          <span className="uppercase text-sm font-medium text-gold-300">
            Luxury Leisure Traveler
          </span>

          <Heading3
            text="Luxury meets culture"
            className="mt-1 mb-2 font-bold text-blue-90"
          />

          <p className="text-base lg:text-lg text-[#101C28]">
            Indulge in elevated travel with an African soul. Whether it’s a
            coastal escape or a high-end cultural tour, we tailor every detail
            to your taste.
          </p>

          <ul className="my-4 space-y-3">
            <li className="flex items-center gap-x-2">
              <Check size={12} className="text-gold-300" />
              <span className="font-medium text-base">
                Premium retreats with a personal touch
              </span>
            </li>

            <li className="flex items-center gap-x-2">
              <Check size={12} className="text-gold-300" />
              <span className="font-medium text-base">
                Local experiences that feel global
              </span>
            </li>

            <li className="flex items-center gap-x-2">
              <Check size={12} className="text-gold-300" />
              <span className="font-medium text-base">
              Travel, stays, and itineraries all handled
              </span>
            </li>
          </ul>

          <div className="">
            <Link to="/auth/login">
              <button className="text-sm md:text-base w-fit px-3  md:px-5 py-4  flex items-center  justify-between  rounded-xl mt-6 hover:bg-opacity-80 text-white-100 disabled:bg-opacity-50  focus:bg-opacity-80 bg-blue-100">
                Create a luxurious African trip{" "}
                <IoIosArrowForward className="ml-4" />
              </button>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Tailored;
