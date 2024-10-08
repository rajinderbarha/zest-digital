import Image from 'next/image'
import classes from './Climate_action.module.css'
import { ClimateAction } from '../../../lib/interface'
import { urlFor } from '../../../lib/sanity.client'
function Climate_action({ climate_actionImg, earth_img, smallDescription }: ClimateAction) {
  return <div className="main_padding  md:mb-[110px] min-tb:max-tb:mb-[55px] mb-[45px]">

    <div className="main_container " data-aos="fade-up">
      <div
        className={`${classes.climate_action_content} mx-auto rounded-[15px] md:rounded-[20px] lg:rounded-30px shadow-blue-right  font-mono text-color-1 grid md:grid-cols-12 grid-cols-1 md:gap-0 gap-5`}
      >
        <div className={` md:col-span-4 flex items-center min-tb:max-tb:gap-[16px] mx-auto`}>
          <div className={`${classes.image1_w}`}>
            <Image
              src={urlFor(climate_actionImg).url()}
              width={250}
              height={105}
              alt=""
              loading='eager'
              className="md:max-w-full min-tb:max-tb:max-w-[148px] sm:max-w-[180px] max-w-[129px]"
            />
          </div>
          <div className=" ">
            <Image
              src={urlFor(earth_img).url()}
              width={197}
              height={198}
              alt=""
              loading='eager'
              className="md:max-w-full  sm:max-w-[100px] min-tb:max-tb:max-w-[85px] max-w-[80px]"
            />
          </div>
        </div>

        <div className={` md:col-span-8 md:ps-10 md:max-tb:ps-[100px] max-w-[919px] flex items-center`}>
          <p className={`${classes.growth_engine_desc}  ms-auto `}>
            {smallDescription}
          </p>
        </div>
      </div>
    </div>
  </div>

}

export default Climate_action