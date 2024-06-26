import Image from 'next/image'
import React, { useState } from 'react'
import classes from "./Resources_Calculater_Step_4.module.css"
import popup_person from '../../assets/images/popup_person.svg'
import popup_percentage from '../../assets/images/percent.svg'
import popup_pound from '../../assets/images/pound-circle.svg'
import popup_question_mark from '../../assets/images/popup_question_mark.svg'
// import popup_percantage from '../../assets/images/popup_percantage.svg'
// import popup_euro from '../../assets/images/popup_euro.svg'
import { GoArrowLeft } from "react-icons/go";
import ProgressBar from '@/common/ProgressBar'
function Resources_Calculater_Step_4({ setStep, formData, setFormData }: any) {

    const [inputValues, setInputValues] = useState({
        average_monthly_sessions: '',
        average_conversion_rate: '',
        average_order_value: '',
        conversion_rate: ''
    });
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInputValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleNextButtonClick = () => {
        if (
            inputValues.average_monthly_sessions.trim() === '' ||
            inputValues.average_conversion_rate.trim() === '' ||
            inputValues.average_order_value.trim() === ''
        ) {

            return;
        }

        setFormData((prevFormData: any) => ({
            ...prevFormData,
            averageMonthlySessions: inputValues.average_monthly_sessions,
            averageConversionRate: inputValues.average_conversion_rate,
            averageOrderValue: inputValues.average_order_value,
            coversionRate: inputValues.conversion_rate,
        }))
        setStep(5)
    }

    const [MonthlySessionsIsHovered, setMonthlySessionsIsHovered] = useState(false);
    const [ConversionRateIsHovered, setConversionRateIsHovered] = useState(false);
    const [OrderValueIsHovered, setOrderValueIsHovered] = useState(false);
    const [LeadToSaleIsHovered, setLeadToSaleIsHovered] = useState(false);

    return (
        <>

            <div className="Resources_Calculater_Step_4">
                <div className="pe-[6px] pb-[6px]">
                    <div className="Resources_Calculater_Step_4 popup_conatiner md:pt-[29px] sm:pt-[20px] pt-[12px] lg:pb-[66px] md:pb-[55px] sm:pb-[40px] pb-[25px] xl:px-[50px] lg:px-[40px] md:px-[30px] sm:px-[20px] px-[10px] relative bg-white">
                        <div className="progrees_bar xl:mb-[140px] lg:mb-[110px] md:mb-[80px] sm:mb-[70px] mb-[60px] ">
                            <ProgressBar value={80} />
                        </div>
                        <h2 className="text-center font-mono xl:text-45px lg:text-40px md:text-[35px] sm:text-[25px] text-[20px] font-semibold md:mb-[30px] sm:mb-[30px] mb-[10px]">Input your data (use the ‘?’ for help)</h2>
                        <div className="form_details max-w-[750px] mx-auto md:justify-end justify-center grid gap-5 md:pb-[97px] sm:pb-[60px] pb-[30px] relative w-fit">
                            <div className="flex relative  md:justify-self-end   max-w-max ">
                                <div className="md:flex md:flex-row  max-w-max  items-center gap-x-[10px] ">
                                    <label htmlFor="average_monthly_sessions" className='font-mono font-semibold sm:text-base md:text-[18px] text-color-1 text-end'>Average monthly sessions:</label>
                                    <div className="flex items-center gap-2 relative">

                                        <input onChange={handleChange} value={inputValues.average_monthly_sessions} type="number" name="average_monthly_sessions" id="monthly_sessions" placeholder='1000' className='lg:py-[14px] md:py-[8px] py-[5px] lg:px-[22px] md:px-[15px] text-base lg:text-lg px-[10px] rounded-[5px] lg:rounded-[10px] lg:w-[300px] md:w-[210px]  border border-color-9' />

                                        <div className="">
                                            <Image src={popup_person} alt='' className='lg:w-[39px] md:w-[30px] sm:w-[22px] w-[22px]' />
                                        </div>
                                        <div className="lg:ml-2 ml-[5px] relative lg:-top-[33px] lg:-left-[9px] md:-top-[24px] md:-left-[10px] -top-[20px] -left-[11px] w-max hover:cursor-pointer" onMouseEnter={() => setMonthlySessionsIsHovered(true)} onMouseLeave={() => setMonthlySessionsIsHovered(false)}>
                                            <Image src={popup_question_mark} alt='' className='lg:max-w-[30px] md:max-w-[22px] sm:max-w-[18px] max-w-[18px] w-full md:mt-0 mt-[100%] ' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {MonthlySessionsIsHovered && (
                            <div className={`${classes.hover_box}`}>
                                <ul className=''>
                                    <li>Log into Google Analytics</li>
                                    <li>Select Audience &gt; Overview</li>
                                    <li>Select a date range of 6-12 months</li>
                                    <li>Divide total sessions by the # of months</li>
                                    <li>Enter the result into the calculator</li>
                                </ul>
                            </div>
                            )}
                            <div className="flex  relative md:justify-self-end  max-w-max">
                                <div className="md:flex md:flex-row  max-w-max  items-center gap-x-[10px]">
                                    <label htmlFor="average_conversion_rate" className='font-mono font-semibold  sm:text-base md:text-[18px] text-color-1 text-end'>Average conversion rate:</label>
                                    <div className="flex items-center gap-2 relative">

                                        <input onChange={handleChange} value={inputValues.average_conversion_rate} type="number" name="average_conversion_rate" id="average_conversion_rate" placeholder='3' className='lg:py-[14px] md:py-[8px] py-[5px] lg:px-[22px] md:px-[15px] text-base lg:text-lg px-[10px] rounded-[5px] lg:rounded-[10px] lg:w-[300px] md:w-[210px]  border border-color-9' />

                                        <div className="">
                                            <Image src={popup_percentage} alt='' className='lg:w-[39px] md:w-[30px] sm:w-[22px] w-[22px]' />
                                        </div>
                                        <div className="lg:ml-2 ml-[5px] relative lg:-top-[33px] lg:-left-[9px] md:-top-[24px] md:-left-[10px] -top-[20px] -left-[11px] w-max  hover:cursor-pointer" onMouseEnter={() => setConversionRateIsHovered(true)} onMouseLeave={() => setConversionRateIsHovered(false)}>
                                            <Image src={popup_question_mark} alt='' className='lg:max-w-[30px] md:max-w-[22px] sm:max-w-[18px] max-w-[18px] w-full md:mt-0 mt-[100%]' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {ConversionRateIsHovered && (
                            <div className={`${classes.hover_box}`}>
                                <ul className=''>
                                    <li>Log into Google Analytics</li>
                                    <li>Select Conversion &gt; Goals &gt; Overview OR Conversion &gt; Goals &gt; Ecommerce (if ecommerce)</li>
                                    <li>Select a date range of 6-12 months</li>
                                    <li>Enter the 'Goal Conversion Rate' % into the calculator OR</li>
                                    <li>Enter the 'Ecommerce Conversion Rate' % into the calculator</li>
                                </ul>
                            </div>
                            )}
                            <div className="flex  relative  md:justify-self-end   max-w-max">
                                <div className="md:flex md:flex-row  max-w-max  items-center gap-x-[10px]">
                                    <label htmlFor="average_order_value" className='font-mono font-semibold  sm:text-base md:text-[18px] text-color-1 text-end'>Average order value:</label>
                                    <div className="flex items-center gap-2 relative">

                                        <input onChange={handleChange} value={inputValues.average_order_value} type="number" name="average_order_value" id="average_order_value" placeholder='5000' className='lg:py-[14px] md:py-[8px] py-[5px] lg:px-[22px] md:px-[15px] text-base lg:text-lg px-[10px] rounded-[5px] lg:rounded-[10px] lg:w-[300px] md:w-[210px]  border border-color-9' />

                                        <div className="">
                                            <Image src={popup_pound} alt='' className='lg:w-[39px] md:w-[30px] sm:w-[22px] w-[22px]' />
                                        </div>
                                        <div className="lg:ml-2 ml-[5px] relative lg:-top-[33px] lg:-left-[9px] md:-top-[24px] md:-left-[10px] -top-[20px] -left-[11px] w-max hover:cursor-pointer" onMouseEnter={() => setOrderValueIsHovered(true)} onMouseLeave={() => setOrderValueIsHovered(false)} >
                                            <Image src={popup_question_mark} alt='' className='lg:max-w-[30px] md:max-w-[22px] sm:max-w-[18px] max-w-[18px] w-full md:mt-0 mt-[100%]' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {OrderValueIsHovered && (
                            <div className={`${classes.hover_box}`}>
                                <ul className=''>
                                    <li>Select a date range of 6-12 months</li>
                                    <li>Take your total revenue</li>
                                    <li>Divide this by total number of sale made</li>
                                    <li>Enter the result into the calculator</li>
                                </ul>
                            </div>
                            )}
                            {formData.businessType === 'lead generation' &&
                            <>
                                <div className="flex relative md:justify-self-end max-w-max">
                                    <div className="md:flex md:flex-row  max-w-max  items-center gap-x-[10px]">
                                        <label htmlFor="conversion_rate" className='font-mono font-semibold  sm:text-base md:text-[18px] text-color-1 text-end'>Conversion rate (lead to sale):</label>
                                        <div className="flex items-center gap-2 relative">

                                            <input onChange={handleChange} value={inputValues.conversion_rate} type="number" name="conversion_rate" id="conversion_rate" placeholder='40' className='lg:py-[14px] md:py-[8px] py-[5px] lg:px-[22px] md:px-[15px] text-base lg:text-lg px-[10px] rounded-[5px] lg:rounded-[10px] lg:w-[300px] md:w-[210px]  border border-color-9' />

                                            <div className="">
                                                <Image src={popup_percentage} alt='' className='lg:w-[39px] md:w-[30px] sm:w-[22px] w-[22px]' />
                                            </div>
                                            <div className="lg:ml-2 ml-[5px] relative lg:-top-[33px] lg:-left-[9px] md:-top-[24px] md:-left-[10px] -top-[20px] -left-[11px] w-max  hover:cursor-pointer" onMouseEnter={() => setLeadToSaleIsHovered(true)} onMouseLeave={() => setLeadToSaleIsHovered(false)}  >
                                                <Image src={popup_question_mark} alt='' className='lg:max-w-[30px] md:max-w-[22px] sm:max-w-[18px] max-w-[18px] w-full md:mt-0 mt-[100%]' />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                 {LeadToSaleIsHovered && (
                                     <div className={`${classes.hover_box} ${classes.lead_to_sale} `}>
                                         <ul className=''>
                                             <li>How many leads do you reqiure in order to close one sale? Enter the percentage into the calculator</li>
                                             {/* <li></li> */}
                                         </ul>
                                     </div>
                                     )}
                                </>
                            }

                        </div>
                        <div className="button text-center mb-[27px]">
                            <button className='bg-color-1 font-mono text-base md:px-[40px] sm:px-[30px] px-[25px] md:py-[10px] py-[5px] text-white rounded-full' type='button' onClick={handleNextButtonClick}>Next</button>
                        </div>
                        <div className=" max-w-max mx-auto w-max ">
                            <button className="border-b border-color-6  font-light w-max text-md lg:text-lg flex items-center gap-1" type='button' onClick={() => setStep(3)}><GoArrowLeft /> Back </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Resources_Calculater_Step_4