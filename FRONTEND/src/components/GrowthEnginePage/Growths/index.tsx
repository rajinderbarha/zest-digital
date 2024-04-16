import Growth_engine from "@/common/Growth_engine";
import React from "react";
import { GrowthTrackerType } from "../../../../lib/interface";

function Growths({ data }: { data: any }) {
  return (
    <>
      {data.length > 0 && (
        <div className="Growths max-w-[1365px] mx-auto px-5 mt-[70px] overflow-hidden">
          <div className="2xl:mb-[235px] xl:mb-[200px] lg:mb-[175px] md:mb-[120px] sm:mb-[100px] mb-[50px]">
            {data.map((item: any, index: number) => (
              <h2
                key={`${index}_Growths`}
                className="text-30px md:text-45px sm:text-35px font-mono font-semibold mx-auto text-center"
              >
                {item.heading}
              </h2>
            ))}
            <div className={` font-mono  mx-auto grid gap-10 mt-10 md:mt-28 `}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1345px] mx-auto">
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
