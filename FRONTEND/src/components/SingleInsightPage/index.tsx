import React, { useEffect } from "react";
import classes from "./SingleInsightPage.module.css";
import Image from "next/image";
import { urlFor } from "../../../lib/sanity.client"; //@ts-ignore
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import { SingleInsightsType } from "../../../lib/interface";
import { generateId, handleHashChange } from "@/common/ScrollByID";
import AOS from 'aos'
import 'aos/dist/aos.css';

function SingleInsightPage({ data, slugCard }: { data: SingleInsightsType, slugCard: any }) {


  const currentpageSlug = data.slug.current;
  const currentPost = slugCard.findIndex((item: any) => item.slug === currentpageSlug);
  const prevPost = slugCard[currentPost - 1];
  const nextPost = slugCard[currentPost + 1];

  useEffect(() => {
    const contentElements = document.querySelectorAll(".Block_Content *:not(ul):not(ol):not(h3):not(h2):not(h5):not(figure):not(li a)");
    contentElements.forEach((element) => {
      element.setAttribute("data-aos", "fade-up");
    });
    AOS.refresh();
    AOS.refreshHard();

    return () => {
      contentElements.forEach((element) => {
        element.removeAttribute("data-aos");
      });
    };
  }, [data])



  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    return () => {
      AOS.refreshHard(); // This resets all AOS settings and removes animations
    };
  }, [data]);


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
    let olWrapper: any = [];
    // console.log("blocks = ", blocks);
    blocks.map((content: any) => {
      if (content.caption !== undefined) {

        // console.log("cATION = ", content.caption);
      }

    })
    return blocks.map((block: any, index: number) => {
      const aosAttribute = { 'data-aos': 'fade-up' };

      if (block._type === 'block' && block.listItem === 'number') {
        const children = block.children.map((child: any, childIndex: number) => {
          if (child.marks && child.marks.length > 0) {
            const markDefs = block.markDefs.find((mark: any) => mark._key === child.marks[0]);
            if (markDefs && markDefs._type === 'link') {
              return (
                <a key={childIndex} href={markDefs.href}>
                  {child.text}
                </a>
              );
            }
            if (child.marks.includes('strong')) {
              return <strong key={childIndex}>{child.text}</strong>;
            }
          }
          return <span key={childIndex}>{child.text}</span>;
        });

        olWrapper.push(<li key={index}>{children}</li>);

        if (index === blocks.length - 1 || blocks[index + 1]._type !== 'block' || blocks[index + 1].listItem !== 'number') {
          const olContent = <ol key={index}>{olWrapper}</ol>;
          olWrapper = [];
          return olContent;
        }
        return null;
      }

      if (block._type === 'block' && block.style === 'h2') {
        return <WrappedH2 key={index}><h2 key={index}>{block.children[0].text}</h2></WrappedH2>;
      }

      if (block._type === 'block' && block.style === 'h3') {
        let text = block.children[0].text;
        const id = generateId(text);
        return <div id={id} key={index}><h3 key={index}>{text}</h3></div>;
      }
      if (block._type === 'block' && block.style === 'h5') {
        let text = block.children[0].text;
        const id = generateId(text);
        return <div id={id} key={index}><h5 key={index}>{text}</h5></div>;
      }

      if (block._type === 'video' && block.iframeUrl !== "") {
        return (
          <div id={block._type} key={index}>
            <iframe
              key={index}
              width="725"
              height="407"
              src={block.iframeUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className={`${classes.youtube_video}`}
            ></iframe>
          </div>
        );
      }

      if (block._type === "image" && block.caption !== undefined) {
        const imageUrl = urlFor(block.asset).url(); // Use the asset reference to generate the image URL

        return (
          <figure id={block._type} key={index} >
            <img src={imageUrl} alt={block.caption} /> {/* Display the image */}
            <figcaption>{block.caption}</figcaption> {/* Display the caption */}
          </figure>
        );
      }

      return (
        <BlockContent
          key={index}
          blocks={block}
          projectId={"dexthfb7"}
          dataset={"production"}
          {...aosAttribute}
        />
      );
    });
  };


  return (
    <div className={`${classes.SingleInsightPage} SingleInsightPage mt-[40px] md:mt-[100px] min-tb:max-tb:mt-[54px] main_padding`}>
      <div className="main_container">
        <div className={`${classes.bg_image} title-box xl:px-[100px] lg:px-[70px] md:px-[50px] min-tb:max-tb:px-[40px] px-[20px] xl:pb-[185px] lg:pb-[155px] md:pb-[130px] min-tb:max-tb:pb-[87px] pb-[103px] xl:pt-[65px]  lg:pt-[55px] md:pt-[45px] min-tb:max-tb:pt-[46px] pt-[41px] rounded-[15px] md:rounded-[20px] lg:rounded-30px`} data-aos="fade-up">
          <p className={`${classes.page_keyword} font-mono lg:text-35px md:text-30px min-tb:max-tb:text-[26px] sm:text-25px text-[20px] font-semibold text-color-7 `} data-aos="fade-up">
            {data?.hero?.keywords ? data.hero.keywords[0] : ""}
          </p>
          <h2 className={`${classes.page_heading} font-mono font-semibold xl:text-55px xl:leading-[75px] lg:text-50px md:text-40px min-tb:max-tb:text-[30px] sm:text-30px text-[22px] text-white min-tb:max-tb:max-w-[520px] max-w-[798px] xl:mt-[45px] lg:mt-[30px] md:mt-[25px] min-tb:max-tb:mt-[34px] mt-[22px] min-tb:max-tb:mb-[15px] mb-[10px] lg:mb-[26px]`} data-aos="fade-up">
            {data?.hero?.heading}
          </h2>
          <div className="lg:max-w-max md:max-w-[55px] sm:max-w-[45px] max-w-[40px]" >
            <Image
              src={urlFor(data.hero?.grow_down).url()}
              alt="grow_down icon"
              width={60}
              height={60} data-aos="fade-up"
            />
          </div>
        </div>
        <div className={`Block_Content ${classes.Block_Content} lg:mt-[74px] md:mt-[60px] min-tb:max-tb:mt-[50px] sm:mt-[50px] mt-[40px] max-w-[1420px] mx-auto grid px-[5px]`} >
          {renderCustomBlock(data?.content)}
        </div>

        <div className={`bg-black rounded-[20px] md:rounded-30px xl:mb-[245px] lg:mb-[170px] md:mb-[80px] sm:mb-[75px] mb-[70px] py-[18px] sm:py-[20px] md:py-[22px] lg:py-[27px] px-[22px] sm:px-[30px] md:px-[38px] lg:px-[45px] xl:px-[55px] xl:mt-[120px] lg:mt-[95px] md:mt-[60px] sm:mt-[60px] mt-[50px] relative grid grid-cols-3`} data-aos="fade-up">
          <div className={`${classes.next_text_left}  relative self-center md:leading-[25px] leading-[17px] z-10`} data-aos="fade-left">
            {prevPost ?
              <Link href={prevPost.slug} className={`left_arrow_hover inline border-b border-color-6 font-light text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-[10px] text-white`} >
                {prevPost?.hero?.heading}
              </Link>
              : ""
            }
          </div>
          <div className={`self-center mx-auto`}>
            <Image
              src={urlFor(data?.linkSection?.icon).url()}
              alt="icon"
              className="mx-auto xl:max-w-[52px] lg:max-w-[45px] md:max-w-[35px] sm:max-w-[28px] max-w-[20px] w-full"
              width={50}
              height={50}
            />
          </div>
          <div className={`${classes.next_text_right}  relative ms-auto self-center md:leading-[25px] leading-[17px] z-10 text-end`} data-aos="fade-right">
            {nextPost ?
              <Link href={nextPost?.slug} className={` right_arrow_hover inline border-b border-color-6 font-light text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-[10px] text-white`} >
                {nextPost.hero?.heading}
              </Link>
              : ""
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleInsightPage;
