import React from 'react'
import image1 from '../../assets/images/5f7ed9b28beea2001c0ccadf.png'
import image2 from '../../assets/images/earth.png'
import Image from 'next/image'

function Climate_action() {
    return (
        <>
            <div className="mx-auto max-w-[1720px] w-full px-5 my-10 mt-36">
                {/* <div className={`  rounded-30px font-mono pt-[88px]  flex`}> */}
                <div className={`mx-auto ps-14 pe-7 py-[70px] rounded-30px shadow-compo border border-black font-mono bg-white text-color-1 grid grid-cols-12 `}>
                    <div className="col-span-4 flex items-center border">
                        <div className="">

                            <Image src={image1} alt="" />
                        </div>
                        <div className="">

                            <Image src={image2} alt="" />
                        </div>
                    </div>
                    <div className="col-span-8 ps-10 max-w-[919px]  border items-center">
                        <p className='text-[30px]'>Through our Zest For Life initiatives, we’re committed to sustainable growth; both in business and the environment.</p>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Climate_action