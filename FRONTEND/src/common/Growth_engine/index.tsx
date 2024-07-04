import classes from "./growthEngine.module.css";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { urlFor } from "../../../lib/sanity.client";
import { GrowthEngineProps } from "../../../lib/interface";
const Growth_engine = ({
  props,
  shadow_right,
  has_image,
  selectedFile,
}: GrowthEngineProps) => {
  const { title, description, buttonName, buttonLink, image, allFilesUrl } = props;

  const handlefileUrl = (fileUrl: any) => {
    if (selectedFile) {
      selectedFile(fileUrl);
    }
  };

  return (
    <>
      {has_image ? (
        <div
          data-aos="fade-up"
          className={`${classes.growth_engine} ${shadow_right ? `shadow-dark-pink-left ` : `shadow-dark-pink-left` } grid sm:grid-cols-5  mx-auto  lg:rounded-30px md:rounded-[20px] rounded-[15px]  text-color-1 relative`}
        >
          <div className="col-span-3 min-tb:max-tb:col-span-9">
            <h2
              className={`${classes.growth_engine_title} text-40px font-semibold `}
            >
              {title}
            </h2>
            <p className={`${classes.growth_engine_desc} mt-5 md:mb-[37px] mb-[20px]`}>
              {description}
            </p>
            <Link href={buttonLink} className="inline-block">
              <button
                className="bg-color-1 group hover:bg-white max-sm:leading-normal hover:text-color-1 border border-color-1 rounded-full text-white text-base  md:py-[5px] md:ps-4 py-[3px] ps-[13px] pe-[4px] md:pe-0 w-fit flex gap-2 items-center"
                
                onClick={() => handlefileUrl(allFilesUrl)}
              >
                {buttonName}{" "}
                <span className="md:p-1 p-[2px] bg-white rounded-full text-black me-0 md:me-[6px] text-[17px] lg:text-[18px] group-hover:bg-color-1 group-hover:text-white">
                  <GoArrowRight />
                </span>
              </button>
            </Link>
          </div>
          <div
            className={`${classes.grow_image} absolute -bottom-40 -right-[23px] sm:block hidden`}
          >
            {image && (
              <Image
                src={urlFor(image).url()}
                alt="growth img"
                width={524}
                height={524}
              />
            )}
          </div>
        </div>
      ) : (
        <div
          data-aos="fade-up"
          className={`${classes.growth_engine} ${shadow_right ? ` shadow-dark-pink-left ` : `shadow-blue-right` }   mx-auto  lg:rounded-30px md:rounded-[20px] rounded-[15px]   text-color-1`}
        >
          <h2 className={`${classes.growth_engine_title} text-40px font-semibold`}>
            {title}
          </h2>
          <p className={`${classes.growth_engine_desc} md:text-3xl mt-5 md:mb-[37px] mb-[20px] xl:mt-[29px] lg:mt-[26px] md:mt-[25px]`}>
            {description}
          </p>
          <Link href={buttonLink} className="inline-block">
            <button
              onClick={() => handlefileUrl(allFilesUrl)}
              className={` bg-color-1 group hover:bg-white  max-sm:leading-normal hover:text-color-1 border border-color-1 rounded-full text-white text-[16px] md:py-[5px] md:ps-4  py-[4px] ps-[13px] pe-[4px] md:pe-0 w-fit flex gap-2 items-center`}
              type="button"
            >
              {buttonName}{" "}
              <span className="md:p-1 p-[2px] bg-white rounded-full text-black me-0 md:me-[6px] text-[17px] lg:text-[18px] group-hover:bg-color-1 group-hover:text-white">
                <GoArrowRight />
              </span>
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Growth_engine;
