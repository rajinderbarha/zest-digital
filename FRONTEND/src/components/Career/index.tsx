import React from 'react';
import classes from './Career.module.css';
import Image from 'next/image';
import { CareersType } from '../../../lib/interface';
import { urlFor } from '../../../lib/sanity.client';

interface CareerProps {
  data: CareersType[];
}

const Career: React.FC<CareerProps> = ({ data }) => {

  return (
    <div className={`Career mb-[100px] md:mb-[160px]`}>
      {data?.map((careerData, index) => {
        const { title, description, image } = careerData.card;

        return (
          <div key={`${index}_Career`}>
            <div className='main_container'>
              <div className={`${classes.Careerbanner}`}>
                <div className="">
                  <h1 className='font-mono font-semibold md:text-55px text-35px mb-5 '>{careerData.heading}</h1>
                </div>
              </div>
            </div>
            <div className="thanks_for_interest lg:mt-0 mt-[150px]">
              <div className={`${classes.SingleIntro}  main_container   rounded-30px`}>
                <div className={`${classes.single_container} max-w-[1335px] mx-auto pt-[150px] lg:pt-[170px] pb-[90px] lg:pb-[140px] relative`}>
                  <div className={`${classes.grow_img}  absolute max-w-[200px] lg:max-w-[250px]`}>
                    <Image src={urlFor(image).url()} width={350} height={350} alt="" className='w-full' />
                  </div>
                  <div className="text-white font-mono text-center max-w-[1172px] mx-auto p-6 md:p-10 ">
                    <h2 className='text-35px md:text-45px font-semibold  mb-[60px]'>{title}</h2>
                    <p className='text-25px md:text-30px  text-md '>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Career;
