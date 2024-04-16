import React from 'react'
import { SingleOurService } from '../../../../lib/interface';
interface Services_Banner_Props {
    title: string;
    smallDescription: string;
    max_width: string;
    button:{
        callButtonName:string,
        resultsButtonName:string
    }
}
const Services_Banner: React.FC<Services_Banner_Props> = (props) => {
    // function GrowthMarketingServices_Banner() {

    const {title,smallDescription,max_width,} = props;

    const {button:{callButtonName,resultsButtonName}} = props

    console.log(props.max_width);
    const max_width_string = `max-w-[${max_width}] `;

    return (
        <>
            <div className={`GrowthMarketingServices_Banner mt-[91px]`}>
                <div className='main_container px-5'>
                    <div className={`${max_width_string} `} >
                        <div className="md:pe-20 ">
                            <h2 className='lg:text-55px md:text-40px text-25px font-semibold font-mono pe-20 mb-5 md:mb-7'>{title}</h2>
                            <p className='font-mono lg:text-30px md:text-25px text-xl mb-5 md:leading-9'>{smallDescription}</p>
                            <div className="flex flex-wrap gap-4">

                                <button className="font-mono text-base px-21px h-10 text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white hover:border-white border border-color-1 ">{callButtonName}</button>
                                <button className="font-mono text-base px-21px h-10 bg-white text-color-1 rounded-full  hover:bg-color-1 hover:text-white hover:border-black border border-color-1 ">{resultsButtonName}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services_Banner