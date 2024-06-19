// import React, { useState } from "react";
// import Image from "next/image";
// import classes from "./Filters.module.css";
// import Filters_image from "../../../assets/images/Filters.png";
// import { GoArrowRight } from "react-icons/go";
// import Link from "next/link";
// import { urlFor } from "../../../../lib/sanity.client";
// // import logo from "../../../assets/images/Zest_symbol_white.png";

// function Filters({ data }: any) {
//   const [selectedCategories, setSelectedCategories] = useState<number>(0);
//   const [filteredProducts, setFilteredProducts] = useState<any[]>(
//     data.collection
//   );
//   const arrayElements = data.collection.map((item: any) => item.hero.keywords);
//   const combinedArray = arrayElements.reduce((acc: any, curr: any) => {
//     const uniqueElements = new Set(acc);
//     curr.forEach((element: any) => uniqueElements.add(element));
//     return Array.from(uniqueElements);
//   }, []);

//   const handleCategoryClick = (category: string,index:number) => {
//     setSelectedCategories(index)
//     setFilteredProducts(
//       data.collection.filter(
//         (a: any) => a.hero.keywords.includes(category) && a
//       )
//     );
//   };

//   return (
//     <>
//       <div className="main_padding">
//         <div className="main_container">
//           <h2 className="font-mono font-semibold xl:my-20 lg:my-[70px] md:my-[60px] my-[30px] xl:text-55px lg:text-50px md:text-40px text-35px">
//             {data.heading}
//           </h2>
//         </div>

//         <div className="main_container">
//           <div className={`${classes.Filters} relative `}>
//             <Image
//               src={Filters_image}
//               alt=""
//               className={`${classes.Filters_img} invisible md:visible  bg-color-1 rounded-30px absolute top-0`}
//             />
//             <div className="Filters_box relative z-10  grid lg:grid-cols-12">
//               <div className="lg:col-span-8 lg:order-1 order-2">
//                 {filteredProducts.map((item: any, index: number) => (
//                   <div className="my-10" key={index}>
//                     <div
//                       className={`grid sm:grid-cols-12 items-end ${
//                         index % 2 === 0
//                           ? "shadow-dark-pink-left"
//                           : "shadow-blue-left"
//                       } max-w-[1345px] mx-auto xl:ps-[50px] lg:ps-[45px] md:ps-[35px] ps-[20px] lg:pe-7 md:pe-[20px] pe-[20px] xl:py-[70px] lg:py-[60px] md:py-[50px] py-[30px] rounded-30px border border-black  bg-white text-color-1`}
//                     >
//                       <div className="sm:col-span-9">
//                         {item.hero.keywords.map(
//                           (filterName: string, i: number) => (
//                             <h6
//                               key={i}
//                               className={`${classes.Insight_tag} bg-color-7 border border-color-7 rounded-full font-mono w-max`}
//                             >
//                               {filterName}
//                             </h6>
//                           )
//                         )}
//                         <h2
//                           className={`lg:text-35px md:text-30px text-25px font-mono font-semibold mb-6 lg:mt-8 md:mt-[20px] mt-[10px] `}
//                         >
//                           {item.hero.heading}
//                         </h2>
//                         <Link href={`/insights/${item.slug.current}`}>
//                           <button className="bg-color-1 rounded-full text-white text-base md:py-[7px] md:ps-5 py-[3px] ps-[13px] pe-[5px] md:pe-0 flex gap-2 items-center">
//                             Read more{" "}
//                             <span className="md:p-1 p-[2px] bg-white rounded-full text-black me-0 md:me-2 text-[15px] md:text-lg">
//                               <GoArrowRight />
//                             </span>
//                           </button>
//                         </Link>
//                       </div>
//                       <div className="col-span-3 sm:block hidden">
//                         <Image
//                           className="w-[150px] ms-auto"
//                           src={urlFor(item.hero.icon).url()}
//                           alt="card img"
//                           width={200}
//                           height={200}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="lg:col-span-1 lg:order-2"></div>
//               <div className="lg:col-span-3  lg:order-3 order-1">
//                 <h2 className="text-30px md:text-white text-color-1  font-mono font-semibold mb-[20px] lg:mb-10">
//                   Filters
//                 </h2>
//                 <div className="Filters_main_btn flex flex-wrap gap-3 ">
//                   {combinedArray.map((uniqueEl: any, index: any) => (
//                     <h6
//                       key={index}
//                       className={`${classes.Filters_btn} ${
//                         selectedCategories===index
//                           ? "bg_color_green"
//                           : ""
//                       }`}
//                       onClick={() => handleCategoryClick(uniqueEl,index)}
//                     >
//                       {uniqueEl}
//                     </h6>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             className={`${classes.Footer_Img} bg-black rounded-30px xl:mb-[100px] lg:mb-[80px] md:mb-[55px] mb-[30px] py-[46px] px-[20px] md:px-[55px] relative flex items-center`}
//           >
//             <div
//               className={`${classes.Zest_symbol_white} w-full absolute top-[27px] left-0 right-0`}
//             >
//               <Image
//                 src={urlFor(data.linkSectionIcon).url()}
//                 alt="icon"
//                 className="mx-auto"
//                 width={50}
//                 height={50}
//               />
//             </div>
//             <div
//               className={`${classes.Footer_Link} max-w-max ms-auto relative  z-10`}
//             >
//               <Link
//                 href={data.linkSection.linkUrl}
//                 className="border-b border-color-6  font-light w-max text-md lg:text-lg flex items-center gap-1  text-white"
//               >
//                 {" "}
//                 {data.linkSection.linkName}
//                 <GoArrowRight />{" "}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Filters;

