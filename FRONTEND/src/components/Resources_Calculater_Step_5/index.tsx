import ProgressBar from '@/common/ProgressBar';
import { useState } from 'react'
import { GoArrowLeft } from "react-icons/go";
import { useRouter } from 'next/router';
import classes from "../Resources_Calculater_Step_1/Resources_Calculater.module.css"

function Resources_Calculater_Step_5({ setStep, setFormData, sendDataToGoogleSheets, downloadUrls, progressValue, priviousProgressValue }: any) {
    const [userEmail, setUserEmail] = useState("");
    const router = useRouter()

    const handleEmailChange = (e: any) => {
        setUserEmail(e.target.value);
    }

        const [selected, setSelected] = useState<string | null>(null);
    
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const { id } = event.target;
            setSelected(selected === id ? null : id);
        };


    // const handleNextClick = () => {
    //     if (userEmail === "") {
    //         return;
    //     } else {
    //         setFormData((prevFormData: any) => ({
    //             ...prevFormData,
    //             userEmail: userEmail
    //         }));
    //         sendDataToGoogleSheets();

    //         // Save form submission state to sessionStorage and cookies
    //         sessionStorage.setItem('formSubmitted', 'true');
    //         document.cookie = "formSubmitted=true; path=/";

    //         const downloadUrl = downloadUrls[0];
    //         if (downloadUrl) {
    //             fetch(downloadUrl)
    //                 .then(response => response.blob())
    //                 .then(blob => {
    //                     const link = document.createElement('a');
    //                     const url = URL.createObjectURL(blob);
    //                     link.href = url;
    //                     link.setAttribute('download', 'filename.ext'); 
    //                     document.body.appendChild(link);
    //                     link.click();
    //                     document.body.removeChild(link);
    //                     URL.revokeObjectURL(url);

    //                     setTimeout(() => {
    //                         router.replace("/thanks_you");
    //                     }, 100);
    //                 })
    //                 .catch(error => console.error('Error downloading file:', error));
    //         } else {
    //             router.replace("/thanks_you");
    //         }
    //     }
    // }


    const handleNextClick = () => {
        if (userEmail === "") {
            return;
        } else {
            setFormData((prevFormData: any) => ({
                ...prevFormData,
                userEmail: userEmail
            }));
            sendDataToGoogleSheets();
    
            // Save form submission state to sessionStorage and cookies
            sessionStorage.setItem('formSubmitted', 'true');
            document.cookie = "formSubmitted=true; path=/";
    
            const downloadUrl = downloadUrls[0];
            
            if (downloadUrl) {
                // Extract the original file name from the URL
                const fileName = downloadUrl.split('/').pop();
    
                // Check if the browser is on a mobile device
                const isMobile = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    
                if (isMobile) {
                    // Mobile specific download handling
                    fetch(downloadUrl)
                        .then(response => response.blob())
                        .then(blob => {
                            const link = document.createElement('a');
                            const url = URL.createObjectURL(blob);
                            link.href = url;
                            link.setAttribute('download', fileName); 
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            URL.revokeObjectURL(url);
    
                            setTimeout(() => {
                                router.replace("/thanks_you");
                            }, 800);
                        })
                        .catch(error => console.error('Error downloading file:', error));
                } else {
                    // Desktop specific download handling
                    const link = document.createElement('a');
                    link.href = downloadUrl;
                    link.setAttribute('download', fileName);
                    
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
    
                    setTimeout(() => {
                        router.replace("/thanks_you");
                    }, 800);
                }
            } else {
                router.replace("/thanks_you");
            }
        }
    }
    
    



    return <div className={`${classes.Resources_Calculater_Step_5} Resources_Calculater_Step_5`}>
        <div className="pe-[6px] pb-[6px]">
            <div className="Resources_Calculater_Step_5 popup_conatiner md:pt-[29px] sm:pt-[20px] pt-[12px] lg:pb-[66px] md:pb-[55px] sm:pb-[40px] pb-[25px] xl:px-[50px] lg:px-[40px] md:px-[30px] sm:px-[20px] px-[10px] relative bg-white">
                <div className="progrees_bar xl:mb-[123px] lg:mb-[100px] md:mb-[80px] sm:mb-[70px] mb-[60px] ">
                    <ProgressBar value={progressValue} from={priviousProgressValue}/>
                </div>
                <h2 className="font-mono font-semibold xl:text-45px lg:text-40px md:text-35px sm:text-[28px] text-[20px] text-center xl:mb-[33px] lg:mb-[28px] md:mb-[20px] sm:mb-[15px] mb-[10px]">Enter your e-mail address</h2>
                <div className="email mx-auto w-full xl:max-w-[680px] lg:max-w-[623px] md:max-w-[563px] sm:max-w-[488px] max-w-[362px] sm:px-10">
                    <input value={userEmail} onChange={handleEmailChange} type="email" name="user_email" id="" className='xl:mb-[60px] lg:mb-[40px] md:mb-[30px] mb-[20px] border font-lato border-color-9 rounded-[10px] md:rounded-[20px] md:px-[26px] sm:px-[15px] px-[10px] md:py-[20px] sm:py-[15px] py-[10px] text-base md:text-lg w-full' placeholder='johndoe@gmail.com' />
                    <div className="md:mb-[110px] sm:mb-[80px] mb-[60px]">
                        <p className="text-[15px] sm:text-base font-mono font-semibold md:mb-[10px] mb-[7px]">Communication preferences</p>
                        <div className="">
                            <input type="checkbox" name="confirm" id="confirm1" checked={selected === 'confirm1'} onChange={handleChange}/>
                            <label htmlFor="confirm1" className='ml-[8px] font-lato sm:text-lg text-base font-normal'>Yes, please send me more tools and exclusive bonuses</label>
                        </div>
                        <div className="">
                            <input type="checkbox" name="confirm" id="confirm2" checked={selected === 'confirm2'} onChange={handleChange} />
                            <label htmlFor="confirm2" className='ml-[8px] font-lato sm:text-lg text-base font-normal'>No thanks, I’d rather not receive anything at all</label>
                        </div>
                    </div>
                </div>
                <div className="button text-center mb-[27px]">
                    <button className={`${classes.calculator_btn} bg-color-1 font-mono text-base md:px-[40px] sm:px-[30px] px-[25px] md:py-[10px] py-[5px] border border-color-1 text-white rounded-full active:bg-white active:text-color-1`} onClick={handleNextClick}>Reveal my report</button>
                </div>
                <div className="max-w-max mx-auto w-max">
                    <button className="border-b border-color-6 font-light w-max text-md lg:text-lg flex items-center gap-1" type='button' onClick={() => setStep(4)}><GoArrowLeft /> Back </button>
                </div>
            </div>
        </div>
    </div>

}

export default Resources_Calculater_Step_5;
