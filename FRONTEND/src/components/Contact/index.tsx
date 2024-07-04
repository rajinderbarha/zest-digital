import Image from "next/image";
import { useEffect } from "react";
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
import { useRouter } from "next/navigation";
import AOS from 'aos'
import 'aos/dist/aos.css';

function Contact({ data }: { data: ContactType }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const router = useRouter()

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: any = new FormData(e.currentTarget);
    const formObject: { [key: string]: any } = {};

    for (const [key, value] of formData.entries()) {
      formObject[key] = value;
    }
    router.push(`/thanks_you`);
  };


  return <div className={`${classes.contact_container} Contact  main_padding`}>
    <div className="main_container ">
      <div className="grid md:grid-cols-12 ">
        <div
          className={`${classes.text_div} md:col-span-5 min-tb:max-tb:col-span-6  relative h-max lg:me-10`}
        >
          <div className=" max-w-[636px] " data-aos="fade-up">
            <h2 className={`${classes.contact_heading} font-mono font-semibold `}>
              {data?.description}
            </h2>

            <div className="icons flex md:mt-10 sm:mt-[30px] mt-[15px] gap-[18px]">
              <div className="group">
                <Link href={data.social[0]?.socialLink}>
                  <Image
                    src={facebook_black}
                    width={50}
                    height={50}
                    alt=""
                    className={`${classes.socal_image}  group-hover:hidden`}
                  />
                  <Image
                    src={facebook_white}
                    width={50}
                    height={50}
                    alt=""
                    className={`${classes.socal_image} hidden group-hover:block`}
                  />
                </Link>
              </div>
              <div className="group">
                <Link href={data.social[1]?.socialLink}>
                  <Image
                    src={linkedin_black}
                    width={50}
                    height={50}
                    alt=""
                    className={`${classes.socal_image}  group-hover:hidden`}
                  />
                  <Image
                    src={linkedin_white}
                    width={50}
                    height={50}
                    alt=""
                    className={`${classes.socal_image} hidden group-hover:block`}
                  />
                </Link>
              </div>
              <div className="group">
                <Link href={data.social[2]?.socialLink}>
                  <Image
                    src={instagram_black}
                    width={50}
                    height={50}
                    alt=""
                    className={`${classes.socal_image}   group-hover:hidden`}
                  />
                  <Image
                    src={instagram_white}
                    width={50}
                    height={50}
                    alt=""
                    className={`${classes.socal_image}  hidden group-hover:block`}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="ms-auto  hand_img sm:absolute right-0 lg:-bottom-[60%] md:-bottom-[50%] -bottom-[20%] md:max-w-max " data-aos="fade-up">
            <Image
              src={urlFor(data?.image).url()}
              width={270}
              height={214}
              alt=""
              className="min-tb:max-tb:max-w-[158px] md:me-[48px] lg:me-0 xl:max-w-[270px] lg:max-w-[210px] md:max-w-[175px] max-w-[150px] ms-auto"
            />
          </div>
        </div>
        <div className={`${classes.form_div} md:col-span-7 min-tb:max-tb:col-span-6`}>
          <div className="max-w-[956px] min-tb:max-tb:px-[30px] ms-auto bg-color-1 rounded-[15px] md:rounded-[20px] lg:rounded-30px px-5 sm:px-10 " data-aos="fade-up">
            <form onSubmit={handleFormSubmit} className="max-w-[670px] mx-auto min-tb:max-tb:gap-[26px] sm:py-[88px] min-tb:max-tb:py-[40px] pt-[38px] pb-[41px] grid gap-6 sm:gap-9">
              <div className="enquiry">
                <label
                  htmlFor="enquiry"
                  className={`${classes.input_labels} text-color-9 font-semibold font-mono w-full `}
                >
                  What is the nature of your enquiry?*
                </label>
                <select
                  id="enquiry"
                  name="enquiry"
                  className={`${classes.form_input_field} w-full font-lato border border-color-9  text-color-1 `}
                  required
                >
                  <option>Grow my business</option>
                  <option>Career opportunities</option>
                  <option>Media enquiries</option>
                  <option>Other</option>
                </select>
              </div>
              <div className={`${classes.names_div} flex justify-between`}>
                <div className="first_name flex flex-col w-full max-w-[300px]">
                  <label
                    htmlFor="fname"
                    className={`${classes.input_labels} text-color-9  font-semibold font-mono`}
                  >
                    First name*
                  </label>
                  <input
                    type="text"
                    name="fname"
                    id=""
                    className={`${classes.form_input_field} w-full border font-lato  border-color-9  text-color-1 `}
                    placeholder="John"
                    required
                  />
                </div>
                <div className="last_name flex flex-col w-full max-w-[300px]">
                  <label
                    htmlFor="lname"
                    className={`${classes.input_labels} text-color-9  font-semibold font-mono`}
                  >
                    Last name*
                  </label>
                  <input
                    type="text"
                    name="lname"
                    id=""
                    className={`${classes.form_input_field} w-full border font-lato  border-color-9  text-color-1 `}
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="email flex flex-col w-full ">
                <label
                  htmlFor="email"
                  className={`${classes.input_labels} text-color-9  font-semibold font-mono`}
                >
                  E-mail*
                </label>
                <input
                  type="email"
                  name="email"
                  id=""
                  className={`${classes.form_input_field} w-full border font-lato  border-color-9  text-color-1 `}
                  placeholder="johndoe@gmail.com"
                  required
                />
              </div>
              <div className="message flex flex-col w-full ">
                <label
                  htmlFor="message"
                  className={`${classes.input_labels} text-color-9  font-semibold font-mono`}
                >
                  Message*
                </label>
                <textarea
                  name="message"
                  id=""
                  cols={30}
                  rows={10}
                  className={`${classes.form_input_field} w-full border font-lato  border-color-9  text-color-1 h-[172px]`}
                  placeholder="Type your message here"
                  required
                ></textarea>
              </div>
              <div className="note sm:mt-[-26px] -mt-[18px]">
                <p className="text-color-9 min-tb:max-tb:text-[12px] text-[12px] sm:text-md font-mono">
                  * required fields
                </p>
              </div>
              <input
                type="submit"
                value="Send"
                className={`${classes.submit_btn}  bg-white border  border-white hover:text-white hover:bg-color-1  font-mono text-color-1 rounded-full mx-auto hover:cursor-pointer`}
              />
            </form>
          </div>
        </div>
      </div>
      <div className={`${classes.map_div} ${classes.map_container} min-tb:max-tb:grid-cols-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  `}>
        <MapLocations data={data.card} />
      </div>
    </div>
  </div>
}

export default Contact;
