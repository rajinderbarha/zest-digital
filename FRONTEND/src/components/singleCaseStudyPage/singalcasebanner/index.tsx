import React from 'react'
import classes from './Singalcasebanner.module.css'
import { SingalcasebannerProps } from '../../../../lib/interface'


function Singalcasebanner({ data }: SingalcasebannerProps) {
    const { title, upperTitle } = data
    return (
        <>
            <div className={`${classes.Singalcasebanner}`}>
                <div className='main_container'>
                    <div className="grid md:grid-cols-12 ">
                        <div className="md:col-span-6">
                            <h2 className='md:text-45px text-30px font-mono bg-color-7 w-max px-2' >{upperTitle}</h2>
                            <h1 className='font-mono font-semibold md:text-55px text-35px mb-5 '>{title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Singalcasebanner