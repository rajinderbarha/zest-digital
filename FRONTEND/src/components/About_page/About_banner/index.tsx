import  { useEffect } from "react";
import Image from "next/image";
import classes from "../About_banner.module.css";
import { AboutType } from "../../../../lib/interface";
import { urlFor } from "../../../../lib/sanity.client";
import AOS from 'aos'
import 'aos/dist/aos.css';

function About_banner({ data }: { data: AboutType[] }) {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return <div className={`${classes.About_banner} main_padding`} data-aos="fade-up">
    <div className="main_container">
      {data?.map((item, index) => (
        <div
          className="  xl:mt-[143px] lg:mt-[120px] md:mt-[50px] sm:mt-[40px] mt-[30px] mb-[6px] relative"
          key={`${index}_About_banner`}
        >
          <div className={`${classes.Founded_heading} max-tb:max-w-[553px] max-w-[992px]`} >
            <h2 className={`${classes.about_title} font-semibold text-color-1 font-mono bg-light-green-1 w-max `}>
              {item.hero.title}
            </h2>
            <h1 className={`${classes.about_heading} font-mono font-semibold  text-color-1  `}>
              {item.hero.heading}
            </h1>
          </div>
          <div className={`${classes.Founded_img}  md:flex md:absolute top-0 max-w-[245px]  max-tb:max-w-[150px]  right-[25px] h-full`} data-aos="fade" data-aos-delay="200">
            <Image
              className={`${classes.banner_image} rotate`}
              src={urlFor(item.hero.image).url()}
              width={250}
              height={250}
              alt=""

            />
          </div>
        </div>
      ))}
    </div>
  </div>
}

export default About_banner;
