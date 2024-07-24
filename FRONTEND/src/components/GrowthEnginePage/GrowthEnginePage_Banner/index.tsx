import { useEffect } from "react";
import classes from "./GrowthEnginePage_Banner.module.css";
import Link from "next/link";
import AOS from 'aos'
import 'aos/dist/aos.css';

const GrowthEnginePage_Banner = ({ data }: any) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return <div className={`${classes.GrowthEnginePage_Banner} main_padding  `} data-aos="fade-up">
    <div className="main_container">
      <div className={`${classes.banner_container} grid  `}>
        <div className="">
          <h2 className={`${classes.banner_heading} font-semibold font-mono bg-light-green-1 w-max `}>
            {data.heading}
          </h2>
          <h1 className={`${classes.banner_description} font-mono font-semibold `}>
            {data.description}
          </h1>
          <Link
            href={data.buttonLink}><button
              className="nomalbtn_hover font-mono sm:text-[16px] min-tb:max-tb:text-[16px]  text-[12px]  px-21px py-[10px] text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white border border-color-1 "
            >
              {data.buttonName}
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>

};

export default GrowthEnginePage_Banner;
