import Growth_engine from "@/common/Growth_engine";
import classes from './Growths.module.css'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Growths({ data, otherSolHeading }: any) {
  const router = useRouter();
  const [firstTwoItems, setFirstTwoItems] = useState<any[]>([]);

  useEffect(() => {
    if (!router.isReady) return;    //isReady property that indicates if the router fields are ready.
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
      firstTwo = data.reverse().slice(0, 2)
    } else if (growth_tracker) {
      firstTwo = data.reverse().slice(0, 2).reverse()
    }
    setFirstTwoItems(firstTwo);
  }, [router.isReady, router.query.slug, data]);

  return (
    <>
      {data.length > 0 && (
        <div className="Growths max-w-[1365px] mx-auto px-5 mt-[70px] min-tb:max-tb:mt-[106px] overflow-hidden">
          <div className={`${classes.growths_container} `}>
            <h2 className={`${classes.growth_heading}  font-mono font-semibold mx-auto text-center`} data-aos="fade">
              {otherSolHeading}
            </h2>
            <div className={`${classes.growth_card_div} font-mono mx-auto grid `}>

              <div className={`${classes.card_divider} grid grid-cols-1 min-tb:max-tb:grid-cols-1 md:grid-cols-2  max-w-[1345px] mx-auto `}>
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
