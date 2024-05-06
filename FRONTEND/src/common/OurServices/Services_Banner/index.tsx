import React from "react";
export interface Services_Banner_Props {
  title: string;
  smallDescription: string;
  max_width: string;
  button: {
    callButtonName: string;
    resultsButtonName: string;
  };
}
const Services_Banner: React.FC<Services_Banner_Props> = (props) => {
  const { title, smallDescription, max_width } = props;

  const {
    button: { callButtonName, resultsButtonName },
  } = props;

  const max_width_string = `max-w-[${max_width}] `;

  return (
    <>
       <div className={`GrowthMarketingServices_Banner xl:mt-[91px] lg:mt-[70px] md:mt-[50px] sm:mt-[30px] mt-[20px] main_padding`}>
                <div className='main_container'>
                    <div className={`${max_width_string} `} >
                        <div className="md:pe-20 ">
                            <h2 className='xl:text-55px lg:text-50px md:text-40px sm:text-35px text-30px font-semibold font-mono pe-20 xl:mb-[28px] lg:mb-[20px] md:mb-[15px] sm:mb-[10px] mb-[5px]'>{title}</h2>
                            <p className='font-mono lg:text-30px md:text-25px text-[19px] mb-5 md:leading-9'>{smallDescription}</p>
                            <div className="flex flex-wrap gap-4">

                                <button className="font-mono text-[15px] sm:text-base md:px-21px sm:px-[18px] px-[15px] md:h-10 sm:h-[35px] h-[30px] text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white  border border-color-1 ">{callButtonName}</button>
                                <button className="font-mono text-[15px] sm:text-base md:px-21px sm:px-[18px] px-[15px] md:h-10 sm:h-[35px] h-[30px] bg-white text-color-1 rounded-full  hover:bg-color-1 hover:text-white hover:border-black border border-color-1 ">{resultsButtonName}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  );
};

export default Services_Banner;