// --------------------------------for multiple selected Category ---------------------------------

import React, { useState } from "react";
import Image from "next/image";
import classes from "./Filters.module.css";
// import Filters_image from "../../../assets/images/Filters.png";
import Filters_Desktop_image from "../../../assets/images/Insights_bg_gradient.png";
import Filters_Mobile_image from "../../../assets/images/Insights_bg_gradient_mobile.png";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { urlFor } from "../../../../lib/sanity.client";
import { FiltersType } from "../../../../lib/interface";

function Filters({ data }: {data:FiltersType}) {
  // console.log("data",data)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const arrayElements = data.collection.map((item) => item.hero.keywords);
  const combinedArray = arrayElements.reduce((acc, curr) => {
    const uniqueElements = new Set(acc);
    curr.forEach((element: any) => uniqueElements.add(element));
    return Array.from(uniqueElements);
  }, []);

  const newArray = [...combinedArray];
  newArray.unshift("All");

  const handleCategoryClick = (category: string) => {
    setSelectedCategories((prevCategories) => {
      // If "All" is clicked, return an empty array to show all cards
      if (category === "All") {
        return [];
      }

      // Toggle the category: add it if not present, remove if already present
      const updatedCategories = prevCategories.includes(category)
        ? prevCategories.filter((prevCategory) => prevCategory !== category)
        : [...prevCategories, category];
      return updatedCategories;
    });
  };

  const filteredProducts = data.collection.filter((item) =>
    selectedCategories.length === 0
      ? true // Show all products if no category is selected
      : selectedCategories.some((selectedCategory) =>
          item.hero.keywords.includes(selectedCategory)
        )
  );


//    const slug  = filteredProducts.map((item:any)=> item.slug.current)
// console.log(slug);

  return (
    <>
      <div className="main_padding">
        <div className="main_container">
          {/* <h2 className="font-mono font-semibold xl:my-20 lg:my-[70px] min-tb:max-tb:text-30px  min-tb:max-tb:my-[50px] md:my-[60px] my-[38px] xl:text-55px text-color-1 lg:text-50px md:text-40px text-[22px] sm:text-35px"> */}
          <h2 className={`${classes.filter_heading} font-mono font-semibold  text-color-1 `}>
            {data.heading}
          </h2>
        </div>

        <div className="main_container">
          <div className={`${classes.Filters} relative `}>
            <Image
              src={Filters_Desktop_image}
              alt=""
              className={`${classes.Filters_img}  bg-color-1  sm:h-auto h-[390px]  min-tb:max-tb:h-[385px]  rounded-[15px] md:rounded-[20px] lg:rounded-30px absolute top-0 w-full md:block hidden`}
            />
            <Image
              src={Filters_Mobile_image}
              alt=""
              className={`${classes.Filters_img}  bg-color-1  sm:h-auto h-[390px] rounded-[15px] md:rounded-[20px] lg:rounded-30px absolute top-0 w-full block md:hidden`}
            />
            <div className={`${classes.Filters_box}  relative z-10  grid lg:grid-cols-12`}>
              <div className="lg:col-span-8  min-tb:max-tb:mt-[30px]  md:px-0 mt-[22px] sm:mt-0 px-[20px] lg:order-1 order-2">
                {filteredProducts.map((item, index: number) => (
                  <div className="my-10" key={index}>
                    <div
                      className={` ${classes.insight_box} grid sm:grid-cols-12 items-end ${
                        index % 2 === 0
                          ? "shadow-dark-pink-left"
                          : "shadow-blue-left"
                      // } max-w-[1345px] mx-auto xl:ps-[50px] lg:ps-[45px] md:ps-[35px] ps-[20px] lg:pe-[28px] md:pe-[20px] pe-[20px] xl:py-[70px] lg:py-[60px] md:py-[50px] py-[30px] rounded-[15px] md:rounded-[20px] lg:rounded-30px border border-black  bg-white text-color-1`}
                      } max-w-[1345px] mx-auto rounded-[15px] md:rounded-[20px] lg:rounded-30px border border-black  bg-white text-color-1`}
                    >
                      <div className="sm:col-span-9">
                        <div className="flex flex-row md:gap-[15px] sm:gap-[10px] gap-[5px] flex-wrap">
                          
                        {item.hero.keywords.map(
                          (filterName: string, i: number) => (
                            <h6
                              key={i}
                              className={`${classes.Insight_tag} bg-color-7 border border-color-7 rounded-full font-mono w-max`}
                              >
                              {filterName}
                            </h6>
                          )
                        )}
                              </div>
                        <h2
                          className={`xl:text-35px lg:text-[34px] md:text-30px text-[20px]    font-mono font-semibold mb-6 lg:mt-8 md:mt-[20px] mt-[10px] `}
                        >
                          {item.hero.heading}
                        </h2>
                        <Link href={`/insights/${item.slug.current}`}>
                          <button className="bg-color-1 group hover:bg-white hover:text-color-1 border border-color-1 rounded-full text-white sm:text-base text-[12px] md:py-[4px] md:ps-5 py-[4px] ps-[13px] pe-[4px] md:pe-0 flex gap-2 items-center">
                            Read more{" "}
                            <span className="md:p-1 p-[2px] group-hover:bg-color-1 group-hover:text-white bg-white rounded-full text-black me-0 md:me-[4px] text-[18px] md:text-[19px]">
                              <GoArrowRight />
                            </span>
                          </button>
                        </Link>
                      </div>
                      <div className="col-span-3  relative">
                        <Image
                          className="lg:w-[150px] md:w-[130px] w-[110px] ms-auto h-[110px] lg:h-[150px]"
                          src={urlFor(item.hero.icon).url()}
                          alt="card img"
                          width={150}
                          height={150}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-1 lg:order-2"></div>
              <div className="lg:col-span-3 md:px-0 pt-6 md:pt-0 px-[20px]  lg:order-3 order-1 lg:text-right ">
                {/* <h2 className="sm:text-30px text-[16px]  min-tb:max-tb:text-[20px]  text-white font-mono font-semibold xl:mb-10 lg:mb-[20px]  min-tb:max-tb:mb-[14px]  md:mb-[10px] mb-[8px]"> */}
                <h2 className={`${classes.filter_text}  text-white font-mono font-semibold `}>
                  Filters
                </h2>
                <div className="Filters_main_btn flex lg:justify-end flex-wrap gap-3 ">
                  {newArray.map((uniqueEl: any, index: any) => (
                    <h6
                      key={index}
                      className={`${classes.Filters_btn} ${
                        index === 0 && selectedCategories.length === 0
                          ? "bg_color_green"
                          : selectedCategories.includes(uniqueEl)
                          ? "bg_color_green"
                          : ""
                      }`}
                      onClick={() => handleCategoryClick(uniqueEl)}
                    >
                      {uniqueEl}
                    </h6>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${classes.Footer_Img} md:mt-[100px] mt-[50px] bg-black rounded-[20px] md:rounded-30px xl:mb-[100px] lg:mb-[80px] md:mb-[65px] mb-[150px] py-[46px] px-[20px] md:px-[55px] relative flex items-center`}>
            <div className={`${classes.Zest_symbol_white} w-full  absolute top-[27px] left-0 right-0`}>

              <Image
                src={urlFor(data.linkSectionIcon).url()}
                alt="icon"
                className="mx-auto"
                width={50}
                height={50}
              />
            </div>
            <div className={`${classes.Footer_Link} max-w-max ms-auto relative  z-10`}>
              <Link
                href={data.linkSection.linkUrl}
                className="border-b border-color-6  font-light w-max text-md lg:text-lg flex items-center gap-1  text-white"
              >
                {" "}
                {data.linkSection.linkName}
                <GoArrowRight />{" "}
              </Link>
            </div>
          </div> */}
        {/* <div className={` bg-black rounded-[15px] md:rounded-[20px] lg:rounded-30px xl:mb-[100px]  min-tb:max-tb:mt-[23px]  min-tb:max-tb:mb-[100px] lg:mb-[100px] md:mb-[65px] mb-[120px] md:mt-[100px] sm:mt-[50px] mt-[45px] py-[18px] sm:py-[20px] md:py-[22px] lg:py-[27px] px-[22px] sm:px-[30px] md:px-[38px] lg:px-[45px]  relative grid grid-cols-3`}> */}
        <div className={`${classes.navigate_box} bg-black rounded-[15px] md:rounded-[20px] lg:rounded-30px  relative grid grid-cols-3`}>
          <div className={`${classes.next_text_left} relative self-center  z-10`}>
              <Link href={data.linkSection.linkUrl} className={`${classes.navigate_links} inline border-b border-color-6  font-light invisible    text-white`}>
                {" "}
                {data.linkSection.linkName}
              </Link>
            </div>

            <div className={` w-full self-center mx-auto`}>
              <Image
                src={urlFor(data.linkSectionIcon).url()}
                alt="icon"
                className="mx-auto xl:max-w-[52px] lg:max-w-[45px] md:max-w-[35px] sm:max-w-[28px] max-w-[20px] w-full"
                width={50}
                height={50}
              />
            </div>
            <div className={`${classes.next_text_right} relative ms-auto leading-[13px] mb-[2px] self-center  z-10`}>
              
              
              {/* <Link href={data.linkSection.linkUrl} className={`inline border-b border-color-6  font-light  text-[10px] sm:text-[12px] md:text-[16px] lg:text-[16px] xl:text-[18px]   text-white`}> */}
              <Link href={data.linkSection.linkUrl} className={`${classes.navigate_links} inline border-b border-color-6  font-light     text-white`}>
                {" "}
                {data.linkSection.linkName}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Filters;