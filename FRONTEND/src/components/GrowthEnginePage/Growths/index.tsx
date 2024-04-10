import Growth_engine from "@/common/Growth_engine";
import React from "react";
import { GrowthTrackerType } from "../../../../lib/interface";

function Growths({ data }: { data: any }) {

  return (
    <>
      {data.length > 0 && (
        <div className="Growths max-w-[1365px] mx-auto px-5 mt-[70px] overflow-hidden">
          <div className="2xl:mb-[300px] lg:mb-[200px] mb-[100px]">
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
                    <div key={index}>
                      <Growth_engine
                        props={{
                          title: item.card.heading,
                          description: item.card.description,
                          buttonName: item.card.buttonName,
                          buttonLink: item.card.buttonLink,
                          image: item.card.image,
                        }}
                        shadow_right={false}
                        has_image={false}
                      />
                    </div>
                  );
                })}
              </div>

             {data.length>2&& <Growth_engine
                props={
                  {
                    title: data[2]?.card.heading,
                    description: data[2]?.card.description,
                    buttonName: data[2]?.card.buttonName,
                    buttonLink: data[2]?.card.buttonLink,
                    image: data[2]?.card.image,
                  } as any
                }
                has_image={true}
                shadow_right={true}
              />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Growths;
