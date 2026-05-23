import React from "react";

import { images } from "constants";
import { IoIosArrowForward } from "react-icons/io";
import { SmallHeading2 } from "./Text";
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <section
      style={{
        backgroundImage: `url("/aboutHeader.png")`,
      }}
      className="py-10 px-4 lg:px-16 "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-screen-2xl mx-auto">
        <article className="lg:col-span">
          <span className="uppercase text-sm font-medium text-blue-100">
            Join Our Community
          </span>

          <SmallHeading2
            text="Curated trips and a global network of travelers."
            className="mt-2 mb-4 font-bold text-blue-90 text-3xl lg:text-5xl lg:leading-[60px]"
          />

<a 
  href="https://chat.whatsapp.com/LR4uxOMud3F7HW29lYtZHO?mode=ems_share_c" 
  target="_blank" 
  rel="noopener noreferrer"
>
            <button className="text-sm md:text-base w-fit px-3  md:px-5 py-4  flex items-center  justify-between  rounded-xl mt-6 hover:bg-opacity-80 text-white-100 disabled:bg-opacity-50  focus:bg-opacity-80 bg-blue-100">
              Start Exploring <IoIosArrowForward className="ml-4" />
            </button>
          </a>
        </article>

        <div>
          <img
            src={images.communityImg}
            alt="join our community at travelbay"
          />
        </div>
      </div>
    </section>
  );
};

export default Community;
