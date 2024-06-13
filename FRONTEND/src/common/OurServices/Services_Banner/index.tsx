import Link from "next/link";
import React from "react";
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
  const { title, smallDescription, max_width } = props;

  const {
    button: { callButtonName,callButtonLink, resultsButtonName, resultsButtonLink },
  } = props;

  const max_width_string = `max-w-[${max_width}] `;

  return (
    <>
       <div className={`GrowthMarketingServices_Banner xl:mt-[91px] lg:mt-[70px] md:mt-[50px]  min-tb:max-tb:mt-[55px] sm:mt-[30px] mt-[20px] main_padding`}>
                <div className='main_container'>
                    <div className={`${max_width_string} `} >
                        <div className="md:pe-20 ">
                            <h2 className='xl:text-55px lg:text-50px md:text-40px  min-tb:max-tb:text-[30px] sm:text-35px text-[22px] font-semibold font-mono pe-20 xl:mb-[28px] lg:mb-[20px] md:mb-[15px]  min-tb:max-tb:mb-[15px] sm:mb-[10px] mb-[5px]'>{title}</h2>
                            <p className='font-mono lg:text-30px md:text-25px  min-tb:max-tb:text-[18px]  min-tb:max-tb:leading-[23px] text-[12px] mb-5  min-tb:max-tb:mb-[20px] md:leading-[36px]'>{smallDescription}</p>
                            <div className="flex flex-wrap gap-4">
                                <Link href={callButtonLink}><button className="font-mono text-[12px] sm:text-base md:px-21px sm:px-[18px] px-[15px] md:h-10 sm:h-[35px] h-[35px] text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white  border border-color-1 ">{callButtonName}</button></Link>
                                <Link href={resultsButtonLink}> <button className="font-mono text-[12px] sm:text-base md:px-21px sm:px-[18px] px-[15px] md:h-10 sm:h-[35px] h-[35px] bg-white text-color-1 rounded-full  hover:bg-color-1 hover:text-white hover:border-black border border-color-1 ">{resultsButtonName}</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  );
};

export default Services_Banner;
