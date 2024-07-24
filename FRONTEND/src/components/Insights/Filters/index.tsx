import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./Filters.module.css";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { urlFor } from "../../../../lib/sanity.client";
import { FiltersType } from "../../../../lib/interface";
import AOS from 'aos'
import 'aos/dist/aos.css';

function Filters({ data }: { data: FiltersType }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, [])

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const arrayElements = data.collection.map((item) => item.hero.keywords || []);
  const combinedArray = arrayElements.reduce((acc, curr) => {
    const uniqueElements = new Set(acc);
    curr.forEach((element: any) => uniqueElements.add(element));
    return Array.from(uniqueElements);
  }, []);

  const newArray = [...combinedArray];
  const uniqueArray = Array.from(new Set(newArray.map(item => item.trim())));

  uniqueArray.unshift("All");


  const handleCategoryClick = (category: string) => {
    setSelectedCategories((prevCategories) => {
      if (category === "All") {
        return [];
      }

      const updatedCategories = prevCategories.includes(category)
        ? prevCategories.filter((prevCategory) => prevCategory !== category)
        : [...prevCategories, category];
      setCurrentPage(1);
      return updatedCategories;
    });
  };

  const filteredProducts = data.collection.filter((item) =>
    selectedCategories.length === 0
      ? true
      : selectedCategories.some((selectedCategory) =>
        item.hero.keywords?.includes(selectedCategory)
      )
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredProducts.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    window.scrollTo(0, 0);
  }

  return <div className="main_padding">
    <div className="main_container">
      <h2 className={`${classes.filter_heading} font-mono font-semibold text-color-1`} data-aos="fade">
        {data.heading}
      </h2>
    </div>

    <div className="main_container">
      <div className={`${classes.Filters} relative`} data-aos="fade-up">
        <div className={`${classes.Filters_img} bg-color-1 h-[450px] sm:h-[455px] min-tb:max-tb:h-[455px] md:h-[590px]  rounded-[15px] md:rounded-[20px] lg:rounded-30px absolute top-0 w-full `}
        ></div>

        <div className={`${classes.Filters_box} relative z-10 grid lg:grid-cols-12`}>
          <div className="lg:col-span-8 min-tb:max-tb:mt-[30px] md:px-0 mt-[22px] sm:mt-0 px-[20px] lg:order-1 order-2">
            {currentPosts.map((item, index: number) => (
              <div className="my-10" key={index} data-aos="fade-up">
                <div
                  className={` ${classes.insight_box} grid sm:grid-cols-12 items-end ${index % 2 === 0
                    ? "shadow-dark-pink-left"
                    : "shadow-blue-left"
                    } max-w-[1345px] mx-auto rounded-[15px] md:rounded-[20px] lg:rounded-30px border border-black bg-white text-color-1`}
                >
                  <div className="sm:col-span-9">
                    <div className="flex flex-row md:gap-[15px] sm:gap-[10px] gap-[5px] flex-wrap">
                      {item.hero.keywords?.map(
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
                    <h2 className="font-mono font-semibold mb-6 lg:mt-8 md:mt-[20px] mt-[10px]">
                      {item.hero.heading}
                    </h2>
                    <Link href={`/insights/${item.slug.current}`}>
                      <button className="arrowbtn_hover bg-color-1 group hover:bg-white hover:text-color-1 border border-color-1 rounded-full text-white sm:text-base text-[12px] md:py-[4px] md:ps-5 py-[4px] ps-[13px] pe-[4px] md:pe-0 flex gap-2 items-center">
                        Read more{" "}
                        <span className="md:p-1 p-[2px] group-hover:bg-color-1 group-hover:text-white bg-white rounded-full text-black me-0 md:me-[4px] text-[18px] md:text-[19px]">
                          <GoArrowRight />
                        </span>
                      </button>
                    </Link>
                  </div>
                  <div className="col-span-3 relative">
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
          <div className="lg:col-span-3 md:px-0 pt-6 md:pt-0 px-[20px] lg:order-3 order-1 lg:text-right">
            <h2 className={`${classes.filter_text} text-white font-mono font-semibold`} data-aos="fade">
              Filters
            </h2>
            <div className="Filters_main_btn flex lg:justify-end flex-wrap gap-3" data-aos="fade-up">
              {uniqueArray?.map((uniqueEl: any, index: any) => (
                <h6
                  key={index}
                  className={`${classes.Filters_btn} nomalbtn_hover ${index === 0 && selectedCategories.length === 0
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

      <div className={`${classes.navigate_box} bg-black rounded-[15px] md:rounded-[20px] lg:rounded-30px relative grid grid-cols-3`} data-aos="fade-up">

        <div className={`${classes.next_text_left} relative  mb-[2px] self-center z-10`} >
          {currentPage > 1 && (
            <button onClick={handlePreviousPage} className={`${classes.navigate_links} inline border-b border-color-6 font-light text-white`}>
              {"Newer Posts"}
            </button>
          )}
        </div>

        <div className="w-full self-center mx-auto" data-aos-delay="250">
          <Image
            src={urlFor(data.linkSectionIcon).url()}
            alt="icon"
            className="mx-auto xl:max-w-[52px] lg:max-w-[45px] md:max-w-[35px] sm:max-w-[28px] max-w-[20px] w-full"
            width={50}
            height={50}
          />
        </div>
        <div className={`${classes.next_text_right}  relative ms-auto mb-[2px] self-center z-10`} >
          {indexOfLastPost < filteredProducts.length && (
            <button onClick={handleNextPage} className={`${classes.navigate_links}  inline border-b border-color-6 font-light text-white`}>
              {"Older Posts"}
            </button>
          )}
        </div>
      </div>

    </div>
  </div>

}

export default Filters;
