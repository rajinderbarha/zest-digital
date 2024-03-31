import React from 'react'
import Image from 'next/image'
import classes from '../About_banner.module.css'
import Marquee from 'react-fast-marquee'
function Escape() {
  return (
    <div className='Escape_main '>
      <div className='main_container'>
        <div className={`${classes.Escape}`}>
          <h2 className='md:text-55px text-35px md:mb-12 mb-6 font-mono text-center  font-semibold text-white'>Escape “normal”</h2>
          <p className={`${classes.Escape_p} mx-auto md:text-35px text-25px font-mono text-white text-center md:mb-24 mb-8 font-semibold`}>Join our ecosystem of exceptional talent, collaborating to provide remarkable results for our clients whilst providing the ultimate in work:life balance.</p>
          <div className={`border-y border-color-3 py-16 relative `}>
            <div className={`${classes.gri}`}></div>
            <Marquee className={`${classes.gri}gap-16 `} >
              <div className="flex text-white  max-w-auto gap-16 me-5">
                <div className='maving_box md:max-w-[400px] max-w-[250px] text-center'>
                  <h2 className='md:text-35px text-25px  text-color-7 font-semibold font-mono'>Work any time</h2>
                  <p className='text-lg font-normal font-mono'>Determined to leave our planet having given back more than we took. Determined to leave our.</p>
                </div>
                <div className='maving_box  md:max-w-[400px] max-w-[250px] text-center'>
                  <h2 className='md:text-35px text-25px text-color-7 font-semibold font-mono'>Work any time</h2>
                  <p className='text-lg font-normal font-mono'>Determined to leave our planet having given back more than we took. Determined to leave our.</p>
                </div>
                <div className='maving_box  md:max-w-[400px] max-w-[250px] text-center'>
                  <h2 className='md:text-35px text-25px text-color-7 font-semibold font-mono'>Work any time</h2>
                  <p className='text-lg font-normal font-mono'>Determined to leave our planet having given back more than we took. Determined to leave our.</p>
                </div>
                <div className='maving_box  md:max-w-[400px] max-w-[250px] text-center'>
                  <h2 className='md:text-35px text-25px text-color-7 font-semibold font-mono'>Work any time</h2>
                  <p className='text-lg font-normal font-mono'>Determined to leave our planet having given back more than we took. Determined to leave our.</p>
                </div>
                <div className='maving_box  md:max-w-[400px] max-w-[250px] text-center'>
                  <h2 className='md:text-35px text-25px text-color-7 font-semibold font-mono'>Work any time</h2>
                  <p className='text-lg font-normal font-mono'>Determined to leave our planet having given back more than we took. Determined to leave our.</p>
                </div>
              </div>
            </Marquee>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Escape