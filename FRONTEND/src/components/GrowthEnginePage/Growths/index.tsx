import Growth_engine from "@/common/Growth_engine";
import React from "react";
// import { GrowthTrackerType } from "../../../../lib/interface";

function Growths({ data ,otherSolHeading}: any ) {
  // console.log("growths-------------",data)
  return (
    <>
    {/* xl:mb-[311px] lg:mb-[250px]  md:mb-[160px] sm:mb-[150px] mb-[50px] */}
      {data.length > 0 && (
        <div className="Growths max-w-[1365px] mx-auto px-5 mt-[70px] overflow-hidden ">

          <div className="xl:mb-[311px] lg:mb-[210px] mb:mb-[175px] md:mb-[170px] sm:mb-[140px] mb-[50px]">
              {/* {data.map((item: any, index: number) => ( */}

              <h2
                // key={`${index}_Growths`}
                className="text-30px md:text-45px sm:text-35px font-mono font-semibold mx-auto text-center"
              >
                {otherSolHeading}
              </h2>
            {/* ))} */}
            <div className={` font-mono  mx-auto grid md:gap-10 sm:gap-[30px] gap-[20px] mt-10 md:mt-28 `}>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 sm:gap-[30px] gap-[20px] max-w-[1345px] mx-auto">
                {data.slice(0, 2).map((item: any, index: number) => {
                  return (
                    <div key={index} className="grid">
                      <Growth_engine
                        props={{
                          title: item.card.heading,
                          description: item.card.description,
                          buttonName: item.card.buttonName,
                          buttonLink: `/solutions/${item.slug.current}`,
                          image: item.card.image,
                        }}
                        shadow_right={index % 2 === 0}
                        has_image={false}
                      />
                    </div>
                  );
                })}
              </div>

              {data.length > 2 &&
                data.slice(2).map((item: any, index: number) => {
                  return (
                    <Growth_engine
                    key={index}
                      props={{
                        title: item.card.heading,
                        description: item.card.description,
                        buttonName: item.card.buttonName,
                        buttonLink: `/solutions/${item.slug.current}`,
                        image: item.card.image,
                      }}
                      has_image={true}
                      shadow_right={true}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Growths;
