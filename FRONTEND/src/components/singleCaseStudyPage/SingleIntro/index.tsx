import classes from './SingleIntro.module.css'
import Objective from '../singlebox/objective'
import Image from 'next/image';
import { urlFor } from '../../../../lib/sanity.client'
import { SingleCasestudyType } from '../../../../lib/interface';
function SingleIntro({ hero, sectionCard, team }: SingleCasestudyType) {
  const { heading, profile } = team;

  return <div className="main_padding">
    <div className={`${classes.SingleBox} bg-color-1 main_container   h-100 lg:rounded-30px md:rounded-[20px] rounded-[15px]`} data-aos="fade-up">
      <div className={`${classes.singleBox_container}`}>
        <div className=" flex sm:flex-row flex-col sm:gap-0 gap-[66px] justify-evenly ">
          {hero.item.map((item: { icon: any, description: string, count: string }, index: number) => {
            return (
              <div className="text-center " key={index} data-aos="fade-up">

                <div className={` ${classes.top_image} xl:max-w-[250px] lg:max-w-[200px]  max-w-[150px] h-full text-center sm:mb-0 mb-[15px]   mx-auto`}>
                  <Image src={urlFor(item.icon).url()} alt="growth" width={250} height={250} className='w-full h-full mx-auto ' />
                </div>
                {item.count !== null || undefined ?

                  <h2 className={`${classes.image_title}  text-color-7 font-mono font-semibold `}>{item.count}</h2> : <h2 className={`${classes.image_title}  text-color-7 font-mono font-semibold invisible`}>0</h2>
                }
                <p className={`${classes.image_desc}  font-mono font-medium text-white   mx-auto 2xl:max-w-[319px] xl:max-w-[270px] lg:max-w-[215px]  max-w-[200px] `}>{item.description}</p>
              </div>)
          })}


        </div>
        <div className={`${classes.box_text} mx-auto`} data-aos="fade-up">
          <h2 className={`${classes.box_heading} font-mono font-semibold italic  text-white mx-auto text-center `}>{hero.heading}</h2>
          <div className="lg:px-52 md:px-28 sm:px-16 px-[20px]">
            <p className={`${classes.box_belowline}   font-mono text-color-9 mx-auto  border-t border-color-9 text-center `}>{hero.belowLine}</p>
          </div>
        </div>
      </div>

    </div>
    <div className={` ${classes.cards_div} grid  xl:gap-[84px] lg:gap-[60px] md:gap-[40px] sm:gap-[32px] gap-[32px] max-tb:-mt-[120px] -mt-[137px] px-[52px]`}>
      <Objective sectionCard={sectionCard} />

    </div>
    <div className={`${classes.About_team} xl:mt-[122px] lg:mt-[110px] md:mt-[95px] min-tb:max-tb:mt-[85px] sm:mt-[80px] mt-[84px] `}>
      <div className="main_container_x">
        <h2 className={`${classes.team_heading} text-center font-mono font-semibold`} data-aos="fade">
          {heading}
        </h2>
        <div className="">
          <div className="About_team_box text-center grid grid-cols-1 sm:grid-cols-3  md:gap-x-20 md:gap-y-20 min-tb:max-tb:gap-x-[40px] sm:gap-x-[60px] sm:gap-y-[30px] gap-x-[40px] gap-y-[20px]">
            {profile?.map((data, index: any) => (
              <div key={`${index}_About_team_2`} className={`${classes.About_team_box_inner}`} data-aos="fade-up">
                <div className="About_img_box relative mx-auto xl:mb-[45px] lg:mb-[20px] md:mb-[10px] mb-[15px] max-w-[463px]">
                  <div
                    className={`${classes.Team_img_circle} absolute  bottom-0`}
                  ></div>
                  <Image
                    src={urlFor(data.image).url()}
                    width={481}
                    height={481}
                    className={`${classes.Team_img} rounded-[100%] relative z-10 mx-auto `}
                    alt=""
                  />
                </div>

                <h3 className={`${classes.team_person_title}  font-semibold font-mono text-color-1 `}>
                  {data.name}{" "}
                </h3>
                <p className={`${classes.team_person_detail} lg:text-lg md:text-[16px] max-tb:text-[12px] max-tb:leading-[20px] sm:text-[14px]  font-normal font-mono text-color-1`}>
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

}

export default SingleIntro
