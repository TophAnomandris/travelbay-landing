import { Check } from "@mui/icons-material";
import { images } from "constants";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Heading3 } from "./Text";
import { Link } from "react-router-dom";

const Heritage = () => {
  return (
    <section className="py-9 lg:py-20 px-4 lg:px-16 bg-white-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-9">
        <article className="  ">
          <img src={images.heritageImg} alt={"unique story"} />
        </article>
        <article className="flex flex-col justify-center">
          <span className="uppercase text-sm font-medium text-orange-200">
            Heritage & Cultural Group Traveler
          </span>

          <Heading3
            text="Come home to something greater"
            className="mt-2 mb-2 font-bold text-blue-90 lg:w-4/5"
          />

          <p className="text-base lg:text-lg text-[#101C28]">
            Whether you're exploring ancestry, honoring tradition, or simply
            traveling with purpose—Travelbay helps you experience Africa in a
            way that’s meaningful to you.
          </p>

          <ul className="my-9 space-y-3">
            <li className="flex items-center gap-x-2">
              <Check size={12} className="text-orange-200" />
              <span className="font-medium text-base">
                Connect with heritage and culture through meaningful travel
              </span>
            </li>

            <li className="flex items-center gap-x-2">
              <Check size={12} className="text-orange-200" />
              <span className="font-medium text-base">
                Travel with family, friends, or like-minded communities
              </span>
            </li>

            <li className="flex items-center gap-x-2">
              <Check size={12} className="text-orange-200" />
              <span className="font-medium text-base">
                Blend educational, spiritual, and recreational experience.
              </span>
            </li>
          </ul>

          <div>
            <Link to="/auth/login">
              <button className="text-sm md:text-base w-fit px-3  md:px-5 py-4  flex items-center  justify-between  rounded-xl hover:bg-opacity-80 text-white-100 disabled:bg-opacity-50  focus:bg-opacity-80 bg-blue-100">
                Create an heritage trip
                <IoIosArrowForward className="ml-4" />
              </button>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Heritage;
