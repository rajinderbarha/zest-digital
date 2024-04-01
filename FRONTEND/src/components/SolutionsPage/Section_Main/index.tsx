import React from 'react'
import classes from './Section_Main.module.css'
import Image from 'next/image'
import Growth_engine from '@/common/Growth_engine'

function Section_Main() {
    return (
        <>
            <div className={`${classes.SingleIntro}  main_container   rounded-30px`}>
                <div className={`${classes.single_container}`}>
                    <div className="max-w-[1099px] mx-auto pt-[126px] pb-[368px]">
                        <div className="flex gap-4 items-center  mx-auto md:w-max w-full font-semibold text-center max-w-[500px]  md:max-w-none flex-col md:flex-row">
                            <h2 className='min-1350:text-45px md:text-4xl md:max-970:text-[29px] sm:text-2xl text-xl text-white font-mono'>Transform your results with growth</h2>
                            <div className=" ">
                                {/* <h2 className='min-1350:text-40px md:text-3xl text-color-4'>mapper</h2> */}
                                <h2 className='min-1350:text-45px md:text-4xl md:max-970:text-[29px] sm:text-2xl text-xl text-color-7 font-mono'>engine</h2>
                                {/* <h2 className='min-1350:text-40px md:text-3xl text-color-4'>tracker</h2> */}
                            </div>
                        </div>
                        <div className=" mx-auto max-w-[1027px] md:mt-[215px] mt-[100px]">
                            <h2 className='font-mono  font-semibold text-25px sm:text-30px md:text-35px leading-10 lg:leading-normal lg:text-40px xl:text-45px text-white mx-auto text-center px-4 sm:px-10 pb-6'>“Zest have been an instrumental partner in our growth, producing a 14x return on our investment.”</h2>
                            <div className="px-16">

                                <p className='text-base font-mono text-color-9 mx-auto  border-t border-color-9 text-center pt-3 '>Nick Attfield, Marketing Manager at Latham’s Steel Security Doorsets</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`max-w-[1345px] font-mono  mx-auto grid gap-10 -mt-64 px-10`}>
                {/* <div className={`${classes.growth_engine_box} font-mono grid gap-10 -mt-64 relative`}> */}
                <Growth_engine title="Growth Engine" has_image={false} shadow_right={false} btn_title="All inclusive growth marketing" desc="The fastest and most complete way to generate new leads and sales to grow your business. All-inclusive growth marketing covering; PPC, SEO, content, and more." />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1345px] mx-auto ">
                    <Growth_engine title="Growth Curve" has_image={false} shadow_right={true} btn_title="On-demand growth marketing" desc="Scalable on-demand growth marketing support across SEO, PPC, content, and more." />
                    <Growth_engine title="Growth Mapper" has_image={false} shadow_right={false} btn_title="On-demand growth marketing" desc="Plan for your growth using our unique framework, available as a standalone online course or a facilitated expert workshop." />
                </div>
                <Growth_engine title="Growth Tracker" has_image={true} shadow_right={true} btn_title="Track my growth experiments" desc="The fastest and most complete way to generate new leads and sales to grow your business. All-inclusive growth marketing covering; PPC, SEO, content, and more." />

                {/* <div className="absolute -bottom-40 right-0 w-max-[524px]">
                        <Image src={grow} alt="" />
                    </div> */}
                {/* </div> */}
            </div>
        </>
    )
}

export default Section_Main