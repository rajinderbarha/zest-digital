import { useEffect } from "react";
import Image from "next/image";
import classes from "./CaseStudyIntro.module.css";
import Link from "next/link";
import { urlFor } from "../../../../lib/sanity.client";
import { CaseStudyIntroType } from "../../../../lib/interface";
import AOS from 'aos'
import 'aos/dist/aos.css';

function Casestudyintro({ data }: { data: CaseStudyIntroType }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return <div className={`${classes.Casestudyintro} main_padding `}  >
    <div className=" md:px-[20px] sm:px-[15px] px-[8px] max-tb:px-0 max-w-[1520px] mx-auto w-full relative" data-aos="fade-up" >
      <div className="">
        <div className={`${classes.banner_text}`}>
          <h1 className={`${classes.heading} font-mono font-semibold text-color-1   min-tb:max-tb:text-[30px] `}>
            {data.heading}
          </h1>
          <Link href={data.buttonLink}>
            {" "}
            <button className={`${classes.btn} nomalbtn_hover font-mono min-tb:max-tb:text-[16px] text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white border border-color-1 `}>
              {data.buttonName}
            </button>
          </Link>
        </div>
        <div className={` ${classes.image_div} md:absolute top-0 right-[20px] md:flex md:items-start `} data-aos="fade" data-aos-delay="200">
          <Image
            className={`${classes.banner_image} rotate md:ms-auto max-w-[245px] max-h-[245px]  min-tb:max-tb:max-w-[150px] min-tb:max-tb:max-h-[150px] w-full h-full`}
            src={urlFor(data.image).url()}
            alt="hero img"
            width={245}
            height={245}
          />
        </div>
      </div>
    </div>
  </div>
}

export default Casestudyintro;
