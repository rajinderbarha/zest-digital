import React from 'react'
import classes from './Services_Quotes.module.css'
import { ServiceQuote, SingleOurService } from '../../../../lib/interface'


interface Services_Quotes{
    Services_Quotes: ServiceQuote[];
}


const Services_Quotes : React.FC<Services_Quotes> = ({ Services_Quotes }) => {
console.log(Services_Quotes);


    return (
        <>
            <div className={`${classes.Instrumental} mt-[125px]`}>
                <div className='main_container'>
                {Services_Quotes&& Services_Quotes.map(({desc_quote,name_quote},index)=>(


                    <div className="" key={index}>
                        {(index%2==0) ? 
                      
                       <div className=" md:mt-0 mt-10">
                            <h2 className={`${classes.Interests_h2} font-mono font-semibold md:text-45px text-25px mb-5 max-w-[1347px] `}>{desc_quote}</h2>
                            <p className='text-color-9 pt-2 border-t text-25px md:text-30px font-mono  border-color-9'>{name_quote}</p>
                        </div>
                        :
                            <div className="text-right md:mt-[120px] mt-10  max-w-[1347px] ms-auto ">
                                <h2 className={`${classes.Interests_h2} font-mono font-semibold md:text-45px text-25px mb-5`}>{desc_quote}</h2>
                                <p className='ms-auto text-color-9 pt-2 border-t text-25px md:text-30px  font-mono  border-color-9'>{name_quote}</p>
                        </div>
                            }
                    </div>

                    
                        ))}
                </div>
            </div>
        </>
    )
}

export default Services_Quotes