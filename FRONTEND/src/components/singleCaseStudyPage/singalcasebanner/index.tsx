import React, { useEffect } from 'react'
import classes from './Singalcasebanner.module.css'
import { SingalcasebannerProps } from '../../../../lib/interface'
import AOS from 'aos'
import 'aos/dist/aos.css';


function Singalcasebanner({ data }: SingalcasebannerProps) {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
      
    const { title, upperTitle } = data
    return (
        <>
            <div className={`${classes.Singalcasebanner} main_padding `}>
                <div className='main_container'>
                    <div className="grid " data-aos="fade-up">
                        {/* <div className={`xl:max-w-[971px] lg:max-w-[800px] md:max-w-[700px] min-tb:max-tb:max-w-[533px] max-w-[500px] pe-[10px]`}> */}
                            {/* <h2 className='xl:text-45px lg:text-40px md:text-35px min-tb:max-tb:text-[26px] sm:text-[28px] text-[22px] font-semibold font-mono bg-light-green-1 w-max px-2' >{upperTitle}</h2> */}
                            {/* <h1 className='font-mono font-semibold xl:text-55px lg:text-50px md:text-40px min-tb:max-tb:text-[30px] sm:text-30px text-[22px] min-tb:max-tb:leading-[45px] lg:mt-[20px] md:mt-[15px] min-tb:max-tb:mt-[20px] mt-[10px]'>{title}</h1> */}
                        <div className={`${classes.banner_text} `}>
                            <h2 className='font-semibold font-mono bg-light-green-1' >{upperTitle}</h2>
                            <h1 className='font-mono font-semibold'>{title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Singalcasebanner