import React from 'react'
interface GrowthMarketingServices_Banner_Props {
    title: string;
    desc: string;
}
const GrowthMarketingServices_Banner: React.FC<GrowthMarketingServices_Banner_Props> = (props) => {
// function GrowthMarketingServices_Banner() {
    return (
        <>
            <div className={`GrowthMarketingServices_Banner mt-[91px]`}>
                <div className='main_container px-5'>
                    <div className=" max-w-[1033px] ">
                        <div className="md:pe-20 ">
                            <h2 className='lg:text-55px md:text-40px text-25px font-semibold font-mono pe-20 mb-5 md:mb-7'>{props.title}</h2>
                            <p className='font-mono lg:text-30px md:text-25px text-xl mb-5 md:leading-9'>{props.desc}</p>
                            <div className="flex flex-wrap gap-4">

                                <button className="font-mono text-base px-21px h-10 text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white hover:border-white border border-color-1 ">Book a call</button>
                                <button className="font-mono text-base px-21px h-10 bg-white text-color-1 rounded-full  hover:bg-color-1 hover:text-white hover:border-black border border-color-1 ">See results</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GrowthMarketingServices_Banner