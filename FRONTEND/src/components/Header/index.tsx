import React, { useState } from "react";
import Image from "next/image";
import bars from "../../assets/images/bars-svgrepo-com.svg";
import { urlFor } from "../../../lib/sanity.client";
import Link from "next/link";
import { HeaderType } from "../../../lib/interface";
// import PropTypes from "prop-types";
import classes from "./Header.module.css";
import barsIcon from "../../assets/images/bars-svgrepo-com.svg";
import logo from "../../assets/images/zest-logo_vector.png";

const Header = ({ data }: { data: HeaderType[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent or allow scroll based on the menu state
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const navMenu = {
    menu: {
      simple: "flex gap-[40px] text-base font-mono border-black",
      responsive1:
        "screen-1-max:hidden screen-1-max:flex-col screen-1-max:gap-0 screen-1-max:text-lg screen-1-max:absolute screen-1-max:top-90px screen-1-max:-right-1/3 screen-1-max:w-1/3 screen-1-max:z-10",
      responsive2:
        "sm-max:w-auto screen-1-max:bg-color-1 screen-1-max:text-white screen-1-max:ps-5 screen-1-max:rounded-l-lg screen-1-max:h-[89vh]",
    },
    linkclass:
      "screen-1-max:border-b screen-1-max:border-color-2 screen-1-max:ps-2 screen-1-max:pe-20 screen-1-max:py-3 text-color-1",
    btn: "screen-1-max:block mt-20 hidden mx-auto font-mono text-base px-21px h-10 bg-white text-color-1 rounded-full hover:bg-color-1 hover:text-white hover:border-white border border-color-1 sm-max:mx-2",
  };

  return (
    <>
      {data?.map((item, index) => {
        return (
          <div className="main_padding p-0" key={index}>
            {/*------------------- Desktop View----------------- */}
            <div
              key={`header_${item.logo._id}`}
              className="screen-1-max:hidden  flex justify-between items-center pt-25px pb-21px main_container relative"
            >
              <div className="flex items-center gap-68px ">
                <div className="screen-1-max:w-24 lg:w-28 xl:w-auto">
                  <Link href={"/"}>
                    <Image
                      src={urlFor(item.logo).url()}
                      alt="Site Logo"
                      width={112}
                      height={51}
                    />
                  </Link>
                </div>
                <div
                  id="nav-menus"
                  className={`${navMenu.menu.simple} + ${navMenu.menu.responsive1} + ${navMenu.menu.responsive2}`}
                >
                  {item.navItem.map((navItem, index) => (
                    <Link
                      href={navItem.buttonLink}
                      key={`navItem_${index}`}
                      className={`${navMenu.linkclass} hover:underline ${classes.nav_links_hover}`}
                    >
                      {navItem.buttonName}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="">
                <Link
                  href={item.button.navLink}
                  className="screen-1-max:hidden font-mono text-base px-21px py-[5px] bg-color-1 text-white rounded-full  hover:bg-white hover:text-color-1 border border-color-1"
                >
                  {item.button.navName}
                </Link>
              </div>
            </div>
            {/*------------------- Desktop View----------------- */}

            {/*------------------- Mobile View----------------- */}
            <nav
              className={`${classes.navbar} flex pt-[10px] pb-[10px] md:pt-25px md:pb-21px screen-1-min:hidden  justify-between items-center main_container relative`}
            >
              <div
                className={`${classes.logo} screen-1-max:w-24 lg:w-28 xl:w-auto `}
              >
                <Link href={"/"}>
                  <Image
                    src={urlFor(item.logo).url()}
                    alt="Site Logo"
                    width={112}
                    height={51}
                  />
                </Link>
              </div>
              <div className={classes.menuIcon} onClick={toggleMenu}>
                <Image src={barsIcon} alt="Logo" />
              </div>
              <div
                className={`${classes.menu} px-[16px] ${
                  isMenuOpen ? classes.menuOpen : classes.menuOpen
                }`}
                style={{ height: isMenuOpen ? "100vh" : 0 }}
              >
                {item.navItem.map((navItem, index) => (
                  <Link
                    onClick={toggleMenu}
                    href={navItem.buttonLink}
                    key={`navItem_${index}`}
                    className={`${classes.custom_menu_items_class}`}
                  >
                    {navItem.buttonName}
                  </Link>
                ))}

                <div className="">
                  <Link
                    href={item.button.navLink}
                    className="screen-1-max:hidden w-max font-mono text-base px-21px py-[5px] bg-color-1 text-white rounded-full  hover:bg-white hover:text-color-1 border border-color-1"
                  >
                    {item.button.navName}
                  </Link>
                </div>
              </div>
            </nav>
            {/*------------------- Mobile View----------------- */}
          </div>
        );
      })}
    </>
  );
};

export default Header;
