import { useState, useEffect } from "react";
import vendorIcon from "assets/icons/vendor.svg";
import influencerIcon from "assets/icons/infulencer.svg";
import { Heading4 } from "./Text";
import { Check } from "@mui/icons-material";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const JoinUsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // advance every 5 s
  useEffect(() => {
    const id = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="flex h-full gap-x-2">
      <section
        style={{
          backgroundImage: `url("/aboutHeader.png")`,
        }}
        className={`${
          slide.id === "vendor" ? "bg-orange-50" : "bg-[#EEF7FC]"
        } flex-1  bg-blend-multiply rounded-2xl py-12 px-9 relative overflow-hidden`}
      >
        <article>
          <img src={slide.img} alt={slide.title} />

          <Heading4
            className="mt-6 text-2xl lg:text-4xl font-semibold text-[#121212]"
            text={slide?.title}
          />

          <p className="text-base lg:text-lg text-[#343F54] mt-2 mb-4">
            {slide.text}
          </p>

          <ul className="space-y-3">
            {slide?.lists?.map((item, index) => (
              <li
                className="font-medium text-base lg:text-lg flex items-center gap-x-2"
                key={index}
              >
                <Check
                  className={
                    slide?.id === "vendor"
                      ? " text-[#E98D0F]"
                      : "text-[#1C9FDA]"
                  }
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <Link to="/auth/signup">
              <button
                className={`flex items-center gap-x-2 text-sm font-medium ${
                  slide?.id === "vendor" ? "text-[#E98D0F]" : "text-blue-100"
                }`}
              >
                <IoIosArrowDropright
                  className={` h-5 w-5 ${
                    slide?.id === "vendor" ? "text-[#E98D0F]" : "text-blue-100"
                  }`}
                />{" "}
                {slide?.cta}
              </button>
            </Link>
          </div>
        </article>
      </section>

      {/* indicators */}
      <div className=" h-full flex flex-col gap-y-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`h-full w-2  rounded-full transition-colors ${
              i === currentSlide ? "bg-blue-100" : "bg-[#E1E4EA]"
            }`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default JoinUsSlider;

const slides = [
  {
    id: "vendor",
    img: vendorIcon,
    title: "As a vendor",
    text: "Offer services that elevate African travel. From lodging and transport to food, wellness, and cultural experiences, partner with us to create something unforgettable.",
    lists: [
      "Bring value to our travelers",
      "Expand your client base",
      "Work with a trusted travel platform",
    ],
    cta: "Register as a vendor",
  },
  {
    id: "influencer",
    img: influencerIcon,
    title: "As an influencer",
    text: "Use your voice and creativity to inspire others to explore Africa with intention. Partner with us to create content that celebrates culture, connection, and discovery",
    lists: [
      "Tell stories that matter",
      "Grow your audience",
      "Collaborate on meaningful campaigns",
    ],
    cta: "Register as an Influencer",
  },
];
