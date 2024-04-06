import Growth_engine from "@/common/Growth_engine";
import React from "react";
import { GrowthTrackerType } from "../../../../lib/interface";

function Growths({ data }: { data: GrowthTrackerType[] }) {

  console.log("%%%%%%%%%%%%",data);

  // Accessing properties of growthTrackerData
  // data.forEach((data, index) => {
  //   console.log(`Growth Tracker Data ${index + 1}:`);
  //   console.log("Hero Section:", data.growthTracker.heroSection);
  //   console.log("Growth Section:", data.growthTracker.growthSection);
  //   console.log("Solution:", data.growthTracker.solution);
  //   console.log("Banner:", data.growthTracker.banner);
  //   console.log("Signup Form:", data.signupform);
  // });

  return (
    <>
      <div className="Growths max-w-[1365px] mx-auto px-5 mt-[70px] overflow-hidden">
        <div className="2xl:mb-[300px] lg:mb-[200px] mb-[100px]">
          {data?.map((item:any, index) => (
            <h2
              key={`${index}_Growths`}
              className="text-30px md:text-45px sm:text-35px font-mono font-semibold mx-auto text-center"
            >
              {item.growthTracker.solution.heading}
            </h2>
          ))}
          <div className={` font-mono  mx-auto grid gap-10 mt-10 md:mt-28 `}>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1345px] mx-auto"

            >
              {data[0].growthTracker.solution.card.slice(0, 2).map((item:any, index) => {
              

                return (
                  <div key={index}>
                    <Growth_engine
                      props={item}
                      shadow_right={false}
                      has_image={false}
                    />
                  </div>
                );
              })}
            </div>

            <Growth_engine
              props={data[0].growthTracker.solution.card[2] as any}
              has_image={true}
              shadow_right={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Growths;
