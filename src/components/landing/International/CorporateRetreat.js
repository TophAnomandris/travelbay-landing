import { Check } from "@mui/icons-material";
import { images } from "constants";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Heading3 } from "./Text";
import { Link } from "react-router-dom";

const CorporateRetreat = () => {
  return (
    <section className=" py-9 lg:py-20 px-4 lg:px-16 bg-[#F6F8FA] ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-9">
        <article className="order-2 lg:order-1  flex flex-col justify-center">
          <span className="uppercase text-sm font-medium text-blue-100">
            Corporate Retreat Traveler
          </span>
          <Heading3
            className="xl:w-3/4 my-2 text-blue-90"
            text="For teams that need more than a boardroom"
          />

          <p className="text-base lg:text-lg text-[#101C28]">
            Get your team out of the office and into a space where ideas flow,
            bonds strengthen, and culture inspires.
          </p>
          <ul className="my-4 space-y-3">
            <li className="flex items-center gap-x-2">
              <Check size={12} className="text-blue-100" />
              <span className="font-medium text-base">
                Meaningful team retreats in dynamic settings
              </span>
            </li>

            <li className="flex items-center gap-x-2">
              <Check size={12} className="text-blue-100" />
              <span className="font-medium text-base">
                Combine team bonding with cultural or luxury experiences.
              </span>
            </li>

            <li className="flex items-center gap-x-2">
              <Check size={12} className="text-blue-100" />
              <span className="font-medium text-base">
                Simplified logistics across travel, accommodation, and itinerary
              </span>
            </li>
          </ul>
          <div>
            <Link to="/auth/login">
              <button className="text-sm md:text-base w-fit px-3  md:px-5 py-4  flex items-center  justify-between  rounded-xl mt-6 hover:bg-opacity-80 text-white-100 disabled:bg-opacity-50  focus:bg-opacity-80 bg-blue-100">
                Create your corporate trip
                <IoIosArrowForward className="ml-4" />
              </button>
            </Link>
          </div>
        </article>

        <article className="order-1 lg:order-2  ">
          <img src={images.corporateImg} alt={"unique story"} />
        </article>
      </div>
    </section>
  );
};

export default CorporateRetreat;
