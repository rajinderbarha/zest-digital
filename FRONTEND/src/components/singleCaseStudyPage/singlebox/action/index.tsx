import React from 'react'
import Action_img from '../../../../assets/images/action.png'
import classes from '../singlebox.module.css'
import Image from 'next/image'
function action() {
    return (
        <>
            <div className={`${classes.objective} max-w-[1545px] mx-auto px-12`}>

                <div className={`grid md:grid-cols-2 items-center rounded-30px bg-white ${classes.objective_inner} border border-color-1 shadow-compo gap-10`}>
                    <div className="col-span-1">
                        <h2 className='text-30px md:text-35px lg:text-45px text-color-1 font-semibold font-mono '>Action</h2>
                        <div className="font-lato md:text-md  lg:text-lg mt-[20px] md:mt-[20px] lg:mt-[48px] ">
                            <p>Our growth team set to work focusing on core SEO tactics to achieve the client’s objectives. This included link reclamation to boost the number of linking root domains, and a local link building strategy that would form part of a longer-term play due to the scale of the work required. Lastly, we wanted to tidy up and improve the internal linking structure to create more flow to those pages indexed deeper within the website.</p>
                            <p className='mt-1 md:mt-3 lg:mt-5'>Our team identified keywords at the local level for each depot before adding this to a wider content strategy aiming to build relevance and dominance for each locality. As for rankings and search visibility performance, the results are impressive.</p>
                            <p className='mt-1 md:mt-3 lg:mt-5'>We then set to work in partnership with Hanson UK’s internal team pooling together our resources for maximum results.</p>
                            <p className='mt-1 md:mt-3 lg:mt-5'>In addition to this, technical SEO work was carried out to give Hanson UK the best possible opportunity of receiving the desired rankings and visibility.</p>
                        </div>
                    </div>
                    <div className="col-span-1   ">
                        <Image src={Action_img} alt="" className="ms-auto " />
                    </div>

                </div>
            </div>
        </>
    )
}

export default action
