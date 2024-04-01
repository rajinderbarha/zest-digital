import React from 'react'

interface Box_Title_Props {
    title: string;
    desc: string;
}
const Box_Title: React.FC<Box_Title_Props> = (props) => {
    return (
        <>
            {/* <div className='md:text-55px text-35px font-mono text-center md:mb-20 mb-8 font-semibold text-white'> */}
            <div className=" mx-auto max-w-[1027px] ">
                <h2 className='font-mono  font-semibold text-25px sm:text-30px md:text-35px leading-10 lg:leading-normal lg:text-40px xl:text-45px text-white mx-auto text-center  sm:px-10 pb-6'>{props.title}</h2>
                <div className="px-16">

                    <p className='text-base font-mono text-color-9 mx-auto  border-t border-color-9 text-center pt-3 '>{props.desc}</p>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Box_Title