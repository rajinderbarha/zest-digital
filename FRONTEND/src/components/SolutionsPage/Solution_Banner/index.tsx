import { useEffect } from 'react'
import Image from 'next/image'
import classes from './Solution_Banner.module.css'
import { urlFor } from '../../../../lib/sanity.client'
import { Solution_BannerType } from '../../../../lib/interface'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Solution_Banner({ data }: { data: Solution_BannerType }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return <div className={`${classes.Solution_Banner} main_padding`} data-aos="fade-up" >
        <div className='main_container'>
            <div className="grid md:grid-cols-12 ">
                <div className="md:col-span-8 min-tb:max-tb:col-span-12">
                    <h2 className={`${classes.banner_title} banner_title  text-color-1  font-semibold font-mono inline bg-light-green-1  w-fit md:w-max  `} >{data.upperTitle}</h2>
                    <h1 className={`${classes.banner_desc} font-mono  min-tb:max-tb:max-w-[533px] font-semibold  text-color-1 `}>{data.heading}</h1>
                </div>
                <div className={`${classes.image_div} md:col-span-4 min-tb:max-tb:col-span-12 md:flex items-center `} data-aos="fade" data-aos-delay="200">
                    <Image className={`${classes.banner_image} rotate  md:ms-auto aspect-square `} src={urlFor(data.image).url()} alt="banner img" width={245} height={245} />
                </div>
            </div>
        </div>
    </div>

}

export default Solution_Banner