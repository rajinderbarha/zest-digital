import Link from "next/link";
import { useEffect } from "react";
import classes from './Services_Banner.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useRouter } from "next/router";

export interface Services_Banner_Props {
  title: string;
  smallDescription: string;
  max_width: string;
  button: {
    callButtonName: string;
    callButtonLink: string;
    resultsButtonName: string;
    resultsButtonLink: string;
  };
}
const Services_Banner: React.FC<Services_Banner_Props> = (props) => {
  const router = useRouter()
  const isPPCPage = router.asPath.includes("ppc-services")
  const isSocialPage = router.asPath.includes("social-media-services")

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  const { title, smallDescription, max_width } = props;

  const {
    button: { callButtonName, callButtonLink, resultsButtonName, resultsButtonLink },
  } = props;

  const max_width_string = `max-w-[${max_width}] `;

  return <div className={`${classes.GrowthMarketingServices_Banner} GrowthMarketingServices_Banner  main_padding`}>
    <div className='main_container'>
      <div className={`${classes.banner_content} ${max_width_string} ${isPPCPage && classes.ppc_page_div} ${isSocialPage && classes.social_page_div}`} data-aos="fade-up">
        <div className={`  `}>
          <h2 className={`${classes.banner_title}  font-semibold font-mono `}>{title}</h2>
          <p className={`${classes.banner_description} font-mono text-color-1`}>{smallDescription}</p>
          <div className="flex flex-wrap gap-[8px] sm:gap-4 sm:flex-row flex-col">
            <Link href={callButtonLink}><button className={`${classes.banner_button} nomalbtn_hover font-mono  text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white  border border-color-1 `}>{callButtonName}</button></Link>
            <Link href={resultsButtonLink}> <button className={`${classes.banner_button} nomalbtn_hover font-mono  bg-white text-color-1 rounded-full  hover:bg-color-1 hover:text-white hover:border-black border border-color-1 `}>{resultsButtonName}</button></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default Services_Banner;
