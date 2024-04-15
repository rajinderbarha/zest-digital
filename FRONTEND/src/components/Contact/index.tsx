import Image from 'next/image'
import React, { useMemo } from 'react'
import facebook from '../../assets/images/Facebook_Zest_icon_black.png'
import instagram from '../../assets/images/Instagram_Zest_icon_black.png'
import linkedin from '../../assets/images/LinkedIn_Zest_icon_black.png'
import hand_wave_img from '../../assets/images/Hand_wave_icon.png'
import classes from './Contact.module.css'
import MapLocations from './MapLocations'
import { ContactType } from '../../../lib/interface'
import Link from 'next/link'
import { urlFor } from '../../../lib/sanity.client';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

function Contact({ data }: { data:  ContactType }) {
        console.log(data)
        const { isLoaded } = useLoadScript({
            googleMapsApiKey: "AIzaSyC3O15FKo8zBNNFrfmo4WfUMBrrS8cyMeo",
          });
        const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
    return (
        <>

{!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        />
      )}
            <div className="Contact mt-[140px] sm:px-[20px] px-3">
                <div className="main_container ">
                    

                        <div className="grid lg:grid-cols-12 ">
                        <div className={`${classes.text_div} lg:col-span-5   relative h-max lg:me-10`}>
                            <div className=" max-w-[636px] ">
                                <h2 className="font-mono font-semibold md:text-35px text-25px pe-10">{data?.description}</h2>

                              
                                <div className="icons flex mt-10 gap-[18px]">
                                {data?.social.map((socialmap,index)=>(

                                  <Link href={socialmap.socialLink} key={`${index}_socialmap`}>
                                  <Image src={urlFor(socialmap.socialImage).url()} height={45} width={45} alt="" />
                                  </Link>
                                   
                                ))}
                                </div>
                            </div>
                            <div className="sm:block hidden hand_img absolute right-0 md:-bottom-[60%] -bottom-[20%] md:max-w-max max-w-[150px]">
                                <Image src={urlFor(data?.image).url()} width={270} height={214} alt="" className='' />

                            </div>
                        </div>
                        <div className="lg:col-span-7 lg:mt-0 md:mt-[230px] mt-[150px]">
                            <div className="max-w-[956px] ms-auto bg-color-1 rounded-30px px-5 sm:px-10 ">
                                <form className="max-w-[670px] mx-auto sm:py-[88px] py-[50px] grid gap-5 sm:gap-9">

                                    <div className="enquiry">
                                        <label htmlFor="enquiry" className="text-color-9 text-base font-semibold font-mono w-full ">What is the nature of your enquiry?</label>
                                        <select id="enquiry" name="enquiry" className=" w-full font-lato border border-color-9 rounded-[10px] px-[25px]  py-[11px] text-lg text-color-1 mt-[11px]" required>
                                            <option>Grow my business</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </select>
                                    </div>
                                    <div className={`${classes.names_div} flex justify-between`}>
                                        <div className="first_name flex flex-col w-full max-w-[300px]">
                                            <label htmlFor="fname" className='text-color-9 text-base font-semibold font-mono mb-[11px]'>First name*</label>
                                            <input type="text" name="fname" id="" className='w-full border font-lato border-color-9 rounded-[10px] px-[25px] py-[14px] text-lg h-[50px]' placeholder='John' required />
                                        </div>
                                        <div className="last_name flex flex-col w-full max-w-[300px]">
                                            <label htmlFor="lname" className='text-color-9 text-base font-semibold font-mono mb-[11px]'>Last name</label>
                                            <input type="text" name="lname" id="" className='w-full border font-lato border-color-9 rounded-[10px] px-[25px] py-[14px] text-lg h-[50px]' placeholder='Doe' />
                                        </div>
                                    </div>
                                    <div className="email flex flex-col w-full ">
                                        <label htmlFor="email" className='text-color-9 text-base font-semibold font-mono mb-[11px]'>E-mail*</label>
                                        <input type="email" name="email" id="" className='w-full border font-lato border-color-9 rounded-[10px] px-[25px] py-[14px] text-lg h-[50px]' placeholder='johndoe@gmail.com' required />
                                    </div>
                                    <div className="message flex flex-col w-full ">
                                        <label htmlFor="message" className='text-color-9 text-base font-semibold font-mono mb-[11px]'>Message*</label>{/* <input type="" name="emmessageail" id="" className='border border-color-9 rounded-[10px] px-[25px] py-[14px] text-lg h-[50px]' placeholder='johndoe@gmail.com' required /> */}
                                        <textarea name="message" id="" cols={30} rows={10} className='w-full border font-lato border-color-9 rounded-[10px] px-[25px] py-[14px] text-lg h-[172px]' placeholder='Type your message here' required></textarea>
                                    </div>
                                    <div className="note sm:mt-[-26px] -mt-[6px]">
                                        <p className='text-color-9 text-md font-mono'>* required fields</p>
                                    </div>
                                    <input type="submit" value="Send" className='bg-white text-base font-mono text-color-1 rounded-full px-[26px] py-[8px] mx-auto' />

                                </form>

                            </div>
                        </div>

                    </div>
                    <div className="mt-[200px] flex justify-between gap-3 flex-wrap mb-[220px]">
           
                        <MapLocations />
                        <MapLocations />
                        <MapLocations />
                        <MapLocations />
                        <MapLocations />
                        <MapLocations />
                    </div>



                </div>
            </div>
        </>
    )
}

export default Contact