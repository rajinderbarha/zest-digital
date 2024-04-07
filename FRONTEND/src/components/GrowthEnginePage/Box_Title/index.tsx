import React from "react";
import { GrowthTrackerType } from "../../../../lib/interface";

interface BoxTitleProps {
  upper: string;
  below: string;
}

const Box_Title = ({ upper,below }: BoxTitleProps) => {
  return (
    <div className="mx-auto max-w-[1027px]">
      <h2 className="font-mono font-semibold text-25px sm:text-30px md:text-35px leading-10 lg:leading-normal lg:text-40px xl:text-45px text-white mx-auto text-center sm:px-10 pb-6">
        {upper}
      </h2>
      <div className="px-16">
        <p className="text-base font-mono text-color-9 mx-auto border-t border-color-9 text-center pt-3">
          {below}
        </p>
      </div>
    </div>
  );
};

export default Box_Title;
