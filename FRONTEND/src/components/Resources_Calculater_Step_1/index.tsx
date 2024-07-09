import Image from 'next/image'
import Traffic_conversion_icon from '../../assets/images/Traffic_conversion_icon_svg.svg'
import classes from './Resources_Calculater.module.css'
import { GoArrowLeft } from "react-icons/go";
import ProgressBar from '@/common/ProgressBar';

function Resources_Calculater_Step_1({ setStep }: any) {
    

    return <div className="Resources_Calculater_Step_1 mt-[0px]">
        <div className="pe-[6px] pb-[6px]">
            <div className="Resources_Calculater_Step_1 popup_conatiner md:pt-[29px] sm:pt-[20px] pt-[12px] lg:pb-[66px] md:pb-[55px] sm:pb-[40px] pb-[25px] xl:px-[50px] lg:px-[40px] md:px-[30px] sm:px-[20px] px-[10px] relative bg-white">
                <div className="progrees_bar xl:mb-[80px] lg:mb-[60px] md:mb-[40px] mb-[30px] ">
        
                    <ProgressBar value={20} /> 
                   
                </div>
                <div className="trafic_image ">
                    <Image src={Traffic_conversion_icon} alt='' className='mx-auto md:max-w-[206px] md:max-h-[207px] sm:max-w-[150px] sm:max-h-[150px] max-w-[100px] max-h-[100px]'  />
                </div>
                <div className={`${classes.step_1_text} text-center xl:mt-[38px] lg:mt-[28px] md:mt-[18px] sm:mt-[15px] mt-[15px] max-w-[1280px] mx-auto`}>
                    <h2 className='font-mono xl:text-45px lg:text-40px md:text-35px sm:text-25px text-[20px] font-semibold'>Set Your Traffic & Conversion Goals</h2>
                    <p className="font-mono lg:text-30px  md:text-[25px] sm:text-[20px] text-[18px] font-normal text-center px-10 xl:mb-[60px] lg:mb-[55px] md:mb-[50px] mb-[45px] xl:mt-[53px] lg:mt-[40px] md:mt-[30px] mt-[20px]">Use our Growth Calculator to forecast how many visitors and what conversion rate you need to achieve, to hit your revenue goals.</p>
                </div>
                <div className="button text-center xl:mb-[27px] lg:mb-[20px] md:mb-[15px]   mb-[10px]">
                    <button className={`${classes.calculator_btn} bg-color-1 font-mono text-base md:px-[40px] sm:px-[30px] px-[25px] md:py-[10px] py-[5px] border border-color-1 text-white rounded-full active:bg-white active:text-color-1`} type="button" onClick={() => setStep(2)}>Start</button>
                </div>
                <div className=" max-w-max mx-auto w-max ">
                    <button className="border-b border-color-6  font-light w-max text-md lg:text-lg flex items-center gap-1" type="button" onClick={() => setStep(0)}><GoArrowLeft /> Back to zestdigital.com</button>
                </div>
            </div>
        </div>
    </div>

}

export default Resources_Calculater_Step_1