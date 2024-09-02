import classes from "./Services_Address.module.css";
import { GoArrowRight } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { AgencyAddress } from "../../../../lib/interface";
import { PortableText } from "next-sanity";
import Link from "next/link";
import GoogleMapComponent from "@/components/GoogleMapComponent";
import { useRouter } from "next/router";

const Services_Address: React.FC<AgencyAddress> = (props) => {
  const router = useRouter()
  const isGrowthPage = router.asPath.includes("growth-marketing-services")
  const isBirminghamPage = router.asPath.includes("birmingham")

  const { heading_add, slotDescription_add, buttonName_add, buttonName_link } = props;
  const contactInfoArray = Array.isArray(props.address) ? props.address : [];

  return <div className={`${classes.GrowthMarketingServices_Address} GrowthMarketingServices_Address main_padding `} >
    <div className="main_container">
      <div
        className={`${classes.bg_image} bg-color-1 rounded-[15px] md:rounded-[20px] lg:rounded-30px grid md:grid-cols-2 max-tb:grid-cols-1 md:gap-y-0 max-tb:gap-y-[60px] max-tb:gap-x-0 md:gap-x-10`}
        data-aos="fade-up" >
        <div className="col-span-1 md:max-w-[772px] min-tb:max-tb:max-w-[420px] sm:max-w-[300px] max-w-[264px]  mx-auto">
          <h2 className={`${classes.address_heading} font-mono font-semibold text-color-9 text-center ${!isGrowthPage && !isBirminghamPage && 'xl:max-w-[659px]'} ${isBirminghamPage && 'xl:max-w-[665px]'} }`} data-aos="fade-up">
            {heading_add}
          </h2>
          <h2 className={`${classes.address_desc} font-mono  font-semibold text-white text-center   max-w-[566px] mx-auto`} data-aos="fade-up">
            {slotDescription_add}
          </h2>
          <div className={`${classes.book_btn} bokk_now_btn`} data-aos="fade-up">
            <Link href={buttonName_link}>
              <button className={`arrowbtn_hover font-mono font-normal mx-auto text-color-1 rounded-full bg-white  flex md:gap-2 sm:gap-[6px] gap-[4px] items-center group border border-white hover:bg-color-1 hover:text-white`}>
                {buttonName_add}
                <span className=" text-white rounded-full bg-color-1 group-hover:bg-white group-hover:text-color-1">
                  <GoArrowRight />
                </span>
              </button>
            </Link>
          </div>

          <div>
            <div className="address xl:mt-[110px] lg:mt-[90px] md:mt-[60px] min-tb:max-tb:mt-[72px] mt-[50px] lg:mb-[40px] md:mb-[30px] min-tb:max-tb:mb-[0px] sm:mb-[25px] mb-[20px]  text-center">
              <div className={`${classes.address} text-white`} data-aos="fade-up">
                {contactInfoArray.map((contactInfo: any, innerIndex: any) => (
                  <PortableText value={contactInfo} key={innerIndex} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          {props.cardLoc?.map(
            ({ location: { latitude, longitude }, contactno }, index) => {
              const location = {
                latitude: latitude,
                longitude: longitude
              }
              return <div className="max-w-[738px] min-tb:max-tb:max-w-[480px] max-tb:mx-auto w-full" key={index}>
                <div className={`${classes.map_div} `} data-aos="fade-up">
                  <GoogleMapComponent loc={location} mark={[location]} zoom={15} />
                </div>
                <div className={`${classes.teleNo} flex items-center justify-end text-color-9 mt-[10px] md:mt-[25px] min-tb:max-tb:mt-[23px] gap-[2px] `}>
                  <FaPhoneAlt className="text-white" />
                  <a href={`tel:${contactno}`}>{contactno}</a>
                </div>
              </div>
            }
          )}
        </div>
      </div>
    </div>
  </div>
};

export default Services_Address;
