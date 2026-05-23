import React from "react";
import IntTop from "components/landing/International/TopLayer";
import IntSecond from "components/landing/International/SecondLayer";
import EasySteps from "components/landing/International/ThirdLayer";
import IntSixth from "components/landing/International/SIxthLayer";
import IntFaq from "components/landing/International/FAQ";
import Community from "components/landing/International/Community";
import UnAuthFooter from "layout/NonAuthLayout/Footer";
import Tailored from "components/landing/International/Tailored";
import JoinVendor from "components/landing/International/JoinVendor";
import CorporateRetreat from "components/landing/International/CorporateRetreat";
import Heritage from "components/landing/International/Heritage";
import Features from "components/landing/International/FourthLayer";

const Landing = () => {
  return (
    <div className="font-[Satoshi] bg-primary-100">
      <IntTop />
      <div className="max-w-screen-2xl mx-auto">
        <IntSecond country="USA" />
        <Tailored />
        <CorporateRetreat />
        <Heritage />
        <EasySteps />
        <Features />
        <JoinVendor />
        <IntSixth />
        <IntFaq />
      </div>
      <Community />
      <UnAuthFooter AccType={true} />
    </div>
  );
};

export default Landing;
