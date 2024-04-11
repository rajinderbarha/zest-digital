import React from 'react'
import classes from './Resource_Access_popup.module.css'
import popup_close_icon from '../../assets/images/popup_close_icon.png'
import Image from 'next/image'
function Resource_Access_popup() {
    return (
        <>
            <div className="Resource_Access_popup">
                <div className="sm:px-10 px-5">

                    <div className="Resource_Access_popup popup_conatiner pt-[88px]  relative">
                        <div className="absolute right-[25px] md:right-[45px] top-[20px] md:top-[40px] md:max-w-max max-w-[20px]">
                            <a href='/resources'>

                            <Image src={popup_close_icon} alt='' className='' />
                            </a>

                        </div>
                        <div className="detail text-center">
                            <h2 className='md:text-45px text-30px font-mono font-semibold mb-[10px]'>Access calculator</h2>
                        </div>
                        <div className={`${classes.form_inputs} max-w-[1040px] mx-auto mt-[52px] flex justify-between px-5`}>
                            <div className="first_name flex flex-col w-full max-w-[300px]">
                                <label htmlFor="fname" className='text-color-9 text-base font-semibold font-mono mb-[11px]'>First name</label>
                                <input type="text" name="fname" id="" className='border border-color-9 rounded-[10px] px-[25px] py-[14px] text-lg h-[50px]' placeholder='John' />
                            </div>
                            <div className="last_name flex flex-col w-full max-w-[300px]">
                                <label htmlFor="lname" className='text-color-9 text-base font-semibold font-mono mb-[11px]'>Last name</label>
                                <input type="text" name="lname" id="" className='border border-color-9 rounded-[10px] px-[25px] py-[14px] text-lg h-[50px]' placeholder='Doe' />
                            </div>
                            <div className="email flex flex-col w-full max-w-[300px]">
                                <label htmlFor="email" className='text-color-9 text-base font-semibold font-mono mb-[11px]'>E-mail</label>
                                <input type="email" name="email" id="" className='border border-color-9 rounded-[10px] px-[25px] py-[14px] text-lg h-[50px]' placeholder='johndoe@gmail.com' />
                            </div>
                        </div>
                        <div className="button mt-[40px] text-center mb-[108px]">
                            <button className='bg-color-1 font-mono text-base px-[20px] py-[10px] text-white rounded-full'>Get access</button>
                        </div>
                        <div className="term_condition max-w-[857px] mt-[40px] mx-auto mb-[30px]">
                            <p className='font-lato text-base text-color-1 text-center'>*required fields</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resource_Access_popup