import classes from "../Services_details.module.css";
import { HappyCustomer } from "../../../../../lib/interface";
import { urlFor } from "../../../../../lib/sanity.client";
import { PortableText } from "next-sanity";

const Services_details_happy_customer = ({ Services_details, Slug }: { Services_details: HappyCustomer[], Slug: string }) => {
  const isGrowthPage = Slug === "growth-marketing-services";

  return <div className="main_padding overflow-x-hidden">
    <div className={`${classes.objective} main_container `}>

      {Services_details.map((item: HappyCustomer, index: number) =>

        index % 2 == 0 ? (
          <div
            key={`${item.heading}_${index}`}
            className={`${classes.content_left} flex items-center  flex-row  bg-white ${classes.objective_inner} ${classes.objective_select} lg:gap-10  `}
          >
            <div className="me-auto md:max-w-[1057px] xl:pe-[100px] lg:pe-[70px] md:pe-[50px]" data-aos="fade-right">
              <h2 className={`${classes.objective_title}  text-color-1 font-semibold font-mono `}>
                <PortableText value={item.serviceheading} />
              </h2>
              <div className={`${classes.objective_description} min-tb:max-tb:max-w-[378px] font-mono  `}>
                <PortableText value={item.content} />

              </div>
            </div>
            <div className="flex  min-tb:max-tb:ms-auto  ms-auto sm:mt-[15px] mt-[25px]" data-aos="fade-left">
              <img
                src={urlFor(item.image).url()}
                alt=""
                className={`${classes.objective_image_right}`}
              />
            </div>
          </div>
        ) : (
          <div className={`${classes.objective} ${classes.objective_select} main_container`} key={index} >
            <div
              className={`${classes.content_right}  flex items-center flex-row  bg-white ${classes.objective_inner} lg:gap-10 `}
            >
              {isGrowthPage ? (
                <div className=" image_class flex   me-auto md:mt-0 sm:mt-[15px] mt-[14px]" data-aos="fade-right">
                  <img
                    src={urlFor(item.image).url()}
                    alt=""
                    className={`${classes.growth_service_image} `}
                  />
                </div>
              ) : (
                <div className=" image_class flex   me-auto md:mt-0 sm:mt-[15px] mt-[25px]" data-aos="fade-right">
                  <img
                    src={urlFor(item.image).url()}
                    alt=""
                    className={`${classes.object_image_left}`}
                  />
                </div>
              )}
              <div className={`ms-auto md:max-w-[1057px]  ${isGrowthPage ? `min-tb:max-tb:max-w-[412px]` : `xl:ps-[80px] lg:ps-[50px] md:ps-[20px] min-tb:max-tb:max-w-[433px]`} text-right`} data-aos="fade-left">
                <h2 className={`${classes.objective_title}  md:max-w-[675px] ms-auto text-color-1 font-semibold font-mono `}>
                  <PortableText value={item.serviceheading} />
                </h2>
                <div className={`${classes.objective_description} font-mono  `}>
                  <PortableText value={item.content} />

                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  </div>
};

export default Services_details_happy_customer;
