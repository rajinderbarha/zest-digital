import Image from "next/image";
import classes from "./Services_Box.module.css";
import { urlFor } from "../../../../lib/sanity.client";

const Services_Box = (props: any) => {
  const {
    Services_Box: {
      contentBox: { heading, coloredText, description, belowdesc },
      imageBox,

    }, Slug:string
  } = props;

  const isMarketingPage = props.Slug === "growth-marketing-services";

  return <div className="main_padding">
    <div className={`${classes.SingleIntro} bg-color-1 main_container  h-100 lg:rounded-30px md:rounded-[20px] rounded-[15px]`} data-aos="fade-up">

      <div className={`${classes.single_container}`}>

        <div className={`${classes.top_images_div} md:flex justify-evenly`}>

          {imageBox?.map((item: any, index: any) => (
            <div className="text-center mx-auto md:mb-0 mb-[47px] md:max-w-[513px]  md:w-full " key={index} data-aos="fade-up">
              <div className={`${classes.top_image}  h-full w-full  mx-auto`}>
                <Image src={urlFor(item.image).url()} width={250} height={250} alt="" className='h-full w-full' />
              </div>
              <h2 className={`${classes.image_title}  text-color-7 font-mono font-semibold`}>{item.imagetitle}</h2>
            </div>
          ))}
        </div>
        <div className={`${classes.text_div} mx-auto ${isMarketingPage ? `xl:max-w-[1208px] lg:max-w-[1096px]`: `xl:max-w-[1116px] lg:max-w-[1002px]` }   md:max-w-[906px] `} data-aos="fade-up">
          <h2 className={`${classes.box_heading} font-mono font-semibold  min-tb:max-tb:leading-[34px] text-white mx-auto text-center `}>{heading} <span className='text-color-9'> {coloredText}</span></h2>
        </div>
        <div className={`${classes.below_text_div} max-w-[1546px] font-normal mx-auto min-tb:max-tb:leading-[20px] font-mono text-white text-center`} data-aos="fade-up">
          <p className={`${classes.below_text}  `}>{description}</p>
          <p>{belowdesc}</p>
        </div>
      </div>

    </div>
  </div>
};

export default Services_Box;
