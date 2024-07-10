import classes from "../About_banner.module.css";
import Marquee from "react-fast-marquee";
import { AboutType } from "../../../../lib/interface";
import Link from "next/link";
function Escape({ data }: { data: AboutType[] }) {

  return <div className="Escape_main main_padding xl:mt-[152px] lg:mt-[120px] md:mt-[95px] sm:mt-[70px] mt-[55px] xl:mb-[122px] lg:mb-[100px] md:mb-[80px] sm:mb-[60px] mb-[50px]" data-aos="fade-up">
    {data?.map((Escapedata, index) => (
      <div className="main_container" key={`${index}_Escape`} >

        <Link href={Escapedata.escape.careerPagelink}>
          <div className={`${classes.Escape} main_padding rounded-[20px] lg:rounded-[30px] xl:py-[130px] lg:my-[100px] md:py-[80px] min-tb:max-tb:pt-[70px] min-tb:max-tb:pb-[106px] sm:py-[60px] py-[40px]`}>
            <div className={`${classes.Escape_box}`}>
              <h2 className={`${classes.escape_heading} md:mb-12 mb-[24px] min-tb:max-tb:mb-[40px]  font-mono text-center  font-semibold text-white`} data-aos="fade-up" >
                {Escapedata.escape.heading}
              </h2>
              <p
                className={`${classes.Escape_p} mx-auto  font-mono text-white text-center font-medium md:font-semibold`} data-aos="fade-up"
              >
                {Escapedata.escape.description}
              </p>
              <div className={`${classes.Marquee_border}   border-color-3 md:py-16 sm:py-[40px] py-[30px]  relative `} data-aos="fade-in" data-aos-delay="100">
                <div className={`${classes.custom_shadow}`}></div>
                <Marquee className={` md:gap-16 sm:gap-[50px] gap-[40px]`}>
                  <div className="flex text-white   max-w-auto md:gap-16 sm:gap-[50px] gap-[40px] me-5">
                    {Escapedata.escape.marquee.map((marqueData, path) => (
                      <div
                        key={`${path}_marqueeData`}
                        className={`${classes.maving_box}  text-center`}
                      >
                        <h2 className={`${classes.marque_title}  text-color-7 font-semibold font-mono lg:mb-[30px] md:mb-[25px] mb-[20px]`}>
                          {marqueData.title}
                        </h2>
                        <p className={`${classes.marque_desc}  font-normal font-mono`}>
                          {marqueData.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </Link>

      </div>
    ))}
  </div>
}

export default Escape;
