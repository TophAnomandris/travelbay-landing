import React from "react";
import { Heading2 } from "./Text";
import JoinUsSlider from "./JoinUsSlider";

const JoinVendor = () => {
  return (
    <section className="px-4  lg:px-16 py-9 lg:pt-[70px] lg:pb-16 grid grid-cols-1 lg:grid-cols-7 gap-6 bg-white-100  ">
      <article className="lg:col-span-3 flex flex-col justify-center">
        <span className="block uppercase text-sm font-medium text-blue-100">
          PARTNERSHIPS
        </span>

        <Heading2
          className="mt-6 mb-4 text-[#093549] lg:w-11/12"
          text="Join us in making the difference."
        />

        <p className="text-base lg:text-lg text-tint-110 mt-2">
          Travelbay is powered by community. Whether you’re providing services
          or shaping stories, there’s a place for you here.
        </p>
      </article>

      <article className="lg:col-span-4">
        <JoinUsSlider />
      </article>
    </section>
  );
};

export default JoinVendor;
