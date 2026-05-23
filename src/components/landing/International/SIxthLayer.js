import { reviews } from "constants/arrays";
import { IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";

const videoTestimonials = [
  {
    id: 1,
    name: "Christie",
    url: "https://res.cloudinary.com/travelbay/video/upload/v1752771727/IMG_5222_odvnue.mov",
  },

  {
    id: 2,
    name: "HoneyMarku",
    url: "https://res.cloudinary.com/travelbay/video/upload/v1752771087/location%20images/IMG_5221_tmemlz.mp4",
  },
];

const SIxthLayer = () => {
  return (
    <section className="py-9 lg:py-16  px-4 lg:px-16">
      <span className="block uppercase text-center text-sm font-medium text-blue-100">
        testimonials
      </span>

      <h2 className="lg:w-[55%] font-bold mt-2 font-interDisplay text-[32px] lg:text-[56px] leading-[40px]  lg:leading-[64px] tracking-small lg:tracking-light text-[#093549] text-left lg:mx-auto">
        Here’s what
        <span className="mx-2 italic font-playfair font-medium text-tint-70">
          our travelers
        </span>{" "}
        say about our services
      </h2>

      <VideoTestimonials videoTestimonials={videoTestimonials} />

      {/* <div className="mt-9 mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {videoTestimonials?.map((item) => (
          <div className="relative overflow-hidden h-[400px] md:h-[700px] bg-black-100 w-full rounded-xl border-2 border-white-100 shadow-custom-combo">
            <FilePlayer
              controls={true}
              url={item.url}
              width="100%"
              height="100%"
              // className="absolute inset-0 rounded-xl"
              config={{
                file: {
                  attributes: {
                    style: {
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    },
                  },
                },
              }}
            />

            <div className="absolute bottom-20 font-bold px-4  uppercase font-interDisplay text-white-100 text-xl lg:text-[32px]">
              {item.name}
            </div>
          </div>
        ))}
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((item, index) => (
          <div
            style={{ boxShadow: "0px 2px 20px rgba(18, 18, 18, 0.1)" }}
            className=" h-full bg-white-100 rounded-2xl p-6 flex flex-col justify-between"
            key={index}
          >
            <div className="flex items-center gap-x-3">
              <div className="w-12 h-12 bg-green-50 rounded-full relative">
                <img
                  className="h-full w-full object-cover"
                  src={item.img}
                  alt={item.name}
                />
              </div>

              <div>
                <h6 className=" font-semibold text-lg font-interDisplay text-[#011509] ">
                  {item.name}
                </h6>

                <span className="text-tint-70 text-sm">{item.role}</span>
              </div>
            </div>
            <div className="text-base mt-4 text-tint-100">{item.review}</div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10">
        <Link to="/auth/login">
          <button className="text-sm md:text-base w-fit mx-auto px-3  md:px-5 py-4  flex items-center  justify-between  rounded-xl mt-6 hover:bg-opacity-80 text-white-100 disabled:bg-opacity-50  focus:bg-opacity-80 bg-blue-100">
            Create your experience
            <IoIosArrowForward className="ml-4" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SIxthLayer;

function VideoTestimonials({ videoTestimonials }) {
  return (
    <div className="mt-9 mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {videoTestimonials.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden h-[400px] md:h-[700px] bg-black-100 w-full rounded-xl border-2 border-white-100 shadow-custom-combo"
        >
          <video
            src={item.url}
            controls
            className="w-full h-full object-contain rounded-xl"
          >
            Sorry, your browser doesn’t support embedded videos.
          </video>

          <div className="absolute bottom-20 font-bold px-4 uppercase font-interDisplay text-white-100 text-xl lg:text-[32px]">
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
}
