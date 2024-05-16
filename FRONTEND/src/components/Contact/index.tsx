import Image from "next/image";
import React from "react";
import classes from "./Contact.module.css";
import MapLocations from "./MapLocations";
import { ContactType } from "../../../lib/interface";
import Link from "next/link";
import { urlFor } from "../../../lib/sanity.client";
import facebook_black from '../../assets/images/facebook_black.svg'
import linkedin_black from '../../assets/images/linkedin_black.svg'
import instagram_black from '../../assets/images/instagram_black.svg'
import facebook_white from '../../assets/images/facebook_white.svg'
import linkedin_white from '../../assets/images/linkedin_white.svg'
import instagram_white from '../../assets/images/instagram_white.svg'

function Contact({ data }: { data: ContactType }) {
  return (
    <>
      <div className="Contact xl:mt-[140px] lg:mt-[120px] md:mt-[70px] sm:mt-[50px] mt-[30px] sm:px-[20px] xl:mb-[268px] lg:mb-[200px] md:mb-[140px] sm:mb-[90px] mb-[80px] main_padding">
        <div className="main_container ">
          <div className="grid lg:grid-cols-12 ">
            <div
              className={`${classes.text_div} lg:col-span-5   relative h-max lg:me-10`}
            >
              <div className=" max-w-[636px] ">
                <h2 className="font-mono font-semibold md:text-35px text-25px pe-10">
                  {data?.description}
                </h2>

                <div className="icons flex md:mt-10 sm:mt-[30px] mt-[15px] gap-[18px]">
                  {/* {data?.social.map((socialmap, index) => (
                    <Link
                      href={socialmap.socialLink}
                      key={`${index}_socialmap`}
                    >
                      <Image
                        src={urlFor(socialmap.socialImage).url()}
                        height={45}
                        width={45}
                        alt=""
                        className="md:w-[45px] sm:w-[38px] w-[35px]"
                      />
                    </Link>
                  ))} */}
                  <div className="group">
                    <Link href="https://www.facebook.com/ZestDigital/">
                      <Image
                        src={facebook_black}
                        width={50}
                        height={50}
                        alt=""
                        className="md:w-[45px] sm:w-[38px] w-[35px] group-hover:hidden"
                      />
                      <Image
                        src={facebook_white}
                        width={50}
                        height={50}
                        alt=""
                        className="md:w-[45px] sm:w-[38px] w-[35px] hidden group-hover:block"
                      />
                    </Link>
                  </div>
                  <div className="group">
                    <Link href="https://www.linkedin.com/company/zest-digital/">
                      <Image
                        src={linkedin_black}
                        width={50}
                        height={50}
                        alt=""
                        className=" md:w-[45px] sm:w-[38px] w-[35px]  group-hover:hidden"
                      />
                      <Image
                        src={linkedin_white}
                        width={50}
                        height={50}
                        alt=""
                        className=" md:w-[45px] sm:w-[38px] w-[35px] hidden group-hover:block"
                      />
                    </Link>
                  </div>
                  <div className="group">
                    <Link href="https://www.instagram.com/zestdigital/">
                      <Image
                        src={instagram_black}
                        width={50}
                        height={50}
                        alt=""
                        className=" md:w-[45px] sm:w-[38px] w-[35px]  group-hover:hidden"
                      />
                      <Image
                        src={instagram_white}
                        width={50}
                        height={50}
                        alt=""
                        className=" md:w-[45px] sm:w-[38px] w-[35px] hidden group-hover:block"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="sm:block hidden hand_img absolute right-0 md:-bottom-[60%] -bottom-[20%] md:max-w-max max-w-[150px]">
                <Image
                  src={urlFor(data?.image).url()}
                  width={270}
                  height={214}
                  alt=""
                  className=""
                />
              </div>
            </div>
            <div className="lg:col-span-7 lg:mt-0 md:mt-[230px] sm:mt-[150px] mt-[80px]">
              <div className="max-w-[956px] ms-auto bg-color-1 rounded-[15px] sm:rounded-[20px] md:rounded-30px px-5 sm:px-10 ">
                <form className="max-w-[670px] mx-auto sm:py-[88px] py-[50px] grid gap-6 sm:gap-9">
                  <div className="enquiry">
                    <label
                      htmlFor="enquiry"
                      className="text-color-9 sm:text-base text-[15px] font-semibold font-mono w-full "
                    >
                      What is the nature of your enquiry?*
                    </label>
                    <select
                      id="enquiry"
                      name="enquiry"
                      className=" w-full font-lato border border-color-9 rounded-[5px] md:rounded-[10px] md:px-[26px] sm:px-[15px] px-[10px]  md:py-[11px] sm:py-[9px] py-[6px] md:text-[18px] text-[16px] text-color-1 md:mt-[11px] sm:mt-[9px] mt-[5px]"
                      required
                    >
                      <option>Grow my business</option>
                      <option>Career opportunities</option>
                      <option>Media enquiries</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className={`${classes.names_div} flex justify-between`}>
                    <div className="first_name flex flex-col w-full max-w-[300px]">
                      <label
                        htmlFor="fname"
                        className="text-color-9 sm:text-base text-[15px] font-semibold font-mono md:mb-[11px] sm:mb-[9px] mb-[5px]"
                      >
                        First name*
                      </label>
                      <input
                        type="text"
                        name="fname"
                        id=""
                        className="w-full border font-lato border-color-9 rounded-[5px] md:rounded-[10px] md:px-[26px] sm:px-[15px] px-[10px]  md:py-[11px] sm:py-[9px] py-[6px] md:text-[18px] text-[16px] "
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="last_name flex flex-col w-full max-w-[300px]">
                      <label
                        htmlFor="lname"
                        className="text-color-9 sm:text-base text-[15px] font-semibold font-mono md:mb-[11px] sm:mb-[9px] mb-[5px]"
                      >
                        Last name*
                      </label>
                      <input
                        type="text"
                        name="lname"
                        id=""
                        className="w-full border font-lato border-color-9 rounded-[5px] md:rounded-[10px] md:px-[26px] sm:px-[15px] px-[10px]  md:py-[11px] sm:py-[9px] py-[6px] md:text-[18px] text-[16px]"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="email flex flex-col w-full ">
                    <label
                      htmlFor="email"
                      className="text-color-9 sm:text-base text-[15px] font-semibold font-mono md:mb-[11px] sm:mb-[9px] mb-[5px]"
                    >
                      E-mail*
                    </label>
                    <input
                      type="email"
                      name="email"
                      id=""
                      className="w-full border font-lato border-color-9 rounded-[5px] md:rounded-[10px] md:px-[26px] sm:px-[15px] px-[10px]  md:py-[11px] sm:py-[9px] py-[6px] md:text-[18px] text-[16px]"
                      placeholder="johndoe@gmail.com"
                      required
                    />
                  </div>
                  <div className="message flex flex-col w-full ">
                    <label
                      htmlFor="message"
                      className="text-color-9 sm:text-base text-[15px] font-semibold font-mono md:mb-[11px] sm:mb-[9px] mb-[5px]"
                    >
                      Message*
                    </label>
                    <textarea
                      name="message"
                      id=""
                      cols={30}
                      rows={10}
                      className="w-full border font-lato border-color-9 rounded-[5px] md:rounded-[10px] md:px-[26px] sm:px-[15px] px-[10px] md:py-[11px] sm:py-[9px] py-[6px]  text-lg h-[172px]"
                      placeholder="Type your message here"
                      required
                    ></textarea>
                  </div>
                  <div className="note sm:mt-[-26px] -mt-[18px]">
                    <p className="text-color-9 text-md font-mono">
                      * required fields
                    </p>
                  </div>
                  <input
                    type="submit"
                    value="Send"
                    className="bg-white border border-white hover:text-white hover:bg-color-1  text-[15px] sm:text-base font-mono text-color-1 rounded-full lg:px-[26px] md:px-[20px]  px-[17px] md:py-[8px] sm:py-[5px] py-[3px] mx-auto"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className={`${classes.map_div} xl:mt-[200px] lg:mt-[180px] md:mt-[150px] sm:mt-[120px] mt-[100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-[105px]  `}>
            {/* <div className="lg:col-span-4"> */}

            <MapLocations data={data.card} />
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

