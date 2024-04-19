import React from "react";
import Image from "next/image";
import classes from "./heroSection.module.css";
import { urlFor } from "../../../lib/sanity.client";
import MuxPlayer from "@mux/mux-player-react";

const HeroSection = ({ data }: any) => {
  const {
    heading,
    viewSolBtnName,
    SeeOurResBtnName,
    viewSolBtnLink,
    SeeOurResBtnLink,
    image,
    video,
  } = data;

  console.log(video.asset.playbackId);
  return (
    <>
      <div className="main_padding">
        <div className=" text-white main_container">
          <div
            className={`${classes.banner} grid md:grid-cols-2 grid-cols-1 gap-10 bg-black bg-image-1 bg-no-repeat bg-cover md:rounded-30px rounded-[20px] xl:pb-[166px] lg:pb-[106px] xl:pt-[185px] lg:pt-[135px] md:py-[90px] sm:py-[50px] py-[30px] xl:px-[100px] lg:px-[80px] md:px-[60px] sm:px-[40px] px-[22px] relative`}
          >
            <div className=" font-mono text-55px border-white flex flex-col">
              <h1
                className={`${classes.banner_text} font-semibold leading-tight border-white xl:text-55px lg:text-50px md:text-40px text-30px `}
              >
                {heading}
              </h1>
              <div className="flex gap-5 md:flex-col lg:flex-row mt-9 flex-col sm:flex-row">
                <button className="text-base px-25px md:h-10 h-9 bg-white text-color-1 rounded-full hover:bg-color-1 hover:text-white border border-white  hover:border-color-1">
                  {viewSolBtnName}
                </button>
                <button className="text-base px-25px md:h-10 h-9 bg-transparent text-white rounded-full hover:text-color-1 hover:bg-white border border-white ">
                  {SeeOurResBtnName}
                </button>
              </div>
              <div className={`${classes.marketing_agency_logo_1} self-end`}>
                <Image
                  src={urlFor(image).url()}
                  width={256}
                  height={246}
                  alt=""
                />
              </div>
            </div>
            <div
              className={`${classes.banner_video}  flex justify-end items-start  relative`}
            >
              <div className={`${classes.marketing_agency_logo_2}`}>
                <Image
                  src={urlFor(image).url()}
                  width={256}
                  height={246}
                  alt=""
                />
              </div>
              <MuxPlayer
                playbackId={video.asset.playbackId}
                className={`${classes.video_class} md:rounded-30px rounded-[20px] xl:w-[685px] xl:h-[450px] lg:w-[500px] lg:h-[350px] md:w-[400px] md:h-[250px] w-full sm:h-[320px]`}
                metadata={{
                  video_id: "video-id-54321",
                  video_title: "Test video title",
                  viewer_user_id: "user-id-007",
                }}
                streamType="on-demand"
                autoPlay
                muted
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
