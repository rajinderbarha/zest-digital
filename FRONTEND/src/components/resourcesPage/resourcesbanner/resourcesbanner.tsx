import React, { useEffect } from 'react'
import classes from './resourcesbanner.module.css'
import { Resources } from '../../../../lib/interface'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Resourcesbanner({ data }: { data: Resources }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return <div className={`${classes.Resourcesbanner} main_padding xl:mt-[95px] lg:mt-[75px] md:mt-[55px] mt-[35px]`}>
        <div className='main_container' data-aos="fade-up">
            <div className=" ">
                <div className="">

                    <h1 className={`${classes.banner_text} font-mono font-semibold min-tb:max-tb:max-w-[516px]  mb-[20px] `}>{data.heading}</h1>
                </div>

            </div>
        </div>
    </div>

}

export default Resourcesbanner