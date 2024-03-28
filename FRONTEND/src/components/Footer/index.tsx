import React from 'react'
import classes from './footer.module.css'
import Image from 'next/image'
import logo from '../../assets/images/zest-logo-darkbg.png'
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'
import img5 from '../../assets/images/img5.png'
import facebook from '../../assets/images/facebook.png'
import linkedin from '../../assets/images/linkedin.png'
import instagram from '../../assets/images/twitter.png'

const Footer = () => {
  return (
    <>
      <div className={`${classes.bg_image} bg-black rounded-t-[30px]  `} >
        <div className="max-w-[1720px] mx-auto px-5 pt-[48px] pb-10">

          <div className="flex flex-row items-center">
            <div className="">
              <Image src={logo} alt="" />
            </div>
            <div className="border-5 max-w-[1171px] w-full ps-5 ">
              <hr className=" bg-green-500 border-0 h-[1px]" />
            </div>
          </div>

          <div className="max-w-[1521px] mx-auto grid grid-cols-12 mt-10">
            <div className="col-span-2 text-white text-center">
              <h2 className='font-bold text-2xl mb-3'>Oxford</h2>
              <address className="not-italic">
                1–3 Kings Meadow<br />
                Odney Mead<br />
                Oxford<br />
                OX2 0DP
              </address>
              <p>📞 +44 (0) 1865 864 999</p>
            </div>
            <div className="col-span-2 text-white text-center">
              <h2 className='font-bold text-2xl mb-3'>Oxford</h2>
              <address className="not-italic">
                1–3 Kings Meadow<br />
                Odney Mead<br />
                Oxford<br />
                OX2 0DP
              </address>
              <p>📞 +44 (0) 1865 864 999</p>
            </div>
            <div className="col-span-2 text-white text-center">
              <h2 className='font-bold text-2xl mb-3'>Oxford</h2>
              <address className="not-italic">
                1–3 Kings Meadow<br />
                Odney Mead<br />
                Oxford<br />
                OX2 0DP
              </address>
              <p>📞 +44 (0) 1865 864 999</p>
            </div>
            <div className="col-span-2 text-white text-center">
              <h2 className='font-bold text-2xl mb-3' >Oxford</h2>
              <address className="not-italic">
                1–3 Kings Meadow<br />
                Odney Mead<br />
                Oxford<br />
                OX2 0DP
              </address>
              <p>📞 +44 (0) 1865 864 999</p>
            </div>
            <div className="col-span-2 text-white text-center">
              <h2 className='font-bold text-2xl mb-3'>Oxford</h2>
              <address className="not-italic">
                1–3 Kings Meadow<br />
                Odney Mead<br />
                Oxford<br />
                OX2 0DP
              </address>
              <p>📞 +44 (0) 1865 864 999</p>
            </div>
            <div className="col-span-2 text-white text-center">
              <h2 className='font-bold text-2xl mb-3'>Oxford</h2>
              <address className="not-italic">
                1–3 Kings Meadow<br />
                Odney Mead<br />
                Oxford<br />
                OX2 0DP
              </address>
              <p>📞 +44 (0) 1865 864 999</p>
            </div>
          </div>

          <div className="max-w-[1379px] mx-auto flex items-end my-10">
            <div className="">
              <Image src={img1} alt="" />
            </div>
            <div className="">
              <Image src={img2} alt="" />
            </div>
            <div className="">
              <Image src={img3} alt="" />
            </div>
            <div className="">
              <Image src={img4} alt="" />
            </div>
            <div className="">
              <Image src={img5} alt="" />
            </div>
          </div>

          <div className=" flex gap-5">
            <div className="">
              <Image src={facebook} alt="" />
            </div>
            <div className="">
              <Image src={linkedin} alt="" />
            </div>
            <div className="">
              <Image src={instagram} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-color-1 py-[35px]">
        <p className='text-white max-w-[970px] mx-auto'>Copyright 2023 © Zest Digital Limited | View our terms and conditions. Company No: 07288662 | VAT No: GB994 6614 67 </p>
      </div>
    </>
  )
}

export default Footer