import React, { Fragment, useEffect, useState } from "react";
import { ReactComponent as Logo } from "assets/img/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import { images } from "constants";
import { MdMenu } from "react-icons/md";

const LandingPageHeader = ({ shadowed }) => {
  const location = useLocation();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Gallery", link: "/gallery" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/contents" },
  ];

  return (
    <Fragment>
      <header
        style={{
          boxShadow: scroll ? "0px 4px 48px rgba(226, 226, 226, 0.1)" : "",
        }}
        className={` absolute w-full bg-transparent z-[1000] font-[Satoshi] py-5 px-4 lg:px-12 ${
          shadowed ? "shadow-header drop-shadow-lg" : ""
        }`}
      >
        <nav className="flex items-center justify-between w-full">
          <div className="flex flex-1 items-center gap-x-8">
            <NavLink to="/">
              <Logo className="w-24 sm:w-32" />
            </NavLink>

            <div className="hidden lg:flex items-center gap-x-7">
              {navLinks.map((item) => (
                <NavLink key={item.link} to={item.link}>
                  <span
                    className={`${
                      location.pathname === item.link
                        ? "text-blue-100"
                        : "text-[#06202C]"
                    } hover:text-blue-100 transition-colors block text-sm font-medium cursor-pointer`}
                  >
                    {item.name}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex-1 hidden lg:flex justify-end gap-x-6">
            <button className="cursor-pointer rounded-lg gap-x-3 font-bold hover:bg-opacity-80 px-5 md:px-10 disabled:bg-opacity-50 focus:bg-opacity-80 bg-transparent border border-blue-100 text-blue-100 flex justify-center items-center">
              <span>Login</span>
              <img alt="get started" src={images.logArrow} />
            </button>

            <button className="cursor-pointer rounded-lg gap-3 font-bold hover:bg-opacity-80 py-3 px-5 md:px-10 text-white-100 disabled:bg-opacity-50 focus:bg-opacity-80 bg-blue-100 flex justify-center items-center">
              <span>Get Started</span>
            </button>
          </div>

          <div className="lg:hidden flex justify-end w-full">
            <MdMenu size="32px" />
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default LandingPageHeader;
