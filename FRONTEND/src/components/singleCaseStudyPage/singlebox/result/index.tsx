import React from 'react'
import Result_img from '../../../../assets/images/result.png'
import classes from '../singlebox.module.css'
import Image from 'next/image'
function result() {
  return (
<>
<div className={`${classes.objective} max-w-[1545px] mx-auto px-12`}>

                <div className={`grid md:grid-cols-2 items-center rounded-30px bg-white ${classes.objective_inner} border border-color-1 shadow-compo1 gap-10`}>
                <div className="col-span-1   ">
                        <Image src={Result_img} alt="" className="ms-auto " />
                    </div>
                    <div className="col-span-1 text-right">
                        <h2 className='text-30px md:text-35px lg:text-45px text-color-1 font-semibold font-mono '>Results</h2>
                        <div className="font-lato md:text-md  lg:text-lg mt-[20px] md:mt-[20px] lg:mt-[48px] ">
                            <p>Our partnership with Hanson (UK) has yielded some incredible results, including a #1 ranking for a major keyword with over 12,000 monthly searches, driving significant traffic to key landing pages.</p>
                            <p className='mt-1 md:mt-3 lg:mt-5'>In addition, we ran a series of test vs control experiments across key locations to validate improvements achieved. The test pages saw a 107% increase in conversion rate vs a 41% increase across the control pages.</p>
                            <p className='mt-1 md:mt-3 lg:mt-5'>Both conversion rate values increased as part of the improvements we made to their goal tracking in Google Analytics, giving Hanson (UK) much more clarity over their data and marketing effectiveness. </p>
                            <p className='mt-1 md:mt-3 lg:mt-5'>Email clicks for quotations have increased by 83% across test pages vs just 13% across the control group. Furthermore, we saw a 171% increase in high intent goal completions (sales enquiries) across test pages, and location pages have seen a massive 43% more traffic, representing thousands of new sales opportunities. </p>
                            <p className='mt-1 md:mt-3 lg:mt-5'>Our efforts were acknowledged as a Finalist at the UK Digital Growth Awards 2019, for ‘Best SEO Campaign’.</p>
                        </div>
                    </div>
                    

                </div>
            </div>
</>
  )
}

export default result
