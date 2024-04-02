import React from 'react'
import Image from 'next/image'
import Zest_circle_text from '../../assets/images/Zest_circle_text.png'
import closeIcon from '../../assets/images/Icon ionic-ios-close.png'
import classes from './heroSection.module.css'
import chatIcon from '../../assets/images/chatIcon.png'

const HeroSection = () => {
  return (
    <>
      {/* <div className="  text-white mx-auto lg:px-20 2xl:px-100px md:px-11 px-8"> */}
      <div className="  text-white mx-auto max-w-[1720px] w-full px-5">
        <div  className={`${classes.banner} grid md:grid-cols-2 grid-cols-1 gap-10 bg-black bg-image-1 bg-no-repeat bg-cover pt-185px pb-166px sm-max:pt-4 sm-max:pb-3 rounded-30px lg:px-20 2xl:px-100px md:px-11 px-8 max-1350:pb-130px max-1350:px-16 max-1350:pt-166px max-1024:pt-[130px] max-768:pt-16 max-768:px-10 relative`}>

        <div className=" font-mono text-55px border-white flex flex-col">
          <h1 className={`${classes.banner_text} font-semibold leading-tight border-white p-1 max-1810px:text-50px max-1350:text-45px  max-1350:pe-5  max-768:text-35px`}>Grow revenues faster and more predictably, with guaranteed results in 90-days.</h1>
          <div className='flex gap-5 md:flex-col lg:flex-row mt-9 flex-col sm:flex-row'>

            <button className='text-base px-25px h-10 bg-white text-color-1 rounded-full hover:bg-color-1 hover:text-white border border-white  hover:border-color-1'>View solutions</button>
            <button className='text-base px-25px h-10 bg-transparent text-white rounded-full hover:text-color-1 hover:bg-white border border-white '>See our results</button>
          </div>
          <div className={`${classes.marketing_agency_logo_1} self-end`}>

            <Image src={Zest_circle_text} alt="" />
          </div>
        </div>
        <div className={`${classes.banner_video} flex justify-end items-start relative`}>
          <div className={`${classes.marketing_agency_logo_2}`}>
            <Image src={Zest_circle_text} alt="" />
          </div>
          <video controls className='rounded-30px h-450px w-680px max-1810px:h-440px max-1810px:w-670px max-1700px:h-430px max-1700px:w-660px max-1570:h-400px max-1570:w-650px max-1350:h-380px max-1350:w-630px'>
            <source src="https://youtu.be/SFvcUsGuT2k?si=GNrj2dBAKU-uTlIs" type="video/mp4" />
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
        </>
    )
}

export default HeroSection