import Growth_engine from '@/common/Growth_engine'
import React from 'react'

function Growths() {
    return (
        <>
            <div className="Growths max-w-[1365px] mx-auto px-5 mt-[70px] overflow-hidden">
                <div className="2xl:mb-[300px] lg:mb-[200px] mb-[100px]">
                    <h2 className='text-30px md:text-45px sm:text-35px font-mono font-semibold mx-auto text-center'>Our other solutions</h2>
                    <div className={` font-mono  mx-auto grid gap-10 mt-10 md:mt-28 `}><div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1345px] mx-auto ">
                        <Growth_engine title="Growth Curve" has_image={false} shadow_right={true} btn_title="On-demand growth marketing" desc="Scalable on-demand growth marketing support across SEO, PPC, content, and more." />
                        <Growth_engine title="Growth Mapper" has_image={false} shadow_right={false} btn_title="On-demand growth marketing" desc="Plan for your growth using our unique framework, available as a standalone online course or a facilitated expert workshop." />
                    </div>
                        <Growth_engine title="Growth Tracker" has_image={true} shadow_right={true} btn_title="Track my growth experiments" desc="The fastest and most complete way to generate new leads and sales to grow your business. All-inclusive growth marketing covering; PPC, SEO, content, and more." />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Growths