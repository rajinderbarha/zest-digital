import React, { useEffect, useState } from "react";
import classes from "./SingleInsightPage.module.css";
import Image from "next/image";
// import { GoArrowRight } from "react-icons/go";
import { urlFor } from "../../../lib/sanity.client"; //@ts-ignore
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import { SingleInsightsType } from "../../../lib/interface";
import { generateId, handleHashChange } from "@/common/ScrollByID";

function SingleInsightPage({ data, slugCard }: { data: SingleInsightsType, slugCard: any }) {

  useEffect(() => {      
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const WrappedH2 = ({ children }: any) => {
    return <div className={classes.wrappedH2}>{children}</div>;
  };

  const renderCustomBlock = (blocks: any) => {
    return blocks.map((block: any, index: number) => {
     
      if (block._type === 'block' && block.style === 'h2') {
       
        return <WrappedH2 key={index}><h2 key={index}>{ block.children[0].text}</h2></WrappedH2>
      }
      if (block._type === 'block' && block.style === 'h3') {
        let text = block.children[0].text;              
        const id = generateId(text);
        // console.log(text);
        // console.log(id);
        
        return<div id={id} key={index}>
          <h3 key={index}>{text}</h3>
          </div>
      }

    
      if (block._type === 'video' && block.iframeUrl !== "") {
        // let text = block?.iframeUrl;              
        // const id = generateId(text);
        // console.log(block)
        return <div id={block._type} key={index}>
          <iframe key={index} width="725" height="407" src={block.iframeUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className=" max-w-[725px] w-full aspect-video mx-auto xl:my-[50px] lg:my-[40px] md:my-[30px] my-[20px]"></iframe>
          </div>
    }

      

      return <BlockContent
        key={index}
        blocks={block}
        projectId={"dexthfb7"}
        dataset={"production"}
      />
    });
  };

  const currentpageSlug = data.slug.current;
  const currentPost = slugCard.findIndex((item: any) => item.slug === currentpageSlug);
  const prevPost = slugCard[currentPost - 1]
  const nextPost = slugCard[currentPost + 1]


  return (
    <>
      <div className="SingleInsightPage mt-[40px] md:mt-[100px] min-tb:max-tb:mt-[54px] main_padding">
        <div className="main_container  ">
          <div
            className={`${classes.bg_image} title-box xl:px-[100px] lg:px-[70px] md:px-[50px] min-tb:max-tb:px-[40px] px-[20px] xl:pb-[185px] lg:pb-[155px] md:pb-[130px] min-tb:max-tb:pb-[101px] pb-[103px] xl:pt-[65px] lg:pt-[55px] md:pt-[45px] min-tb:max-tb:pt-[46px] pt-[41px] rounded-[15px] md:rounded-[20px] lg:rounded-30px`}
          >
            <p className="font-mono lg:text-35px md:text-30px min-tb:max-tb:text-[26px] sm:text-25px text-[20px] font-semibold text-color-7 ">
              {data.hero.keywords[0]}
            </p>
            <h2 className="font-mono font-semibold xl:text-55px lg:text-50px md:text-40px min-tb:max-tb:text-[30px] sm:text-30px text-[22px] text-white min-tb:max-tb:max-w-[500px] max-w-[798px] xl:mt-[45px] lg:mt-[30px] md:mt-[25px] min-tb:max-tb:mt-[34px] mt-[25px] mb-[20px]">
              {data.hero.heading}
            </h2>
            <div className="lg:max-w-max md:max-w-[55px] sm:max-w-[45px] max-w-[40px]">
              <Image
                src={urlFor(data.hero.grow_down).url()}
                alt="grow_down icon"
                width={60}
                height={60}
              />
            </div>
          </div>
          <div
            className={`${classes.Block_Content} lg:mt-[74px] md:mt-[60px] sm:mt-[50px] mt-[40px] max-w-[1420px] mx-auto grid  px-[5px]`}
          >
            {/* <BlockContent
              blocks={data.content}
              projectId={"dexthfb7"}
              dataset={"production"}
            /> */}
            {renderCustomBlock(data.content)}

          </div>
          {/* <div className={`${classes.Footer_Img} bg-black rounded-[20px] md:rounded-30px xl:mb-[245px] lg:mb-[200px] md:mb-[150px] sm:mb-[100px] mb-[70px] py-[46px] px-[20px] md:px-[55px] xl:mt-[120px] lg:mt-[95px] md:mt-[70px] sm:mt-[60px] mt-[30px] relative flex items-center`}>
            <div className={`${classes.Zest_symbol_white} w-full absolute top-[27px] left-0 right-0`}>
              <Image
                src={urlFor(data.linkSection.icon).url()}
                alt="icon"
                className="mx-auto"
                width={50}
                height={50}
              />
            </div>
            <div className={`${classes.Footer_Link} max-w-max ms-auto relative  z-10`}>
              <Link href={data.linkSection.linkUrl} className="border-b border-color-6  font-light w-max text-md lg:text-lg flex items-center gap-1  text-white">
                {" "}
                {data.linkSection.linkName}
                <GoArrowRight />{" "}
              </Link>
            </div>
          </div> */}


          <div className={` bg-black rounded-[20px] md:rounded-30px xl:mb-[245px] lg:mb-[170px] md:mb-[80px] sm:mb-[75px] mb-[70px] py-[18px] sm:py-[20px] md:py-[22px] lg:py-[27px] px-[22px] sm:px-[30px] md:px-[38px] lg:px-[45px] xl:px-[55px] xl:mt-[120px] lg:mt-[95px] md:mt-[60px] sm:mt-[60px] mt-[50px] relative grid grid-cols-3`}>


          <div className={`${classes.next_text_left} relative self-center md:leading-[25px] leading-[17px] z-10`}>
             
                
          {prevPost?
              <Link href={prevPost.slug} className={`inline border-b border-color-6  font-light  text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-[10px]  text-white`}>
                {" "}
                {prevPost.hero.heading}
              </Link>  : 
""
              // <Link href={data.linkSection.linkUrl} className={`inline border-b border-color-6 invisible  font-light  text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]   text-white`}>
              //   {" "}
              //   {data.linkSection.linkName}
              // </Link>
              
          }

            </div>

            <div className={`  self-center mx-auto`}>
              <Image
                src={urlFor(data.linkSection.icon).url()}
                alt="icon"
                className="mx-auto xl:max-w-[52px] lg:max-w-[45px] md:max-w-[35px] sm:max-w-[28px] max-w-[20px] w-full"
                width={50}
                height={50}
              />
            </div>

            <div className={`${classes.next_text_right} relative ms-auto self-center md:leading-[25px] leading-[17px] z-10`}>

              {nextPost ?
                <Link href={nextPost.slug} className={`inline border-b border-color-6  font-light  text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-[10px]  text-white`}>

                  {" "}
                  {nextPost.hero.heading}
                </Link>
                : ""
              }
            </div>
          </div>

        </div>


      </div>
    </>
  );
}

export default SingleInsightPage;
