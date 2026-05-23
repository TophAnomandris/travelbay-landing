import React from "react";
import { images } from "constants";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { Heading2, Heading6 } from "./Text";

const easySteps = [
  {
    id: 1,
    img: images.chooseImg,
    title: "Choose Your Journey",
    text: "Pick from curated trips or build your own. We’ll guide you either way.",
  },
  {
    id: 2,
    img: images.bookSaveImg,
    title: "Book or Save",
    text: "Pay upfront or save your trip in the Vault and pay in easy installments.",
  },
  {
    id: 3,
    img: images.showUpImg,
    title: "Show Up, We’ll Handle the Rest.",
    text: "Your experience will be immersive, safe, and one to talk about forever.",
  },
];

const EasySteps = () => {
  return (
    <section className="py-9 lg:py-16 px-4 lg:px-16 bg-white-100">
      <span className="uppercase text-sm font-medium text-blue-100">
        HOW IT WORKS
      </span>

      <Heading2
        text="Easy steps to make your trip happen"
        className="xl:w-[45%] mt-3 mb-2 font-bold text-blue-90 text-2xl lg:text-[56px] lg:leading-[64px]"
      />

      <div className="mt-9 lg:my-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {easySteps?.map((step) => (
          <article key={step.id} className="text-center">
            <img src={step.img} alt={step.title} />

            <Heading6 text={step.title} className="mt-6 mb-2   text-blue-90" />

            <p className="lg:px-6 text-tint-70 text-base">{step.text}</p>
          </article>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Link to="/auth/login">
          <button className="text-sm md:text-base w-fit px-3  md:px-5 py-4  flex items-center  justify-between  rounded-xl mt-6 hover:bg-opacity-80 text-white-100 disabled:bg-opacity-50  focus:bg-opacity-80 bg-blue-100">
            Create your experience
            <IoIosArrowForward className="ml-4" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default EasySteps;
