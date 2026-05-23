import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { faqs } from "constants/arrays";
import { SmallHeading2 } from "./Text";
import { BiMinus, BiPlus } from "react-icons/bi";

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleAccordionChange = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="px-4 lg:px-16 py-16 bg-white-100">
      <div className="flex flex-col md:flex-row  gap-y-6 w-full">
        <div className="w-full">
          <div>
            <div className="mb-1 uppercase text-sm text-blue-100 font-bold">
              We’ve provided answers to your
            </div>

            <SmallHeading2
              className="text-blue-90 lg:w-[58%]"
              text="Frequently Asked Questions"
            />
          </div>
        </div>
        <div className="w-full">
          {faqs.map((item, index) => (
            <Accordion
              className="!bg-[#F7F7F7] rounded-xl !shadow-none px-2 !border-none !outline-0 mb-2"
              key={index}
              expanded={expandedIndex === index}
              onChange={() => handleAccordionChange(index)}
            >
              <AccordionSummary
                expandIcon={expandedIndex === index ? <BiMinus /> : <BiPlus />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
                className="!p-0 !mb-0 !mt-0 border-b-0   !border-t-0"
              >
                <Typography>
                  <div className="font-interDisplay text-blue-90 font-semibold text-sm">
                    {item.Q}
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="border-b-0 bg-white-100 rounded-md mb-2">
                <Typography>
                  <div className="text-[#667885] font-[Satoshi] text-base">
                    {item.A}
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
