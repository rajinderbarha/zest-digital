// import Image from 'next/image'
// import React from 'react'
// import classes from '../Services_details.module.css'
// import { SingleOurService } from '../../../../../lib/interface'
// import { urlFor } from '../../../../../lib/sanity.client'

// const Services_details_happy_customer: React.FC<SingleOurService> = (props) => {
//     return (
//         <>
//             <div className={`${classes.objective} main_container`}>
//                 {props.Services_details.map((item, index) => (
//                     <div key={index} className={`bg-white ${classes.objective_inner} mt-[100px] md:mt-[175px] px-10 flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
//                         <div className="md:max-w-[500px] text-center md:text-left">
//                             <h2 className='text-30px md:text-35px lg:text-45px text-color-1 font-semibold font-mono '>{item.heading}</h2>
//                             <div className="font-mono md:text-25px lg:text-30px mt-[20px] md:mt-[25px] lg:mt-[48px] ">
//                                 <p>{item.description_1}</p>
//                                 <p className='mt-1 md:mt-3 lg:mt-12'>{item.description_2}</p>
//                             </div>
//                         </div>
//                         <div className="md:max-w-[350px]">
//                             <Image src={urlFor(item.image).url()} width={350} height={350} alt="" className="xl:max-w-[350px]  md:max-w-[280px] max-w-[200px]" />
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </>
//     )
// }

// export default Services_details_happy_customer


import Image from 'next/image'
import React from 'react'
import Heart_icon from '../../../../assets/images/Heart_icon.png'
import growth_framework_img from '../../../../assets/images/growth_framework_img.png'
import People_icon from '../../../../assets/images/People_icon.png'
import classes from '../Services_details.module.css'
import { SingleOurService } from '../../../../../lib/interface'
import { urlFor } from '../../../../../lib/sanity.client'

// interface Services_details_Banner_Props {
//     title1: string;
//     title2: string;
//     title_changeColor: string;
//     desc1: string;
//     desc2: string;
// }
const Services_details_happy_customer: React.FC<SingleOurService> = (props) => {
// function GrowthMarketingServices_details_happy_customer() {
    return (
        <>
            <div className={`${classes.objective} main_container`}>
            {props.Services_details.map((item,index)=>(
                    (index%2 == 0) ?

                        <div key={`${index}_blog_service`} className={`flex items-center flex-col md:flex-row  bg-white ${classes.objective_inner} gap-10 mt-[100px] md:mt-[175px] px-10`}>
                    <div className=" md:max-w-[1057px] md:pe-[100px]">
                        {/* <h2 className='text-30px md:text-35px lg:text-45px text-color-1 font-semibold font-mono '>{props.title1} <span className='text-color-9'>{props.title_changeColor} </span>{props.title2}</h2> */}
                        <h2 className='text-30px md:text-35px lg:text-45px text-color-1 font-semibold font-mono '>{item.heading}</h2>
                        <div className="font-mono md:text-25px  lg:text-30px mt-[20px] md:mt-[25px] lg:mt-[48px] ">
                            <p>{item.description_1}</p>
                            <p className='mt-1 md:mt-3 lg:mt-12'> {item.description_2}</p>
                        </div>
                    </div>
                    <div className=" xl:max-w-[350px] md:max-w-[280px] max-w-[200px]">
                        <Image src={urlFor(item.image).url()} width={350} height={350} alt="" className="xl:max-w-[350px]  md:max-w-[280px] max-w-[200px]" />
                    </div>

                </div>
                    :

                    <div className={`${classes.objective} main_container`}>

                    <div className={`flex items-center flex-col-reverse md:flex-row  bg-white ${classes.objective_inner} gap-10 mt-[100px] md:mt-[175px] px-10`}>
                        <div className=" xl:max-w-[350px] md:max-w-[280px] max-w-[200px]  md:ps-[100px]">
                            <Image src={growth_framework_img} alt="" className="xl:max-w-[350px]  md:max-w-[280px] max-w-[200px]" />
                        </div>
                        <div className=" ms-auto md:max-w-[1057px] md:ps-[80px] text-right">
                            {/* <h2 className='text-30px md:text-35px lg:text-45px text-color-1 font-semibold font-mono '>{props.title1} <span className='text-color-9'>{props.title_changeColor}  </span>{props.title2} </h2> */}
                            <h2 className='text-30px md:text-35px lg:text-45px text-color-1 font-semibold font-mono '>{item.heading}</h2>
                            <div className="font-mono md:text-25px  lg:text-30px mt-[20px] md:mt-[25px] lg:mt-[48px] ">
                            <p>{item.description_1}</p>
                            <p className='mt-1 md:mt-3 lg:mt-12'> {item.description_2}</p>
                            </div>
                        </div>
    
                    </div>
                </div>

))}

</div>




{/* 
            <div className={`${classes.objective} main_container`}>

                <div className={`flex items-center flex-col-reverse md:flex-row  bg-white ${classes.objective_inner} gap-10 mt-[100px] md:mt-[175px] px-10`}>
                    <div className=" xl:max-w-[350px] md:max-w-[280px] max-w-[200px]  md:ps-[100px]">
                        <Image src={growth_framework_img} alt="" className="xl:max-w-[350px]  md:max-w-[280px] max-w-[200px]" />
                    </div>
                    <div className=" ms-auto md:max-w-[1057px] md:ps-[80px] text-right">
                        <h2 className='text-30px md:text-35px lg:text-45px text-color-1 font-semibold font-mono '>{props.title1} <span className='text-color-9'>{props.title_changeColor}  </span>{props.title2} </h2>
                        <div className="font-mono md:text-25px  lg:text-30px mt-[20px] md:mt-[25px] lg:mt-[48px] ">
                            <p>{props.desc1} </p>
                            <p className='mt-1 md:mt-3 lg:mt-12'> {props.desc2} </p>
                        </div>
                    </div>

                </div>
            </div> */}






           {/* <div className={`${classes.objective} main_container`}>

                <div className={`flex items-center flex-col md:flex-row  bg-white ${classes.objective_inner} gap-10 mt-[100px] md:mt-[175px] px-10`}>
                    <div className=" md:max-w-[1057px] md:pe-[100px]">
                        <h2 className='text-30px md:text-35px lg:text-45px text-color-1 font-semibold font-mono '>{props.title1} <span className='text-color-9'>{props.title_changeColor} </span> {props.title2}</h2>
                        <div className="font-mono md:text-25px  lg:text-30px mt-[20px] md:mt-[25px] lg:mt-[48px] ">
                            <p>{props.desc1}</p>
                            <p className='mt-1 md:mt-3 lg:mt-12'> {props.desc2}</p>
                        </div>
                    </div>
                    <div className=" xl:max-w-[350px] md:max-w-[280px] max-w-[200px]">
                        <Image src={People_icon} alt="" className="xl:max-w-[350px]  md:max-w-[280px] max-w-[200px]" />
                    </div>

                </div>
            </div> */}
        </>
    )
}

export default Services_details_happy_customer