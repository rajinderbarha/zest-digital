// import Growth_engine from "@/common/Growth_engine";
// import React from "react";
// // import { GrowthTrackerType } from "../../../../lib/interface";

// function Growths({ data ,otherSolHeading}: any ) {
//   // console.log("growths-------------",data)
//   return (
//     <>
//     {/* xl:mb-[311px] lg:mb-[250px]  md:mb-[160px] sm:mb-[150px] mb-[50px] */}
//       {data.length > 0 && (
//         <div className="Growths max-w-[1365px] mx-auto px-5 mt-[70px] overflow-hidden ">

//           <div className="xl:mb-[311px] lg:mb-[210px] mb:mb-[175px] md:mb-[170px] sm:mb-[140px] mb-[50px]">
//               {/* {data.map((item: any, index: number) => ( */}

//               <h2
//                 // key={`${index}_Growths`}
//                 className="text-[22px] md:text-45px sm:text-35px font-mono font-semibold mx-auto text-center"
//               >
//                 {otherSolHeading}
//               </h2>
//             {/* ))} */}
//             <div className={` font-mono  mx-auto grid md:gap-10 sm:gap-[30px] gap-[20px] mt-10 md:mt-28 lg:px-[50px] md:px-[30px] sm:px-[20px] px-[0px] `}>
//               <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 sm:gap-[30px] gap-[20px] max-w-[1345px] mx-auto">
//                 {data.slice(0, 2).map((item: any, index: number) => {
//                   return (
//                     <div key={index} className="grid">
//                       <Growth_engine
//                         props={{
//                           title: item.card.heading,
//                           description: item.card.description,
//                           buttonName: item.card.buttonName,
//                           buttonLink: `/solutions/${item.slug.current}`,
//                           image: item.card.image,
//                         }}
//                         shadow_right={index % 2 === 0}
//                         has_image={false}
//                       />
//                     </div>
//                   );
//                 })}
//               </div>

//               {data.length > 2 &&
//                 data.slice(2).map((item: any, index: number) => {
//                   return (
//                     <Growth_engine
//                     key={index}
//                       props={{
//                         title: item.card.heading,
//                         description: item.card.description,
//                         buttonName: item.card.buttonName,
//                         buttonLink: `/solutions/${item.slug.current}`,
//                         image: item.card.image,
//                       }}
//                       has_image={true}
//                       shadow_right={true}
//                     />
//                   );
//                 })}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Growths





import Growth_engine from "@/common/Growth_engine";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Growths({ data, otherSolHeading }: any ) {
  // console.log("growths-------------", data);

  const router = useRouter();
  const [firstTwoItems, setFirstTwoItems] = useState<any[]>([]);

  useEffect(() => {
    if (!router.isReady) return;    //isReady property that indicates if the router fields are ready.
// console.log(router.asPath);
// console.log(router.query.slug);
 
    const pageSlug = router.query.slug;

    let firstTwo;
    const growth_engine = pageSlug === 'growth-engine';
    const growth_mapper = pageSlug === 'growth-mapper';
    const growth_curve = pageSlug === 'growth-curve';
    const growth_tracker = pageSlug === 'growth-tracker';

    if (growth_engine) {
      firstTwo = data.slice(0, 2).reverse();
    } else if (growth_mapper) {
      firstTwo = data.reverse().slice(0, 2);
    } else if (growth_curve) {
      firstTwo = data.reverse().slice(0,2)// Adjust the order logic as needed
    } else if (growth_tracker) {
      firstTwo = data.reverse().slice(0,2).reverse()// Adjust the order logic as needed
    } 
    setFirstTwoItems(firstTwo);
  }, [router.isReady, router.query.slug, data]);
  return (
    <>
      {data.length > 0 && (
        <div className="Growths max-w-[1365px] mx-auto px-5 mt-[70px] overflow-hidden ">
          <div className="xl:mb-[311px] lg:mb-[210px] mb:mb-[175px] md:mb-[170px] sm:mb-[140px] mb-[50px]">
            <h2 className="text-[22px] md:text-45px sm:text-35px font-mono font-semibold mx-auto text-center">
              {otherSolHeading}
            </h2>
            <div className="font-mono mx-auto grid md:gap-10 sm:gap-[30px] gap-[20px] mt-10 md:mt-28 lg:px-[50px] md:px-[30px] sm:px-[20px] px-[0px]">
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 sm:gap-[30px] gap-[20px] max-w-[1345px] mx-auto">
                {firstTwoItems?.map((item: any, index: number) => {
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
