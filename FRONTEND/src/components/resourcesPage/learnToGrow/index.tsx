import React from 'react'
import classes from './learnToGrow.module.css'
import how_to_grow from '../../../assets/images/how_to_grow.png'
import down_arrow from '../../../assets/images/grow_down.png'
import Image from 'next/image'
import Logo_moving from '@/common/Logo_moving'
import Climate_action from '@/common/Climate_action'
import Growth_engine from '@/common/Growth_engine'
import { urlFor } from '../../../../lib/sanity.client'
function LearnToGrow({data}:any) {
   
    return (
        <>
            <div className={`${classes.SingleIntro}  main_container  h-100  rounded-30px`}>
                <div className={`${classes.single_container} max-w-[1335px] mx-auto  pt-[88px] md:pb-[564px] pb-[400px] relative`}>
                    <div className={`${classes.grow_img}  absolute max-w-[200px] md:max-w-[300px]`}>
                        <Image src={urlFor(data.hero.image).url()} alt="img" width={400} height={400}/>
                    </div>
                    <div className="text-white font-mono text-center max-w-[1172px] mx-auto p-6 md:p-10 ">
                        <h2 className='text-40px md:text-45px font-semibold'>{data.hero.title}</h2>
                        <p className='text-25px md:text-30px  text-md py-[40px]'>{data.hero.description}</p>
                    </div>
                    <div className="">
                        <Image src={urlFor(data.hero.icon).url()} alt="img" width={70} height={70} className='mx-auto' />
                    </div>
                </div>
            </div>
            <div className="max-w-[1335px] mx-auto -mt-[350px] md:-mt-[279px]">
                <h2 className='font-mono font-semibold text-40px md:text-45px text-white mx-auto text-center'>Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1355px] px-5 font-mono mx-auto mt-[80px]">
                    {data.tool.map((item:any, index:number)=>{
                        return(
                            <Growth_engine props={item} has_image={false} shadow_right={index % 2 === 0} />

                        )
                    })}

                </div>
            </div>
            <Logo_moving data={data.brandList.map((a:any)=>a.icon)}/>
        </>
    )
}

export default LearnToGrow
