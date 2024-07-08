import  { useState } from "react";
import Image from "next/image";
import { urlFor } from "../../../lib/sanity.client";
import Link from "next/link";
import { HeaderType } from "../../../lib/interface";

import classes from "./Header.module.css";
import barsIcon from "../../assets/images/barsIcon.svg";
import { useRouter } from 'next/router';
import Sub_Logo from '../../assets/images/ManuLogo.svg'
import closeIcon from '../../assets/images/closeIcon.svg'

const Header = ({ data }: { data: HeaderType[] }) => {
  const router = useRouter();
  const [iconSrc, setIconSrc] = useState(barsIcon);

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
    setIconSrc(barsIcon);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
      setIconSrc(closeIcon);
    } else {
      document.body.style.overflow = "";
      setIconSrc(barsIcon);
    }
  };

  return <div className="Body_padding">
    {data?.map((item, index) => {
      return (
        <div className="main_padding  md:p-0" key={index}>
          {/*------------------- Desktop View----------------- */}
          <div
            key={`header_${item.logo._id}`}
            className="screen-1-max:hidden  flex justify-between items-center pt-25px pb-21px main_container relative"
          >
            <div className={`${classes.desktop_nav} flex items-center gap-[68px] `} >
              <div className="screen-1-max:w-24 lg:w-28 xl:w-auto ">
                <Link href={"/"}>
                  <Image
                    src={urlFor(item.logo).url()}
                    alt="Site Logo"
                    width={149}
                    height={69}
                    className=" h-[69px]" priority
                  />
                </Link>
              </div>
              <div
                id="nav-menus"
                className={`flex gap-[40px] text-base font-mono border-black ${classes.navMenuClass}`} data-aos="fade-right"
              >

                {item.navItem.map((navItem, index) => (
                  <Link
                    href={navItem.buttonLink}
                    key={`navItem_${index}`}
                    className={`
                          ${router.pathname === navItem.buttonLink ? 'font-bold' : ''} 
                          ${classes.navlinkclass} hover:underline ${classes.nav_links_hover}`}>
                    {navItem.buttonName}
                  </Link>
                ))}
              </div>
            </div>
            <div className="" data-aos="fade-left">
              <Link
                href={item.button.navLink}
                className={`${classes.call_btn} screen-1-max:hidden font-mono text-base px-21px py-[5px] bg-color-1 text-white rounded-full  active:bg-white active:text-color-1 border border-color-1`}
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
                  onClick={closeMenu} priority
                />
              </Link>
            </div>
            <div className="flex items-center gap-[15px]">
              <Link onClick={closeMenu}
                href={item.button.navLink}
                className={`${classes.call_btn} font-mono text-[12px] px-21px py-[7px] bg-color-1 text-white rounded-full  active:bg-white active:text-color-1  border border-color-1`}
              >
                {item.button.navName}
              </Link>
              <div className={classes.menuIcon} onClick={toggleMenu}>
                <Image src={iconSrc} alt="Logo" />
              </div>
            </div>
            <div
              className={`${classes.menu} px-[16px] ${isMenuOpen ? classes.menuOpen : classes.menuOpen
                }`}
              style={{ height: isMenuOpen ? "100vh" : 0 }}
            >
              <div className={`${classes.BG_manu}`}>
                {item.navItem.map((navItem, index) => (
                  <Link
                    onClick={toggleMenu}
                    href={navItem.buttonLink}
                    key={`navItem_${index}`}
                    className={`${classes.custom_menu_items_class} text-white font-mono text-[26px] md:text-[22px]`}
                  ><span>{navItem.buttonName}</span>

                  </Link>
                ))}

                <div className="">
                  <Image src={Sub_Logo} className="md:w-[200px] sm:w-[150px] w-[130px] md:ml-[42px] sm:ml-[15px] ml-[0px] mt-[150px]" alt="Logo_img" />
                </div>
              </div>
            </div>
          </nav>
          {/*------------------- Mobile View----------------- */}
        </div>
      );
    })}
  </div>
};

export default Header;
