import Image from "next/image";
import React from "react";
import classes from "./Services_Box.module.css";
import { SingleOurService } from "../../../../lib/interface";
import { urlFor } from "../../../../lib/sanity.client";

const Services_Box = (props: any) => {
  const {
    Services_Box: {
      contentBox: { heading, coloredText, description, belowdesc },
      imageBox,
    },
  } = props;

  return (
    <>
     <div className="main_padding">
                <div className={`${classes.SingleIntro}  main_container xl:mt-[200px] lg:mt-[180px] md:mt-[150px] sm:mt-[80px]  h-100 md:rounded-30px rounded-[20px]`}>

                    <div className={`${classes.single_container}`}>

                        <div className="hidden md:flex justify-evenly">

              {imageBox?.map((item: any, index: any) => (
                <div className="text-center max-w-[513px] w-full " key={index}>
                <div className="2xl:max-w-[250px] xl:max-w-[240px] lg:max-w-[200px] max-w-[150px] mx-auto  ">
                    <Image src={urlFor(item.image).url()} width={250} height={250} alt="" className=' mx-auto'/>
                </div>
                <h2 className="xl:text-45px lg:text-[38px] md:text-30px text-color-7 font-mono font-semibold">{item.imagetitle}</h2>
            </div>
              ))}

              {/* <div className="text-center    max-w-[263px]">
                            <div className="2xl:max-w-[250px] xl:max-w-[240px] lg:max-w-[200px]  max-w-[150px]    mx-auto">
                                <Image src={growth_seo_icon} alt="" />
                            </div>
                            <h2 className='2xl:text-45px xl:text-40px lg:text-35px  text-30px text-color-7 font-mono font-semibold'>{props.image_2_title}</h2>
                        </div>

                        <div className="text-center    max-w-[300px]">
                            <div className="2xl:max-w-[250px] xl:max-w-[240px] lg:max-w-[200px]  max-w-[150px]   mx-auto">
                                <Image src={Social_services_icon} alt="" />
                            </div>
                            <h2 className='2xl:text-45px xl:text-40px lg:text-35px  text-30px text-color-7 font-mono font-semibold'>{props.image_3_title}</h2>
                        </div> */}
            </div>
                        <div className="xl:mt-[321px] lg:mt-[280px] md:mt-[200px] sm:mt-[45px] mt-[25px] mx-auto lg:max-w-[895px] md:max-w-[800px] xl:mb-[80px] lg:mb-[65px] md:mb-[60px] sm:mb-[50px] mb-[45px]">
                            <h2 className='font-mono px-[50px] font-semibold xl:text-45px lg:text-40px md:text-35px text-25px text-white mx-auto text-center '>{heading} <span className='text-color-9'> {coloredText}</span></h2>
                        </div>
                        <div className="max-w-[1428px] font-normal mx-auto mb-[25px] sm:mb-[45px] md:mb-[170px] md:px-12 px-4 lg:text-30px md:text-25px text-[19px] font-mono text-white text-center">
                            <p className='xl:mb-[65px] lg:mb-[50px] md:mb-[40px] sm:mb-[25px] mb-[15px]'>{description}</p>
                            <p>{belowdesc}</p>
                        </div>
                    </div>

                </div>
            </div>
    </>
  );
};

export default Services_Box;
