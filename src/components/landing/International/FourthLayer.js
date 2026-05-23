import React from "react";
import { images } from "constants";
import { Heading2 } from "./Text";

const Features = () => {
  return (
    <section className="py-9 lg:py-20 px-4 lg:px-16 bg-white-neutral">
      <div className="text-center">
        <span className="uppercase text-sm font-medium text-blue-100">
          FEATURES
        </span>

        <Heading2
          text="Built to make your travel feel effortless"
          className="lg:w-2/3 xl:w-1/2 mx-auto mt-2 mb-4 text-[#093549]"
        />

        <p className="text-base lg:text-lg text-tint-110 ">
          From planning to payment, we’ve taken care of the details so you can
          focus on the experience.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <article className=" ">
          <img
            src={images.designImg}
            alt={"design your journey with travelbap"}
          />
        </article>

        <article className=" ">
          <img
            src={images.planNowImg}
            alt={"design your journey with travelbap"}
          />
        </article>

        <article className=" ">
          <img
            src={images.shareJoyImg}
            alt={"share your journey with travelbap"}
          />
        </article>

        <article className=" ">
          <img
            src={images.supportYouImg}
            alt={
              "we are here to support you through your journey with travelbap"
            }
          />
        </article>
      </div>
    </section>
  );
};

export default Features;
