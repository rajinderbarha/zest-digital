import Image from 'next/image'
import classes from '../About_banner.module.css'
import { AboutType } from '../../../../lib/interface'
import { urlFor } from '../../../../lib/sanity.client'

function Zest_for_life({ data }: { data: AboutType[] }) {

    return <div className={`${classes.Zest_for_life}  main_padding xl:mt-[125px] lg:mt-[100px] md:mt-[80px] min-tb:max-tb:mt-[90px] sm:mt-[50px] mt-[30px]`}>
        <div className="main_padding">
            <div className='main_container_x '>
                {data?.map((item, index) => (

                    <div key={`${item}_Zest_for_life`} >
                        <div className="grid grid-cols-12 " data-aos="fade-up">
                            <div className="min-tb:col-span-9 col-span-7">
                                <h1 className={`${classes.zest_for_life_title} font-mono  font-semibold  text-color-1`}>{item.lifeSection.title}</h1>
                                <p className={`${classes.zest_for_life_desc} font-mono  min-tb:max-tb:max-w-[435px] font-medium sm:font-semibold mb:mb-0 sm:mb-5 mb-[5px] text-color-1`}>{item.lifeSection.description}</p>
                            </div>
                            <div className={`${classes.earth_img} min-tb:col-span-3  col-span-5`} data-aos="zoom-in" data-aos-delay="200">
                                <Image className=' ms-auto  xl:max-w-[300px] lg:max-w-[250px] md:max-w-[200px] sm:max-w-[150px] min-tb:max-tb:max-w-[150px] max-w-[120px] w-full' src={urlFor(item.lifeSection.image).url()} width={300} height={300} alt="" />
                            </div>                    </div>



                        <div className={`${classes.zest_for_life_facility_container} grid grid-cols-12  lg:mt-[90px] md:mt-[80px] min-tb:max-tb:mb-[58px] sm:mt-[70px] mt-[50px]`}>
                            {item.card.map((cardItem, path) => {
                                if (path == 0) {
                                    return (
                                        <div className={`${classes.zest_for_life_facility} Zest_for_life_facility_image text-center md:max-w-fit max-w-[270px] mx-auto`} key={`${path}__Zest_for_life_path_0 `} data-aos="fade-up">
                                            <h2 className={`${classes.image_heading} font-mono font-semibold    text-color-1`}>{cardItem.title}</h2>
                                            <Image src={urlFor(cardItem.image).url()} width={440} height={440} className=' ' alt="" />
                                            <p className=' font-mono  font-normal lg:mt-8 md:mt-6 mt-[20px]  md:px-8 px-[15px] max-w-[440px] mx-auto text-color-1'>{cardItem.description}</p>
                                        </div>
                                    )
                                }
                                else if (path == 1) {
                                    return (

                                        <div className={`${classes.zest_for_life_facility} Zest_for_life_facility_image md:mt-20  md:max-w-fit text-center  max-w-[270px] mx-auto`} key={`${path}__Zest_for_life_path_1`} data-aos="fade-up" data-aos-delay="200">
                                            <h2 className={`${classes.image_heading} font-mono font-semibold   text-color-1`}>{cardItem.title}</h2>
                                            <Image src={urlFor(cardItem.image).url()} width={440} height={440} className='' alt="" />
                                            <p className=' font-mono  font-normal lg:mt-8 md:mt-6 mt-[20px] md:px-8 px-[15px] max-w-[440px] mx-auto text-color-1' >{cardItem.description}</p>
                                        </div>
                                    )
                                }
                                else {
                                    return (

                                        <div className={`${classes.zest_for_life_facility} Zest_for_life_facility_image  md:max-w-fit text-center md:mt-40  max-w-[270px] mx-auto`} key={`${path}__Zest_for_life_path`} data-aos="fade-up" data-aos-delay="200">
                                            <h2 className={`${classes.image_heading} font-mono font-semibold  text-color-1`}>{cardItem.title}</h2>
                                            <Image src={urlFor(cardItem.image).url()} width={440} height={440} className='' alt="" />
                                            <p className=' font-mono  font-normal lg:mt-8 md:mt-6 mt-[20px] md:px-8 px-[15px] max-w-[440px] mx-auto text-color-1'>{cardItem.description}</p>
                                        </div>
                                    )
                                }
                            }
                            )}

                        </div>
                    </div>

                ))}
            </div>


        </div>
    </div>
}

export default Zest_for_life