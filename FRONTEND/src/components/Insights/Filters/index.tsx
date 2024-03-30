import React from 'react'
import Image from 'next/image'
import classes from './Filters.module.css'
import Filters_image from '../../../assets/images/Filters.png'
import { GoArrowRight } from 'react-icons/go'
import Mind from '../../../assets/images/Brain_icon.png'
function Filters() {
  return (
    <>
      <div className='main_container'>
        <h2 className='font-mono my-20 md:text-55px px-5 text-35px'>Insights</h2>
      </div>

      <div className='main_container'>
        <div className={`${classes.Filters} relative `}>
          <Image src={Filters_image} alt="" className={`${classes.Filters_img} invisible md:visible  bg-black rounded-30px absolute top-0`} />
          <div className='Filters_box relative z-10  grid md:grid-cols-12'>
            <div className='md:col-span-8'>
              <div className=''>
                <div className={`grid grid-cols-12 items-end shadow-compo1 max-w-[1345px] mx-auto ps-14 pe-7 py-[70px] rounded-30px border border-black  bg-white text-color-1`}>
                  <div className='col-span-9'>
                    <h6 className={`${classes.Filters_btn} bg-color-7 border border-color-7 rounded-full font-mono w-max`}>Strategy & Planning</h6>
                    <h2 className={` text-40px font-mono font-semibold mb-6 mt-8 `}>Key Digital Marketing Trends in 2022</h2>
                    <div className="">
                      <button className='bg-color-1 rounded-full text-white text-base py-[7px] ps-5 flex gap-2 items-center'>Read more <span className='p-1 bg-white rounded-full text-black me-2 text-lg'><GoArrowRight /></span></button>
                    </div>
                  </div>
                  <div className='col-span-3'>
                    <Image className='w-[150px] ms-auto' src={Mind} alt="" />
                  </div>
                </div>
              </div>
              <div className=' my-10'>
                <div className={`grid grid-cols-12 items-end shadow-compo max-w-[1345px] mx-auto ps-14 pe-7 py-[70px] rounded-30px border border-black  bg-white text-color-1`}>
                  <div className='col-span-9'>
                    <h6 className={`${classes.Filters_btn} bg-color-7 border border-color-7 rounded-full font-mono w-max`}>Strategy & Planning</h6>
                    <h2 className={` text-40px font-mono font-semibold mb-6 mt-8 `}>Key Digital Marketing Trends in 2022</h2>
                    <div className="">
                      <button className='bg-color-1 rounded-full text-white text-base py-[7px] ps-5 flex gap-2 items-center'>Read more <span className='p-1 bg-white rounded-full text-black me-2 text-lg'><GoArrowRight /></span></button>
                    </div>
                  </div>
                  <div className='col-span-3'>
                    <Image className='w-[150px] ms-auto' src={Mind} alt="" />
                  </div>
                </div>
              </div>
              <div className=''>
                <div className={`grid grid-cols-12 items-end shadow-compo1 max-w-[1345px] mx-auto ps-14 pe-7 py-[70px] rounded-30px border border-black  bg-white text-color-1`}>
                  <div className='col-span-9'>
                    <h6 className={`${classes.Filters_btn} bg-color-7 border border-color-7 rounded-full font-mono w-max`}>Strategy & Planning</h6>
                    <h2 className={` text-40px font-mono font-semibold mb-6 mt-8 `}>Key Digital Marketing Trends in 2022</h2>
                    <div className="">
                      <button className='bg-color-1 rounded-full text-white text-base py-[7px] ps-5 flex gap-2 items-center'>Read more <span className='p-1 bg-white rounded-full text-black me-2 text-lg'><GoArrowRight /></span></button>
                    </div>
                  </div>
                  <div className='col-span-3'>
                    <Image className='w-[150px] ms-auto' src={Mind} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:col-span-1 '></div>
            <div className='md:col-span-3  '>
              <h2 className='text-30px  font-mono font-semibold text-white mb-10'>Filters</h2>
              <div className='Filters_main_btn flex flex-wrap gap-3 '>
                <h6 className={`${classes.Filters_btn} bg-color-7 border border-color-7 rounded-full font-mono`}>Strategy & Planning</h6>
                <h6 className={`${classes.Filters_btn} text-color-7 border border-color-7 rounded-full font-mono`}>Growth</h6>
                <h6 className={`${classes.Filters_btn} text-color-7 border border-color-7 rounded-full font-mono`}>CRO & Analytics</h6>
                <h6 className={`${classes.Filters_btn} text-color-7 border border-color-7 rounded-full font-mono`}>PPC</h6>
                <h6 className={`${classes.Filters_btn} text-color-7 border border-color-7 rounded-full font-mono`}>SEO</h6>
                <h6 className={`${classes.Filters_btn} text-color-7 border border-color-7 rounded-full font-mono`}>Company</h6>
                <h6 className={`${classes.Filters_btn} text-color-7 border border-color-7 rounded-full font-mono`}>Landing Pages</h6>
              </div>
            </div>
          </div>

        </div>
      </div >
    </>
  )
}

export default Filters