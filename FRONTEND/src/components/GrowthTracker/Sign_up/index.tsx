import React from "react";
import classes from "./Sign_up.module.css";
import Link from "next/link";
function Sign_up() {

  return (
    <>
      <div className="main_padding">
        <div className={`${classes.Sign_up} max-w-[1510px] mx-auto border border-color-1 shadow-dark-pink-right  lg:pt-[55px] px-[16px]  sm:pt-[50px] pt-[34px] md:pb-[70px] min-tb:max-tb:text-[60px] min-tb:max-tb:pb-[44px] sm:pb-[50px] pb-[34px] rounded-[20px] md:rounded-30px xl:mb-[206px] lg:mb-[190px] md:mb-[150px] min-tb:max-tb:mb-[132px] sm:mb-[130px] mb-[100px]`}>
          <div className="detail text-center">
            <h2 className="xl:text-45px lg:text-40px md:text-35px min-tb:max-tb:text-[30px] text-[22px] font-mono font-semibold md:mb-[16px]  sm:mb-[8px] mb-[8px]">
              Sign up for early access
            </h2>
            <p className=" font-lato md:text-lg min-tb:max-tb:text-[14px] sm:text-[16px] text-[14px]">
              Sign up with your email address to be notified on the release of
              our Beta version.
            </p>
          </div>
          <div
            className={`${classes.form_inputs} max-w-[1040px] mx-auto md:mt-[52px] min-tb:max-tb:mt-[40px] mt-[40px] grid grid-cols-12 lg:gap-x-[40px] lg:gap-y-[0] sm:gap-x-[30px] sm:gap-y-[35px] gap-y-[25px]`}
          >
            <div className="first_name flex flex-col w-full max-w-[300px] lg:col-span-4  sm:col-span-6 col-span-12">
              <label
                htmlFor="fname"
                className="text-color-9 sm:text-base min-tb:max-tb:text-[16px] text-[15px] font-semibold font-mono md:mb-[11px] sm:mb-[9px] mb-[2px]"
              >
                First name
              </label>
              <input
                type="text"
                name="fname"
                id=""
                className="border border-color-9 sm:rounded-[10px] rounded-[5px] md:rounded-[10px] md:px-[26px] sm:px-[15px] px-[10px]  md:py-[11px] sm:py-[9px] py-[6px] md:text-[18px] text-[16px] min-tb:max-tb:text-[18px]"
                placeholder="John"
              />
            </div>
            <div className="last_name flex flex-col w-full max-w-[300px] lg:col-span-4 sm:col-span-6 col-span-12">
              <label
                htmlFor="lname"
                className="text-color-9 sm:text-base min-tb:max-tb:text-[16px] text-[15px] font-semibold font-mono md:mb-[11px] sm:mb-[9px] mb-[2px]"
              >
                Last name
              </label>
              <input
                type="text"
                name="lname"
                id=""
                className="border border-color-9 sm:rounded-[10px] rounded-[5px] md:rounded-[10px] md:px-[26px] sm:px-[15px] px-[10px]  md:py-[11px] sm:py-[9px] py-[6px] md:text-[18px] text-[16px] min-tb:max-tb:text-[18px]"
                placeholder="Doe"
              />
            </div>
            <div className="email flex flex-col w-full max-w-[300px] lg:col-span-4 col-span-12">
              <label
                htmlFor="email"
                className="text-color-9 sm:text-base min-tb:max-tb:text-[16px] text-[15px] font-semibold font-mono md:mb-[11px] sm:mb-[9px] mb-[2px]"
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id=""
                className="border border-color-9 sm:rounded-[10px] rounded-[5px] md:rounded-[10px] md:px-[26px] sm:px-[15px] px-[10px]  md:py-[11px] sm:py-[9px] py-[6px] md:text-[18px] text-[16px] min-tb:max-tb:text-[18px]"
                placeholder="johndoe@gmail.com"
              />
            </div>
          </div>
          <div className="button md:my-[44px] min-tb:max-tb:mb-[81px] sm:my-[35px] mt-[31px] mb-[50px]  text-center">
            <Link
              href="#">
                <button className="bg-color-1 hover:bg-white hover:text-color-1 border border-color-1 font-mono sm:text-base text-[15px] md:px-[20px] px-[14px] sm:py-[10px] py-[7px] text-white rounded-full"
            >
              Notify me
              </button>
            </Link>
          </div>
          <div className="term_condition max-w-[857px]  mx-auto">
            <p className="font-lato sm:text-base min-tb:max-tb:text-[12px] text-[14px] text-color-1 text-center">
              We respect your privacy, and you’ll only be contacted about Growth
              Tracker.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sign_up;
// import React from 'react'
// import classes from './Sign_up.module.css'
// import { GrowthTrackerType } from '../../../../lib/interface'
// import Link from 'next/link'
// function Sign_up({ data }: { data: GrowthTrackerType[] }) {

// console.log("sign",data)

//     return (
//         <>
//             <div className="sm:px-10 px-5">
//                     {data?.map(({signupform},index)=>(

//                 <div key={`${index}_Sign_up`} className="Sign_up max-w-[1510px] mx-auto border border-color-1 shadow-compo shadow-[#e43fa8]  pt-[55px] pb-[70px] rounded-30px mb-[206px]">
//                     <div className="detail text-center">
//                         <h2 className='md:text-45px text-30px font-mono font-semibold mb-[10px]'>{signupform.signupheading}</h2>
//                         <p className='px-5'>{signupform.signupdescription}</p>
//                     </div>
//                     <div className={`${classes.form_inputs} max-w-[1040px] mx-auto mt-[52px] flex justify-between px-5`}>
//                         <div className="first_name flex flex-col w-full max-w-[300px]">
//                             <label htmlFor="fname" className='text-color-9 text-base font-semibold font-mono mb-[11px]'>{signupform.firstnameLabel}</label>
//                             <input type="text" name="fname" id="" className='border border-color-9 rounded-[10px] px-[25px] py-[14px] text-lg h-[50px]' placeholder='John' />
//                         </div>
//                         <div className="last_name flex flex-col w-full max-w-[300px]">
//                             <label htmlFor="lname" className='text-color-9 text-base font-semibold font-mono mb-[11px]'>{signupform.lastnameLabel}</label>
//                             <input type="text" name="lname" id="" className='border border-color-9 rounded-[10px] px-[25px] py-[14px] text-lg h-[50px]' placeholder='Doe' />
//                         </div>
//                         <div className="email flex flex-col w-full max-w-[300px]">
//                             <label htmlFor="email" className='text-color-9 text-base font-semibold font-mono mb-[11px]'>{signupform.emailLabel}</label>
//                             <input type="email" name="email" id="" className='border border-color-9 rounded-[10px] px-[25px] py-[14px] text-lg h-[50px]' placeholder='johndoe@gmail.com' />
//                         </div>
//                     </div>
//                     <div className="button mt-[40px] text-center">
//                         <Link href={signupform.buttonLink} className='bg-color-1 font-mono text-base px-[20px] py-[10px] text-white rounded-full'>{signupform.buttonName}</Link>
//                     </div>
//                     <div className="term_condition max-w-[857px] mt-[40px] mx-auto">
//                         <p className='font-lato text-base text-color-1 text-center'>{signupform.privacyDescription}</p>
//                     </div>
//                 </div>
//                  ))}
//             </div>
//         </>
//     )
// }

// export default Sign_up
