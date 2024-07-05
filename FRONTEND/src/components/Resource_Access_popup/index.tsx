import classes from './Resource_Access_popup.module.css'
import style from '../Resources_Calculater_Step_1/Resources_Calculater.module.css'
import popup_close_icon from '../../assets/images/popup_close_icon.png'
import Image from 'next/image'
import Link from 'next/link'

function Resource_Access_popup({ setStep, register, handleSubmit, setFormData, formTitle }: any) {

    return <form onSubmit={handleSubmit((data: any) => {
        if (!data.firstName || !data.lastName || !data.email) {
            return;
        }
        setFormData(data)
        setStep(1)
    })}>

        <div className="Resource_Access_popup ">
            <div className="px-[6px] pb-[6px]">
                <div className="Resource_Access_popup popup_conatiner lg:pt-[88px] md:pt-[60px] sm:pt-[50px] pt-[40px]  relative bg-white" >
                    <div className="absolute lg:right-[25px] lg:top-[40px]  md:right-[28px] md:top-[28px] sm:right-[20px] sm:top-[20px] top-[20px] right-[20px] md:max-w-max max-w-[20px]">
                        <Link href='/resources'>
                            <Image src={popup_close_icon} alt='' className='lg:max-w-[20px] md:max-w-[15px] sm:max-w-[17px] max-w-[10px] '  loading="eager"/>
                        </Link>

                    </div>
                    <div className="detail text-center">
                        <h2 className='xl:text-45px lg:text-40px md:text-[35px] sm:text-[25px] text-[20px] font-mono font-semibold mb-[10px]'>{formTitle}</h2>
                    </div>
                    <div className={`${classes.form_inputs} max-w-[1040px] mx-auto lg:mt-[52px] md:mt-[40px] sm:mt-[30px] mt-[20px] flex justify-between px-5`}>
                        <div className="first_name flex flex-col w-full max-w-[300px]">
                            <label htmlFor="fname" className='text-color-9 text-[15px] sm:text-base font-semibold font-mono mb-[2px] sm:mb-[5px] md:mb-[8px] lg:mb-[11px]'>First name</label>
                            <input type="text" name="fname" id="" className='border border-color-9 lg:py-[14px] md:py-[8px] py-[5px] lg:px-[22px] md:px-[15px] text-base lg:text-lg px-[10px] rounded-[5px] lg:rounded-[10px]' placeholder='John' {...register("firstName")} />
                        </div>
                        <div className="last_name flex flex-col w-full max-w-[300px]">
                            <label htmlFor="lname" className='text-color-9 text-base font-semibold font-mono mb-[4px] sm:mb-[2px] md:mb-[8px] lg:mb-[11px]'>Last name</label>
                            <input type="text" name="lname" id="" className='border border-color-9 lg:py-[14px] md:py-[8px] py-[5px] lg:px-[22px] md:px-[15px] text-base lg:text-lg px-[10px] rounded-[5px] lg:rounded-[10px]' placeholder='Doe'{...register("lastName")} />
                        </div>
                        <div className="email flex flex-col w-full max-w-[300px]">
                            <label htmlFor="email" className='text-color-9 text-base font-semibold font-mono mb-[4px] sm:mb-[2px] md:mb-[8px] lg:mb-[11px]'>E-mail</label>
                            <input type="email" name="email" id="" className='border border-color-9 lg:py-[14px] md:py-[8px] py-[5px] lg:px-[22px] md:px-[15px] text-base lg:text-lg px-[10px] rounded-[5px] lg:rounded-[10px]' placeholder='johndoe@gmail.com' {...register("email")} />
                        </div>
                    </div>
                    <div className="button lg:mt-[40px] md:mt-[30px] sm:mt-[20px] mt-[10px] text-center lg:mb-[108px] mb:mb-[80px] sm:mb-[50px] mb-[30px]">
                        <button className={`${style.calculator_btn} bg-color-1 active:bg-white active:text-color-1 border border-color-1 font-mono text-base md:px-[40px] sm:px-[30px] px-[25px] md:py-[10px] py-[5px] text-white rounded-full`} type='submit'>Get access</button>
                    </div>
                    <div className="term_condition max-w-[857px] mt-[40px] mx-auto mb-[30px]">
                        <p className='font-lato text-base text-color-1 text-center'>*required fields</p>
                    </div>
                </div>
            </div>
        </div>
    </form>
}

export default Resource_Access_popup