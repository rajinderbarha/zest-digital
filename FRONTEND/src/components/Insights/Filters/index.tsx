

import React, { useState } from "react";
import Image from "next/image";
import classes from "./Filters.module.css";
import Filters_image from "../../../assets/images/Filters.png";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { urlFor } from "../../../../lib/sanity.client";
import logo from '../../../assets/images/Zest_symbol_white.png'

function Filters({ data }: any) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const arrayElements = data.collection.map((item: any) => item.hero.keywords);
  const combinedArray = arrayElements.reduce((acc: any, curr: any) => {
    const uniqueElements = new Set(acc);
    curr.forEach((element: any) => uniqueElements.add(element));
    return Array.from(uniqueElements);
  }, []);

  const handleCategoryClick = (category: string) => {
    
    setSelectedCategories((prevCategories) => {
      // Toggle the category: add it if not present, remove if already present
      const updatedCategories = prevCategories.includes(category)
        ? prevCategories.filter((prevCategory) => prevCategory !== category)
        : [...prevCategories, category];
      return updatedCategories;
    });
  };

  const filteredProducts = data.collection.filter((item: any) =>
    selectedCategories.length === 0
      ? true // Show all products if no category is selected
      : selectedCategories.some((selectedCategory) =>
          item.hero.keywords.includes(selectedCategory)
        )
  );

  return (
    <>
      <div className="main_padding">
        <div className="main_container">
          <h2 className="font-mono font-semibold xl:my-20 lg:my-[70px] md:my-[60px] my-[30px] xl:text-55px lg:text-50px md:text-40px text-35px">
            {data.heading}
          </h2>
        </div>

        <div className="main_container">
          <div className={`${classes.Filters} relative `}>
            <Image
              src={Filters_image}
              alt=""
              className={`${classes.Filters_img} invisible md:visible  bg-color-1 rounded-30px absolute top-0`}
            />
            <div className="Filters_box relative z-10  grid lg:grid-cols-12">
              <div className="lg:col-span-8 lg:order-1 order-2">
                {filteredProducts.map((item: any, index: number) => (
                  <div className="my-10" key={index}>
                    <div
                      className={`grid sm:grid-cols-12 items-end ${
                        index % 2 === 0
                          ? "shadow-dark-pink-left"
                          : "shadow-blue-left"
                      } max-w-[1345px] mx-auto xl:ps-[50px] lg:ps-[45px] md:ps-[35px] ps-[20px] lg:pe-7 md:pe-[20px] pe-[20px] xl:py-[70px] lg:py-[60px] md:py-[50px] py-[30px] rounded-30px border border-black  bg-white text-color-1`}
                    >
                      <div className="sm:col-span-9">
                        {item.hero.keywords.map((filterName: string, i: number) => (
                          <h6
                            key={i}
                            className={`${classes.Insight_tag} bg-color-7 border border-color-7 rounded-full font-mono w-max`}
                          >
                            {filterName}
                          </h6>
                        ))}
                        <h2
                          className={`lg:text-35px md:text-30px text-25px font-mono font-semibold mb-6 lg:mt-8 md:mt-[20px] mt-[10px] `}
                        >
                          {item.hero.heading}
                        </h2>
                        <Link href={`/insights/${item.slug.current}`}>
                          <button className="bg-color-1 rounded-full text-white text-base md:py-[7px] md:ps-5 py-[3px] ps-[13px] pe-[5px] md:pe-0 flex gap-2 items-center">
                            Read more{" "}
                            <span className="md:p-1 p-[2px] bg-white rounded-full text-black me-0 md:me-2 text-[15px] md:text-lg">
                              <GoArrowRight />
                            </span>
                          </button>
                        </Link>
                      </div>
                      <div className="col-span-3 sm:block hidden">
                        <Image
                          className="w-[150px] ms-auto"
                          src={urlFor(item.hero.icon).url()}
                          alt="card img"
                          width={200}
                          height={200}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              


              <div className="lg:col-span-1 lg:order-2"></div>
              <div className="lg:col-span-3  lg:order-3 order-1">
                <h2 className="text-30px md:text-white text-color-1  font-mono font-semibold mb-[20px] lg:mb-10">
                  Filters
                </h2>
                <div className="Filters_main_btn flex flex-wrap gap-3 ">
                  {combinedArray.map((uniqueEl: any, index: any) => (
                    <h6
                      key={index}
                      className={`${classes.Filters_btn} ${selectedCategories.includes(uniqueEl) ? "bg_color_green" : ''}`}
                      onClick={() => handleCategoryClick(uniqueEl)}
                    >
                      {uniqueEl}
                    </h6>
                  ))}
                </div>
              </div>

            
            </div>
          </div>
          <div className={`${classes.Footer_Img} bg-black rounded-30px xl:mb-[100px] lg:mb-[80px] md:mb-[55px] mb-[30px] py-[46px] px-[20px] md:px-[55px] relative flex items-center`}>
                        <div className={`${classes.Zest_symbol_white} w-full absolute top-[27px] left-0 right-0`}>
                            {/* <Image src={logo} alt='icon' className='mx-auto' width={50} height={50} /> */}

                           
                            <Image src={urlFor(data.linkSectionIcon).url()} alt='icon' className='mx-auto' width={50} height={50} />
                        </div>
                        <div className={`${classes.Footer_Link} max-w-max ms-auto relative  z-10`}>
                            {/* <Link href="#" className="border-b border-color-6  font-light w-max text-md lg:text-lg flex items-center gap-1  text-white"> Older posts<GoArrowRight /> </Link> */}
                            <Link href={data.linkSection.linkUrl} className="border-b border-color-6  font-light w-max text-md lg:text-lg flex items-center gap-1  text-white"> {data.linkSection.linkName}<GoArrowRight /> </Link>
                        </div>
                    </div>
        </div>
      </div>
    </>
  );
}

export default Filters;




