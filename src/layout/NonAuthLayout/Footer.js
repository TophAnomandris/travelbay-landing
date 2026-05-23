import React from "react";
import { Link } from "react-router-dom";
import {
  companyLink,
  footerIcons,
  footerLinks,
  footerNumbers,
  footerNumbersInt,
  intFooterIcons,
} from "components/items";
import { images } from "constants";

const UnAuthFooter = ({ AccType }) => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="bg-[#06202C]">
      <div className="font-[Satoshi] bg-[#06202C] text-gray-100 font-normal text-base h-auto sm:pb-[60px] pb-[30%] w-full max-w-[1440px]">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-9 px-[30px] md:px-[30px] lg:px-[90px] lg:grid-cols-9">
          <div className="lg:col-span-4 md:col-span-4 md:border border-[#303030] pt-[83px] md:border-l-0 pb-[34px]">
            <img src={images.fooLogo} alt="Travelbay" />

            <div className="mt-[35px] text-[#D0D5DD] font-medium mb-[24px]">
              Be the first to know when there's a new offer
            </div>

            <div className="flex input_change h-[50px]">
              <input
                placeholder="E.g Yourmail@gmail.com"
                className="bg-[#fff] px-[10px] font-medium rounded-l-[8px] w-full md:w-[70%] lg:w-[40%] placeholder:text-[#5D6D8F] text-[12px]"
              />
              <button className="btn_bg bg-[#5D6D8F] rounded-r-[8px] md:w-[25%] w-[50%] lg:w-[13%] text-[#fff] text-[12px] font-medium">
                Subscribe
              </button>
            </div>
          </div>

          <div className="md:border border-[#303030] pt-[30px] md:pt-[83px] pl-0 md:pl-[34px] col-span-2 pb-[34px]">
            <div className="mb-[24px] text-lg text-[#98A2B3] text-[14px]">
              COMPANY
            </div>
            {companyLink.map((data) => (
              <div
                key={data.id}
                className="mb-[16px] text-[#FCFCFD] font-medium"
              >
                <Link to={data.route}>{data.title}</Link>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 md:col-span-3 md:border border-[#303030] pt-[30px] md:pt-[83px] pb-[34px] pl-0 md:pl-[22px] md:border-r-0">
            <div className="mb-[24px] text-lg text-[#98A2B3] text-[14px]">
              CONTACT US
            </div>
            <div className="mb-[16px] flex md:items-start lg:items-center lg:flex-row md:flex-col gap-[16px]">
              {(AccType ? footerNumbersInt : footerNumbers)?.phone?.map(
                (data, i) => (
                  <div key={i} className="flex items-center gap-[19px]">
                    <img src={data?.icon} alt="contact" />
                    <div
                      className={`${
                        i === 1 ? "lg:hidden md:flex hidden" : "hidden"
                      }`}
                    ></div>
                    <Link to={data.link} className="text-[#FCFCFD] font-medium">
                      {data.num}
                    </Link>
                  </div>
                ),
              )}
            </div>
            <div className="mb-[16px] flex items-center gap-[19px]">
              <img
                src={(AccType ? footerNumbersInt : footerNumbers)?.mail?.icon}
                alt="email"
              />
              <div className="text-[#FCFCFD] font-medium">
                {(AccType ? footerNumbersInt : footerNumbers)?.mail?.text}
              </div>
            </div>
            <div className="mb-[16px] flex items-center gap-[19px]">
              <img
                src={
                  (AccType ? footerNumbersInt : footerNumbers)?.address?.icon
                }
                alt="address"
              />
              <div className="text-[#FCFCFD] font-medium">
                {(AccType ? footerNumbersInt : footerNumbers)?.address?.text}
              </div>
            </div>
          </div>
        </div>

        <div className="px-[30px] md:px-[30px] lg:px-[90px] mt-0 md:mt-[37px] flex flex-col md:flex-row items-center sm:items-start md:items-center justify-center md:justify-between">
          <div className="flex text-[#D0D0D0] flex-col sm:flex-row items-center w-full gap-[10px] sm:gap-[unset] justify-between md:justify-start md:gap-[32px]">
            <div className="font-medium">© {year} Travelbay. All rights reserved.</div>

            <div className="flex items-center gap-[16px]">
              {footerLinks?.map((data, i) => (
                <Link key={i} to={data.route}>
                  {data.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex gap-[34px] justify-center sm:justify-start items-center mt-[37px] md:mt-0">
            {(AccType ? intFooterIcons : footerIcons).map((data) => (
              <a
                key={data.id}
                target="_blank"
                rel="noreferrer"
                href={data.route}
              >
                <img
                  className="sm:w-[48px] sm:h-[48px]"
                  src={data.icon}
                  alt="social"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnAuthFooter;
