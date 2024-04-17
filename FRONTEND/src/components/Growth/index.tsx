import React from 'react'
import Image from 'next/image'
import arrow from '../../assets/images/arrow.svg'
import Growth_engine from '@/common/Growth_engine'
import classes from './growth.module.css'
import { urlFor } from '../../../lib/sanity.client'
const Growth = ({card}:any) => {
    const{heading,horizontalbars} = card;
// console.log("TransformResults===============",card)

let outerSpan: string ;
let innerSpan: string;
    return (
        <>
            <div className="text-white mx-auto max-w-[1720px] w-full px-5 my-10">
                <div className={`${classes.growth_result} bg-black rounded-30px font-mono pt-[88px] pb-96`}>

                    <div className="flex gap-4 items-center mx-auto md:w-max w-full font-semibold text-center max-w-[500px]  md:max-w-none flex-col md:flex-row">
                        <h2 className='min-1350:text-45px md:text-4xl md:max-970:text-[29px] sm:text-2xl text-xl'>{heading}</h2>
                        <div className=" ">
                            {/* <h2 className='min-1350:text-40px md:text-3xl text-color-4'>mapper</h2> */}
                            {card.switcher.map((item:any,index:any)=>(
                                    
                            <h2 key={index} className='min-1350:text-45px md:text-4xl md:max-970:text-[29px] sm:text-2xl text-xl text-color-3'>{item}</h2>
                            ))}
                            {/* <h2 className='min-1350:text-40px md:text-3xl text-color-4'>tracker</h2> */}
                        </div>
                    </div>


                        {horizontalbars.map(({numHeading,desc,title}:any,index:any)=>{
                                if(index == 0 ){
                                    outerSpan = "md:col-span-6 ";
                                    innerSpan = "md:col-span-6"
                                }
                                else if(index == 1){
                                    outerSpan = "md:col-span-7 ";
                                    innerSpan = "md:col-span-5"  
                                }
                                else if(index == 2){
                                    outerSpan = "md:col-span-8 ";
                                    innerSpan = "md:col-span-4"  
                                }
                         return(  <div key={index} className="grid gap-10 pe-5 py-28">
                        <div className="grid md:grid-cols-12 gap-6">
                            <div className={`${outerSpan} p-5 bg-white flex justify-between items-center text-color-1 min-1350:p-12 md:pe-6 rounded-r-[30px] max-970:rounded-r-[20px]`}>
                                <div className="font-semibold md:ps-16 sm:ps-5 ps-0 min-1350:text-35px md:text-[25px] max-970:text-[18px] md:max-800:text-[17px]">{numHeading}</div>
                                <div className="min-1350:w-auto md:w-10 max-970:w-9"><Image src={arrow} alt="" /></div>
                            </div>
                            <div className={`${innerSpan} md:max-w-[442px] self-center md:self-center md:justify-self-start sm:justify-self-end sm:max-w-[550px] md:text-start text-end`}>
                                <h3 className='text-[30px] md:max-970:text-[23px] sm:text-[35px]'>{title}</h3>
                                <p className='text-base sm:text-lg md:max-970:text-[14px] md:max-970:leading-4 leading-5'>{desc}</p>
                            </div>
                        </div>

                        {/* <div className="grid md:grid-cols-12 gap-6">
                            <div className="md:col-span-7 p-5 bg-white flex justify-between items-center text-color-1 min-1350:p-12 md:pe-6 rounded-r-[30px] max-970:rounded-r-[20px]">
                                <div className="font-semibold md:ps-16 sm:ps-5 ps-0 min-1350:text-35px md:text-[25px] max-970:text-[18px] md:max-800:text-[17px]">+ £20m new revenue</div>
                                <div className="min-1350:w-auto md:w-10 max-970:w-9"><Image src={arrow} alt="" /></div>
                            </div>
                            <div className="md:col-span-5 md:max-w-[442px] self-center md:self-center md:justify-self-start sm:justify-self-end sm:max-w-[550px] md:text-start text-end">
                                <h3 className='text-[30px] md:max-970:text-[23px] sm:text-[35px]'>Adlens</h3>
                                <p className='text-base sm:text-lg md:max-970:text-[14px] md:max-970:leading-4 leading-5'>Finding the formula for exceptional revenue growth at scale, for an international eyewear retailer.</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-12 gap-6">
                            <div className="md:col-span-8 p-5 bg-white flex justify-between items-center text-color-1 min-1350:p-12 md:pe-6 rounded-r-[30px] max-970:rounded-r-[20px]">
                                <div className="font-semibold md:ps-16 sm:ps-5 ps-0 min-1350:text-35px md:text-[25px] max-970:text-[18px] md:max-800:text-[17px]">+ 772% gross profit</div>
                                <div className="min-1350:w-auto md:w-10 max-970:w-9"><Image src={arrow} alt="" /></div>
                            </div>
                            <div className="md:col-span-4 md:max-w-[442px] self-center md:self-center md:justify-self-start sm:justify-self-end sm:max-w-[550px] md:text-start text-end">
                                <h3 className='text-[30px] md:max-970:text-[23px] sm:text-[35px]'>Hanson UK</h3>
                                <p className='text-base sm:text-lg md:max-970:text-[14px] md:max-970:leading-4 leading-5'>Best SEO Campaign finalist at the UK Digital Growth Awards, for this large supplier</p>
                            </div>
                        </div>    */}
                    </div>
                    )
})}
                    
                </div>

{/* 
                <div className={`${classes.growth_engine_box} mx-auto max-w-[1720px] w-full px-20 my-10 font-mono grid gap-10 -mt-64 relative`}>
                     <Growth_engine title="Growth Engine" has_image={false} shadow_right={false} btn_title="All inclusive growth marketing" desc="The fastest and most complete way to generate new leads and sales to grow your business. All-inclusive growth marketing covering; PPC, SEO, content, and more." /> 
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1345px] mx-auto ">
                         <Growth_engine title="Growth Curve" has_image={false} shadow_right={true} btn_title="On-demand growth marketing" desc="Scalable on-demand growth marketing support across SEO, PPC, content, and more." /> 
                        <Growth_engine title="Growth Mapper" has_image={false} shadow_right={false} btn_title="On-demand growth marketing" desc="Plan for your growth using our unique framework, available as a standalone online course or a facilitated expert workshop." /> 
                    </div>
                     <Growth_engine title="Growth Tracker" has_image={true} shadow_right={true} btn_title="Track my growth experiments" desc="The fastest and most complete way to generate new leads and sales to grow your business. All-inclusive growth marketing covering; PPC, SEO, content, and more." />

                     <div className="absolute -bottom-40 right-0 w-max-[524px]">
                        <Image src={grow} alt="" />
                    </div> 
                </div> */}





<div
        className={`max-w-[1345px] font-mono  mx-auto grid gap-10 -mt-64 px-10`}
      >
        <Growth_engine
          has_image={false}
          shadow_right={false}
          props={{
            title: card.growthcard[0].card.heading,
            description: card.growthcard[0].card.description,
            buttonName:card.growthcard[0].card.buttonName,
            // buttonLink: `/solutions/${card[0].slug.current}`,
            buttonLink: `/solutions/${card.growthcard[0].slug}`,
            image: urlFor(card.growthcard[0].card.image).url(),
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1345px] mx-auto ">
          <Growth_engine
            has_image={false}
            shadow_right={true}
            props={{
                title: card.growthcard[1].card.heading,
                description: card.growthcard[1].card.description,
                buttonName:card.growthcard[1].card.buttonName,
                // buttonLink: `/solutions/${card[0].slug.current}`,
                buttonLink: `/solutions/${card.growthcard[1].slug}`,
                image: urlFor(card.growthcard[1].card.image).url(),
              }}
          />

          <Growth_engine
            has_image={false}
            shadow_right={false}
            props={{
                title: card.growthcard[2].card.heading,
                description: card.growthcard[2].card.description,
                buttonName:card.growthcard[2].card.buttonName,
                // buttonLink: `/solutions/${card[0].slug.current}`,
                buttonLink: `/solutions/${card.growthcard[2].slug}`,
                image: urlFor(card.growthcard[2].card.image).url(),
              }}
          />
        </div>

        <Growth_engine
          has_image={true}
          shadow_right={false}
          props={{
            title: card.growthcard[3].card.heading,
            description: card.growthcard[3].card.description,
            buttonName:card.growthcard[3].card.buttonName,
            // buttonLink: `/solutions/${card[0].slug.current}`,
            buttonLink: `/solutions/${card.growthcard[3].slug}`,
            image: urlFor(card.growthcard[3].card.image).url(),
          }}
        />
        {card.length > 4 && card.slice(3).map((item: any, index: number) => {
          return (
            <div key={index}>
              <Growth_engine
                has_image={true}
                shadow_right={false}
                props={{
                  title: item.card.heading,
                  description: item.card.description,
                  buttonName: item.card.buttonName,
                  buttonLink: `/solutions/${item.slug.current}`,
                // buttonLink: `/solutions/${card.growthcard[0].slug}`,         // added by ss
                  image: urlFor(item.card.image).url(),
                }}
              />
            </div>
          );
        })}
      </div>




                
            </div>
        </>
    )
}


export default Growth