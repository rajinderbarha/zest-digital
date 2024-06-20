// import React from "react";
// import classes from "./DigitalTerms.module.css";
// import { PortableText } from "next-sanity";
// import { SingletermsAndConditionsType } from "../../../lib/interface";
// function DigitalTerms({ data }: { data: SingletermsAndConditionsType[] }) {
//   return (
//     <>
//       <div className="DigitalTerms main_padding xl:mb-[200px] lg:mb-[150px] md:mb-[100px] sm:mb-[70px] mb-[80px]">
//         <div className="main_container">
//           <h2 className="xl:text-55px lg:text-50px md:text-40px min-tb:max-tb:text-[30px] text-[22px] font-mono font-semibold xl:mt-[95px] lg:mt-[75px] mb:mt-[50px] min-tb:max-tb:mt-[52px] mt-[46px] ">
//             {data[0].title}
//           </h2>
//           {data?.map((item) => (
//             <div
//               className={`${classes.Portable_text} `}
//               key={`${item}_DigitalTerms`}
//             >
//               <PortableText value={item.content} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default DigitalTerms;



import React, { useEffect } from "react";
import classes from "./DigitalTerms.module.css";
import { PortableText } from "next-sanity";
import { SingletermsAndConditionsType } from "../../../lib/interface";
import { handleHashChange,generateId } from "@/common/ScrollByID";


function DigitalTerms({ data }: { data: SingletermsAndConditionsType[] }) {
  // console.log(data);
  
  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  

const renderCustomBlock = (blocks: any) => {
    return blocks.map((block: any, index: number) => {
      if (block._type === "block" && block.style === "h2") {
        const text = block.children[0].text;
        console.log(text);
        
        const id = generateId(text);
        console.log(id);
        
        return (
          <div id={id} key={index} className={classes.wrappedH2}>
            <h2>{text}</h2>
          </div>
        );
      }
      return <PortableText key={index} value={[block]} />;
    });
  };

  
  return (
    <>
      <div className="DigitalTerms main_padding xl:mb-[200px] lg:mb-[150px] md:mb-[100px] sm:mb-[70px] mb-[80px]">
        <div className="main_container">
          <h2 className="xl:text-55px lg:text-50px md:text-40px min-tb:max-tb:text-[30px] text-[22px] font-mono font-semibold xl:mt-[95px] lg:mt-[75px] mb:mt-[50px] min-tb:max-tb:mt-[52px] mt-[46px] ">
            {data[0].title}
          </h2>
          {data?.map((item, index) => (
            <div className={`${classes.Portable_text}`} key={index}>
              {renderCustomBlock(item.content)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DigitalTerms;
