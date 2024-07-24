import classes from "./learnToGrow.module.css";
import Image from "next/image";
import Logo_moving from "@/common/Logo_moving";
import Growth_engine from "@/common/Growth_engine";
import { urlFor } from "../../../../lib/sanity.client";
import { Resources } from "../../../../lib/interface";
function LearnToGrow({ data, setSelectedFileUrl }: { data: Resources, setSelectedFileUrl: (url: string) => void }) {

// console.log(data);

  return (
    <>
      <div className="main_padding">

        <div
          className={`${classes.SingleIntro}  main_container  h-100 rounded-[15px] md:rounded-[20px] lg:rounded-30px`} data-aos="fade-up"
        >
          <div
            className={`${classes.single_container}  max-w-[1335px] mx-auto  pt-[88px] min-tb:max-tb:pb-[400px] md:pb-[564px] pb-[350px] relative`}
          >
            <div
              className={`${classes.grow_img}  absolute max-w-[200px] md:max-w-[250px] lg:max-w-[300px] lg:max-h-[300px]` } 
            >

              <Image
                src={urlFor(data.hero.image).url()}
                alt="img"
                width={300}
                height={300}
              />
            </div>
            <div className="text-white font-mono text-center max-w-[1172px] mx-auto min-tb:max-tb:px-[50px] p-6 md:p-10 " data-aos="fade-up" >
              <h2 className={`${classes.learnToGrow_title}  font-semibold`}>
                {data.hero.title}
              </h2> 
              <p className={`${classes.learnToGrow_desc} `} >
                {data.hero.description}
              </p>
            </div>
            <div className="md:max-w-[60px] max-w-[40px] mx-auto group ">
              <a href="#tools  ">

                <Image
                  src={urlFor(data.hero.icon).url()}
                  alt="img"
                  width={60}
                  height={60}
                  className="mx-auto group-hover:hidden min-tb:max-tb:w-[55px]"
                />
                <Image
                  src={urlFor(data.hero.hovericon).url()}
                  alt="img"
                  width={60}
                  height={60}
                  className="mx-auto hidden group-hover:block min-tb:max-tb:w-[55px]"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="main_padding">
          <div className=" relative max-w-[1335px] mx-auto -mt-[250px] md:-mt-[279px] " id="tools">
            <h2 className={`${classes.tools_title} font-mono font-semibold  text-white mx-auto text-center`} data-aos="fade">
              Tools
            </h2>
            <div className={`${classes.cards_div} grid grid-cols-1  min-tb:max-tb:grid-cols-1  md:grid-cols-2  font-mono mx-auto `}>
              {data.tool.map((item: any, index: number) => {
                const data = {
                  ...item,
                  buttonLink: `/resources?popup=${item.buttonLink}`,
                  allFilesUrl: item.uploadFileUrl,

                };
                return <Growth_engine
                  key={index}
                  props={data}
                  has_image={false}
                  shadow_right={index % 2 === 0}
                  selectedFile={(fileUrl: string) => setSelectedFileUrl(fileUrl)}
                  // selectedFile={(fileUrl: string) => setSelectedFileUrl("https://docs.google.com/presentation/d/1odVHXhcJ_HWmpAiTdWyFO96dvxS9Vh6fkhIjyBWpalE/edit?usp=sharing")}
                />
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes.resources_logo} `}>
        <Logo_moving LogoMovdata={data.brandList} />
      </div>
      
    </>
  );
}

export default LearnToGrow;
