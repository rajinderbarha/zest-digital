import React from 'react'
import classes from './SingleIntro.module.css'
import Objective from '../singlebox/objective'
import Strategy from '../singlebox/strategy';
import Action from '../singlebox/action';
import Result from '../singlebox/result';
import Image from 'next/image';
import { urlFor } from '../../../../lib/sanity.client'
function SingleIntro({ hero, card }: any) {

    
    return (
        <>
            <div className={`${classes.SingleIntro}  main_container  md:mt-40 mt-20 h-100 rounded-30px`}>
                <div className={`${classes.single_container}`}>
                    <div className="hidden md:flex   2xl:px-[259px] xl:px-[210px] lg:px-[180px]  px-[120px] justify-between ">
                        {hero.item.map((item: { icon: any, description: string, count: string }, index: number) => {
                            return (<div className="text-center   max-w-[389px]" key={index}>
                                <div className="2xl:max-w-[250px] xl:max-w-[240px] lg:max-w-[200px]  max-w-[150px]    mx-auto">
                                    <Image src={urlFor(item.icon).url()} alt="growth" width={200} height={200} />
                                </div>
                                <h2 className='2xl:text-45px xl:text-40px lg:text-35px  text-30px text-color-7 font-mono font-semibold'>{item.count}</h2>
                                <p className='2xl:text-30px xl:text-25px lg:text-[20px]  text-[18px] font-mono font-medium text-white xl:leading-9 lg:leading-8  leading-5 mx-auto 2xl:max-w-[319px] xl:max-w-[270px] lg:max-w-[215px]  max-w-[200px]  '>{item.description}</p>
                            </div>)
                        })}


                    </div>
                    <div className="mt-[150px] md:mt-[258px] mx-auto max-w-[1360px] mb-[277px]">
                        <h2 className='font-mono text-25px sm:text-30px md:text-35px leading-10 lg:leading-normal lg:text-40px xl:text-45px text-white mx-auto text-center px-4 sm:px-10 pb-6'>{hero.heading}</h2>
                        <div className="lg:px-52 md:px-28 px-16">
                            <p className='text-base font-mono text-color-9 mx-auto max-w-[1012px] border-t border-color-9 text-center pt-3 '>{hero.belowLine}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="grid gap-10 md:gap-20 -mt-40">
                <Objective card={card}/>
                {/* <Strategy />
                <Action />
                <Result /> */}
            </div>
        </>
    )
}

export default SingleIntro
