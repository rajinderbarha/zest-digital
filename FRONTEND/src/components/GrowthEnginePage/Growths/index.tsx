import Growth_engine from "@/common/Growth_engine";
import React from "react";
import { GrowthTrackerType } from "../../../../lib/interface";

function Growths({ data }: { data: GrowthTrackerType[] }) {
  console.log("look");
  console.log("%%%%%%%%%%%%", data[0].growthTracker.solution);

  // Accessing properties of growthTrackerData
  data.forEach((data, index) => {
    console.log(`Growth Tracker Data ${index + 1}:`);
    console.log("Hero Section:", data.growthTracker.heroSection);
    console.log("Growth Section:", data.growthTracker.growthSection);
    console.log("Solution:", data.growthTracker.solution);
    console.log("Banner:", data.growthTracker.banner);
    console.log("Signup Form:", data.signupform);
  });

  return (
    <>
      <div className="Growths max-w-[1365px] mx-auto px-5 mt-[70px] overflow-hidden">
        <div className="2xl:mb-[300px] lg:mb-[200px] mb-[100px]">
          {data?.map((item, index) => (
            <h2
              key={`${index}_Growths`}
              className="text-30px md:text-45px sm:text-35px font-mono font-semibold mx-auto text-center"
            >
              {item.growthTracker.solution.heading}
            </h2>
          ))}
          <div className={` font-mono  mx-auto grid gap-10 mt-10 md:mt-28 `}>
            {data[0].growthTracker.solution.card.map((item, index) => {
              console.log("item", item);

              return (
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1345px] mx-auto "
                  key={index}
                >
                  <Growth_engine
                    title="Growth Curve"
                    has_image={false}
                    shadow_right={true}
                    btn_title="On-demand growth marketing"
                    desc="Scalable on-demand growth marketing support across SEO, PPC, content, and more."
                  />
                  <Growth_engine
                    title="Growth Mapper"
                    has_image={false}
                    shadow_right={false}
                    btn_title="On-demand growth marketing"
                    desc="Plan for your growth using our unique framework, available as a standalone online course or a facilitated expert workshop."
                  />
                </div>
              );
            })}

            {/* <Growth_engine
              title="Growth Tracker"
              has_image={true}
              shadow_right={true}
              btn_title="Track my growth experiments"
              desc="The fastest and most complete way to generate new leads and sales to grow your business. All-inclusive growth marketing covering; PPC, SEO, content, and more."
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Growths;
