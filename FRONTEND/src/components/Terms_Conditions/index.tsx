import React from 'react';
import classes from './Terms_Conditions.module.css';
import Boxes from './Boxes';
import { TermsAndConditionsType } from '../../../lib/interface';

function Terms_Conditions({ data }:  { data: TermsAndConditionsType }) {
 
  console.log("termsAndConditionData-------------++++++++++++++",data)
  // const { termsAndConditionData } = data;

  return (
    <>
      {/* {termsAndConditionData.map((item, index) => ( */}
        <div>
          <div className='main_container'>
            <div className={`${classes.Careerbanner}`}>
              <div className="">
                <h1 className='font-mono font-semibold md:text-55px text-35px mb-5 '>{data.heading}</h1>
              </div>
            </div>
          </div>
          <div className="main_container">
            <div className={`${classes.box_bg_image} mt-[66px] rounded-30px h-[500px] md:h-[680px] pt-[86px]`}></div>
            <div className="max-w-[1335px] mx-auto -mt-[400px] md:-mt-[650px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1355px] px-5 font-mono mx-auto mt-[80px]">
              {data.cards.map((card, cardIndex) => (
  <Boxes
    key={cardIndex}
    title={card?.title || ''}
    smallDescription={card?.smallDescription|| ''}
    shadow_right={cardIndex % 2 === 0} // Shadow alternating sides
    buttonName={card?.buttonName || ''}
    buttonLink={card?.slug.current}
  />
))}

              </div>
            </div>
          </div>
        </div>
      {/* ))} */}
    </>
  );
}

export default Terms_Conditions;
