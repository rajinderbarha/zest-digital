import React from 'react'
import Image from 'next/image'
// import Zest_circle_text from '../../assets/images/Zest_circle_text.png'
// import closeIcon from '../../assets/images/Icon ionic-ios-close.png'
import classes from './heroSection.module.css'
// import chatIcon from '../../assets/images/chatIcon.png'
import { urlFor } from '../../../lib/sanity.client'



const HeroSection = ({data}:any) => {
  const {heading,viewSolBtnName,viewSolBtnLink,SeeOurResBtnName,SeeOurResBtnLink,image,video} = data
  
  console.log(video)
  return (
    <>
      {/* <div className="  text-white mx-auto lg:px-20 2xl:px-100px md:px-11 px-8"> */}
      <div className="main_padding">
      <div className=" text-white main_container">
        {/* <div  className={`${classes.banner} grid md:grid-cols-2 grid-cols-1 gap-10 bg-black bg-image-1 bg-no-repeat bg-cover rounded-30px pt-185px pb-166px sm-max:pt-4 sm-max:pb-3  lg:px-20 2xl:px-100px md:px-11 px-8 max-1350:pb-130px max-1350:px-16 max-1350:pt-166px max-1024:pt-[130px] max-768:pt-16 max-768:px-10 relative`}> */}
        <div  className={`${classes.banner} grid md:grid-cols-2 grid-cols-1 gap-10 bg-black bg-image-1 bg-no-repeat bg-cover md:rounded-30px rounded-[20px] xl:pb-[166px] lg:pb-[106px] xl:pt-[185px] lg:pt-[135px] md:py-[90px] sm:py-[50px] py-[30px] xl:px-[100px] lg:px-[80px] md:px-[60px] sm:px-[40px] px-[22px] relative`}>

        <div className=" font-mono text-55px border-white flex flex-col">
          <h1 className={`${classes.banner_text} font-semibold leading-tight border-white xl:text-55px lg:text-50px md:text-40px text-30px `}>{heading}</h1>
          <div className='flex gap-5 md:flex-col lg:flex-row mt-9 flex-col sm:flex-row'>

            <button className='text-base px-25px md:h-10 h-9 bg-white text-color-1 rounded-full hover:bg-color-1 hover:text-white border border-white  hover:border-color-1'>{viewSolBtnName}</button>
            <button className='text-base px-25px md:h-10 h-9 bg-transparent text-white rounded-full hover:text-color-1 hover:bg-white border border-white '>{SeeOurResBtnName}</button>
          </div>
          <div className={`${classes.marketing_agency_logo_1} self-end`}>

            <Image src={urlFor(image).url()} width={256} height={246} alt="" />
          </div>
        </div>
        <div className={`${classes.banner_video}  flex justify-end items-start  relative`}>
          <div className={`${classes.marketing_agency_logo_2}`}>
          <Image src={urlFor(image).url()} width={256} height={246} alt="" />
          </div>
          <video controls className={`${classes.video_class} md:rounded-30px rounded-[20px] xl:w-[685px] xl:h-[450px] lg:w-[500px] lg:h-[350px] md:w-[400px] md:h-[250px] w-full sm:h-[320px]`}>
            <source src="https://youtu.be/SFvcUsGuT2k?si=GNrj2dBAKU-uTlIs" type="video/mp4" className=''/>
            Your browser does not support the video tag.
          </video>
         
        </div>
        {/* <div className=" flex flex-col items-end absolute bottom-26px right-47px">
                        <div className="bg-white text-lg px-63px py-23px text-color-1 text-center w-331px rounded-15px relative shadow-msg ">
                            <p className='font-lato leading-5'>Drop us a message if you have any questions!</p>
                            <Image src={closeIcon} alt="" className='absolute top-16.29px right-14.33px' />
                        </div>
                        <div className="mt-2">
                            <Image src={chatIcon} alt="" className='' />

                        </div>
                    </div> */}
      </div>
    </div >
    </div >
        </>
    )
}

export default HeroSection