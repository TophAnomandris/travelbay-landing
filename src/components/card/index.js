import React from "react";
import ReactCountryFlag from "react-country-flag";
import { images } from "../../constants/index";
import { Link } from "react-router-dom";
import ProgressiveImg from "components/progressiveImage/progressiveImg";
import travelLuggageLogo from "../../assets/icons/travelLuggageLogo.png";

const formatDate = (dateInput) => {
  const parsed = new Date(dateInput);
  if (Number.isNaN(parsed.getTime())) {
    return "";
  }

  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const Card = ({
  tripPackage,
  startDate,
  endDate,
  flag,
  price,
  available,
  className,
  details,
  containerClass,
  image,
  createdBy,
  origin,
}) => {
  const startLabel = formatDate(startDate);
  const endLabel = formatDate(endDate);

  return (
    <Link to={details}>
      <div
        className={`w-full flex flex-col bg-[#F5F7F9] h-full rounded-2xl ${containerClass} transition-all relative`}
      >
        <div className={`relative rounded-t-lg overflow-hidden ${className}`}>
          <div className="zoom-img">
            <ProgressiveImg
              src={`${(image || "").replace("jpg", "webp").replace("upload", "upload/w_600,h_500")}`}
              placeholderSrc={images.newyork}
              className="h-[264px] w-full object-cover rounded-t-[8px] hover:rounded-t-[8px]"
              alt=""
            />
          </div>

          {!available && (
            <div className="text-green-100 font-medium bg-white-100 text-xs p-2 rounded-100 w-48 text-center absolute bottom-28 left-28 shadow-btn">
              🚨 This trip is coming soon
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col justify-between gap-y-2 rounded-b-lg p-4 text-left">
          <div>
            {tripPackage && (
              <div className="w-full text-[20px] text-blue-200 font-medium flex-wrap">
                <span>{tripPackage}</span>
                <span>{<ReactCountryFlag countryCode={flag} svg />}</span>
              </div>
            )}

            {price && (
              <div className="mt-[8px] text-[21px] text-[#093549] font-bold flex flex-wrap items-center">
                ${price}
                <span className="font-medium text-[16px] whitespace-pre">
                  {" "}
                  (Best Price Offer)
                </span>
              </div>
            )}

            {startLabel && endLabel && (
              <div className="flex mt-2 uppercase text-base text-[#667085] font-bold">
                {startLabel} - {endLabel}
              </div>
            )}
          </div>

          <div className="text-tint-70 text-sm font-medium border-t flex items-center gap-x-1 uppercase border-white-soft pt-2">
            By
            {origin === "PLANNER" ? (
              <img
                className="w-4 h-4"
                src={createdBy?.brand?.image || images.plannerLogo}
                alt={createdBy?.brand?.name}
                onError={(e) => {
                  e.currentTarget.src = images.plannerLogo;
                }}
              />
            ) : (
              <img className="w-4 h-5" src={travelLuggageLogo} alt="Travelbay" />
            )}
            <span className="text-tint-110">
              {origin === "PLANNER" ? createdBy?.brand?.name : "Travelbay"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { Card };
