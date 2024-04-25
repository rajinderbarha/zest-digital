import React from "react";
import classes from "./Sign_up.module.css";
import Link from "next/link";
function Sign_up() {

  return (
    <>
      <div className="sm:px-10 px-5">
        <div className="Sign_up max-w-[1510px] mx-auto border border-color-1 shadow-compo shadow-[#e43fa8]  pt-[55px] pb-[70px] rounded-[20px] md:rounded-30px mb-[206px]">
          <div className="detail text-center">
            <h2 className="md:text-45px text-30px font-mono font-semibold mb-[10px]">
              Sign up for early access
            </h2>
            <p className="px-5">
              Sign up with your email address to be notified on the release of
              our Beta version.
            </p>
          </div>
          <div
            className={`${classes.form_inputs} max-w-[1040px] mx-auto mt-[52px] flex justify-between px-5`}
          >
            <div className="first_name flex flex-col w-full max-w-[300px]">
              <label
                htmlFor="fname"
                className="text-color-9 sm:text-base text-[15px] font-semibold font-mono md:mb-[11px] sm:mb-[9px] mb-[5px]"
              >
                First name
              </label>
              <input
                type="text"
                name="fname"
                id=""
                className="border border-color-9 sm:rounded-[10px] rounded-[5px] md:rounded-[10px] md:px-[26px] sm:px-[15px] px-[10px]  md:py-[11px] sm:py-[9px] py-[6px] md:text-[18px] text-[16px] "
                placeholder="John"
              />
            </div>
            <div className="last_name flex flex-col w-full max-w-[300px]">
              <label
                htmlFor="lname"
                className="text-color-9 sm:text-base text-[15px] font-semibold font-mono md:mb-[11px] sm:mb-[9px] mb-[5px]"
              >
                Last name
              </label>
              <input
                type="text"
                name="lname"
                id=""
                className="border border-color-9 sm:rounded-[10px] rounded-[5px] md:rounded-[10px] md:px-[26px] sm:px-[15px] px-[10px]  md:py-[11px] sm:py-[9px] py-[6px] md:text-[18px] text-[16px] "
                placeholder="Doe"
              />
            </div>
            <div className="email flex flex-col w-full max-w-[300px]">
              <label
                htmlFor="email"
                className="text-color-9 sm:text-base text-[15px] font-semibold font-mono md:mb-[11px] sm:mb-[9px] mb-[5px]"
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id=""
                className="border border-color-9 sm:rounded-[10px] rounded-[5px] md:rounded-[10px] md:px-[26px] sm:px-[15px] px-[10px]  md:py-[11px] sm:py-[9px] py-[6px] md:text-[18px] text-[16px] "
                placeholder="johndoe@gmail.com"
              />
            </div>
          </div>
          <div className="button mt-[40px] text-center">
            <Link
              href="#"
              className="bg-color-1 font-mono sm:text-base text-[15px] md:px-[20px] px-[14px] sm:py-[10px] py-[7px] text-white rounded-full"
            >
              Notify me
            </Link>
          </div>
          <div className="term_condition max-w-[857px] mt-[40px] mx-auto">
            <p className="font-lato sm:text-base text-[15px] text-color-1 text-center">
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
