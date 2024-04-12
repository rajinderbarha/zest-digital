import React from 'react'
import classes from './SingleInsightPage.module.css'
import Image from 'next/image'
import grow_down from '../../assets/images/grow_down.png'
import single_insight_page from '../../assets/images/single_insight_page.png'
import Zest_symbol_white from '../../assets/images/Zest_symbol_white.png'
import Funnel_icon_V2 from '../../assets/images/Funnel_icon_V2.png'
import { GoArrowRight } from "react-icons/go";
import { urlFor } from '../../../lib/sanity.client'; //@ts-ignore
import BlockContent from "@sanity/block-content-to-react";
import Link from 'next/link'

function SingleInsightPage({data}:any) {
    console.log("singleInsights", data)
    return (
        <>
            <div className="SingleInsightPage mt-[50px] md:mt-[100px] px-[15px]">
                <div className="main_container  ">
                    <div className={`${classes.bg_image} title-box xl:px-[100px] lg:px-[70px] md:px-[50px] px-[30px] xl:pb-[185px] lg:pb-[155px] md:pb-[130px] pb-[100px] xl:pt-[65px] lg:pt-[55px] md:pt-[45px] pt-[30px] rounded-30px`}>
                        <p className="font-mono lg:text-35px md:text-30px text-25px font-semibold text-color-7 ">{data.hero.keywords[0]}</p>
                        <h2 className="font-mono font-semibold xl:text-55px lg:text-50px md:text-40px text-35px text-white max-w-[798px] xl:mt-[45px] lg:mt-[30px] md:mt-[25px] mt-[20px] mb-[20px]">{data.hero.heading}</h2>
                        <div className="md:max-w-max max-w-[35px]">
                            <Image src={urlFor(data.hero.icon).url()} alt='growth icon' width={70} height={70}/>
                        </div>
                    </div>
                    <div className={`${classes.Block_Content} mt-[74px] max-w-[1420px] mx-auto grid gap-[40px] md:gap-[100px] px-[5px]`}>

                    <BlockContent blocks={data.content} projectId={"dexthfb7"} dataset={"production"}/>

                        {/* <div className="How_Did_We_Get_Here">

                            <div className=" mb-[33px]">
                                <h2 className={`${classes.sub_title}`}>How Did We Get Here?</h2>
                            </div>
                            <div className={`flex flex-col gap-6 font-lato text-lg`}>
                                <p>Businesses have taken a real beating over the past few years with numerous challenges greatly influencing the growth achieved by businesses.</p>

                                <p>Now, this isn’t another article rambling on about the impact of Brexit and COVID-19 and how these present new challenges for business owners...</p>

                                <p>No - we’re focusing on the ever-evolving digital marketing landscape!</p>

                                <p>In 2021, we saw online activity become paramount in the success of businesses. Constant updates from Google meant that a lack of strategy placed business owners on the back foot, whilst others were propelled to the top spots!</p>

                                <p>For those who haven’t considered how this has impacted businesses, we’ve chosen our top digital marketing trends for 2022 to help you traverse this environment to take that first step in setting up your business for growth. Read on further to find out more.</p>
                            </div>
                        </div>.
                        <div className="SEO_Trends_in_2022 grid gap-[50px] md:gap-[100px]">
                            <div className="">

                                <h2 className='md:text-45px text-30px font-semibold font-mono bg-color-7 w-max md:mb-[33px] mb-[13px]'>SEO Trends in 2022</h2>
                                <h2 className={`${classes.sub_title} md:mb-[43px] mb-[13px]`}>User Intent is Key</h2>
                                <div className={`${classes.list_sub_items}`}>
                                    <p>Distinguishing the intent of a user can seem lie a mammoth task. The key to understanding the intent of your users lies in the language used. This provides a look through the
                                        keyhole and enables you to understand the intention behind their action.</p>
                                    <p>Intent can vary depending on the stage of the buying cycle of your users. To keep it straightforward the two key queries a</p>
                                    <p>Informational - To acquire information</p>
                                    <p>Commercial - To take action</p>

                                    <p>‘Those who are at the early stages of purchasing will look for information for their purchasing decision. In this instance, the language used by this audience will be broad, and
                                        less specific</p>

                                    <p>Once collected, users will use more striking language once a decision is ready to be made since they're now looking to take action.</p>

                                    <p>None of this is anything revolutionary - understanding user intent has been a core foundation of any good SEO strategy for years. Where this comes into play is by creating
                                        engagement. If on-page content can be tailored towards what the user is looking for, then they are more likely to engage or take action.</p>

                                    <p>We're beginning to see search engines push SERP features even more. Think of those non-traditional results you see when using Google: People Also Ask or FAQ Snippets.
                                        Some of these features are already featuring 25% more often than last year within search engine results. These are examples of features that enhance the experience by
                                        providing further means to engage with search engine results.</p>

                                    <p>Understanding the intent of your audience and tailoring the content to be suitable for these features provides users with another touchpoint for your business.</p>

                                    <p>How powerful would it be if you can anticipate what your prospective customers need?</p>
                                </div>
                            </div>
                            <div className="">
                                <h2 className={`${classes.sub_title} md:mb-[43px] mb-[13px]`}>Search Engines are Evolving</h2>
                                <div className={`${classes.list_sub_items}`}>

                                    <p>We're in the midst of a major change in the way we use search engines. Traditionally, we've used specific keywords for our search queries, however, these do not always
                                        reflect the way people speak.</p>

                                    <p>Typical search queries will tend to be brief to enable us to access the desired information as soon as possible, whilst these queries tend to be direct, they tend to get the
                                        results we want!</p>

                                    <p>New and innovative technologies such as the introduction of Alexa and Google Assistant are fueling these changes as they become commonplace in most households. As a
                                        result, people are utilising voice search more and more when it comes to search queries. Google estimates that 27% of the global population utilise voice search.</p>

                                    <p>The way we search for a query traditionally within search engines is uniquely different than if we were speaking to a robot within our living room. Naturally, if we were as blunt
                                        as we are within search engines, it wouldn't get us very far with others! As a result, content needs to shift to fit this new format.</p>

                                    <p>‘Whilst it's easy to say consumers are becoming lazy by doing this, the introduction of new innovative tech is the main driving force behind this digital marketing trend. As it
                                        becomes more integrated within our lives, we'll only see more of this in the future.</p>

                                    <p>An example of this that will become more prevalent in the future is visual search. This differs from the current image search users will be familiar with in Google Images. For e-
                                        Commerce sites, this has huge applications offering new prospective customers the chance to find your products much more efficiently.</p>
                                </div>
                                <div className="lg:max-w-max md:max-w-[600px] mx-auto max-w-[300px] mt-[56px]">
                                    <Image src={single_insight_page} alt='' className='mx-auto' />
                                </div>
                            </div>
                            <div className="">
                                <h2 className={`${classes.sub_title} md:mb-[43px] mb-[13px]`}>User Experience remains Fundamental</h2>
                                <div className={`${classes.list_sub_items}`}>
                                    <p>Ensuring that your prospective customers have a positive experience on your site is fundamental, after all, this could be their frst interaction with you and therefore should be
                                        considered a priority similar to your customer service team!</p>
                                    <p>2021 stressed the importance of this with recent Google updates emphasising the importance of page speed and other factors which influence overall user experience. :
                                        Without getting too technical, the focus was on ensuring users could find the information that they were looking for efficiently and securely. :</p>
                                    <p>Improving page speed can get quite technical, yet is so important. Relying on older technology to reach customers at the right time can create issues by not providing a :
                                        convenient solution.</p>
                                    <p>If a page takes too long to load, how do you think a user may react? Google has caught onto this now and will reward pages with a better user experience, improved rankings. ]
                                        result in more traffic, more traffic wil lead to more leads for your business,</p>
                                </div>
                            </div>
                        </div>
                        <div className="PPC_Trends_in_2022 grid gap-[50px] md:gap-[100px] mt-[50px]">
                            <div className="">
                                <h2 className='md:text-45px text-30px font-semibold font-mono bg-color-7 w-max md:mb-[33px] mb-[33px]'>PPC Trends in 2022</h2>
                                <h2 className={`${classes.sub_title} md:mb-[43px] mb-[13px]`}>User Journey Matters</h2>
                                <div className={`${classes.list_sub_items}`}>
                                    <p>Google Ads have proven to be an effective lead generation tool for many. Placed prominently among search results, ads give businesses the chance to remain visible in front of
                                        their target audience, at the right moment. Over the years, the format for these ads has changed to include display and shopping campaigns making this an applicable solution
                                        forall!</p>
                                    <p>Although not everyone uses these...</p>
                                    <p>‘One message may be effective for one customer, but not the next. Generic blanket ads will not get the response you're looking for as they may not resonate with your whole
                                        audience!</p>
                                    <p>But why is this? You may see results from your campaigns that lead you to believe that they are working: but are you maximising the opportunities?</p>
                                    <p>‘The position of your audience within the buying process is critical. We like to use the funnel analogy to picture this, as this helps ensure you are impacting users at different i
                                        stages.</p>
                                    <div className="PPC_Trends_in_2022_image flex md:flex-row flex-col items-center md:justify-center mt-[72px] mb-[107px] gap-[10px] md:gap-[79px]">
                                        <p className='font-mono text-35px md:text-40px lg:text-45px font-semibold text-color-1 leading-[40px] md:leading-[75px]  '>Awareness <br /> Interest <br /> Desire <br />Action</p>
                                        <div className="md:max-w-max max-w-[200px]">
                                            <Image src={Funnel_icon_V2} alt='md:max-w-max max-w-[200px]' />
                                        </div>
                                    </div>
                                    <p>You'll have the largest audience right at the top of the funnel ~ the goal here is to grab their attention and create that initial touchpoint. Powerful copy, snappy promotions
                                        and a fluid experience can help make this a positive interaction. Your typical search ad excels here!</p>
                                    <p>On the other hand, imagine a user decides to search for alternatives, the same ad, later on, isn't going to have the same impact. As we move down the funnel, our audience
                                        size will become smaller but they ll be more likely to take the desired actions. In this instance, a constant touchpoint in the form of a remarketing display ad can have huge
                                        upside potential! By remaining at the forefront of their search, your brand becomes synonymous with that search query.</p>
                                </div>
                            </div>
                            <div className="">
                                <h2 className={`${classes.sub_title} md:mb-[43px] mb-[13px]`}>Diversification in Platforms</h2>
                                <div className={`${classes.list_sub_items}`}>
                                    <p>Your prospective customers are proficient across multiple platforms, gone are the days of users sticking to a single platform, their digital presence is now more important than
                                        ever!</p>

                                    <p>Over the past few years, emerging platforms such as TikTok and some traditional choices such as Linkedin and Twitter have been hot topics as they represent further
                                        ‘opportunities to connect with potential customers</p>

                                    <p>Now we're not advocates for a hail Mary approach, spending on every platform available. Creating clear and analytically-driven personas helps to identify opportunities for
                                        businesses as it will become apparent some users prefer different platforms. For example, if your ideal customer is a key stakeholder within a business, such as a director or
                                        ‘within management, Linkedin offers tailored targeting tools that will be more beneficial than say TikTok.</p>

                                    <p>We've seen people recently move between platforms due to new emerging technologies, but also attitudes towards these platforms shift. For example, Facebook saw its fair
                                        share of issues concerning trust over the past few years, nonetheless, it remains a heavyweight. That said, diversification across platforms is more important than ever since
                                        we can see how this landscape can shift so quickly.</p>

                                    <p>Different platforms have varying benefits. YouTube as an example offers a collection of formats that provide a more engaging experience than typical search ads. Thinking back
                                        to our previous point, ads here will be better suited for users at the top of the funnel as it's a unique chance to get across your message in a creative format.</p>
                                </div>
                            </div>
                            <div className="">
                                <h2 className={`${classes.sub_title} md:mb-[43px] mb-[13px]`}>Brands create Trust</h2>
                                <div className={`${classes.list_sub_items}`}>
                                    <p>Ads can be an extremely powerful tool when utilised by businesses to reach their target audience. Whether your business is relatively new, or established, ads provide the
                                        ‘opportunity to reach users at the moment they are searching for your product/service. A caveat for newer businesses can be developing this trust or credibility within their
                                        industry - essentially being the new kid on the block! So how can a business navigate this?</p>

                                    <p>Amazon has become a behemoth in recent years, dominating the eCommerce space. Over the past few years, the option to advertise products on their site has become
                                        increasingly popular, but why?</p>

                                    <p>The fact that users on the site are ready to make a purchase is one thing, however, there is so much faith and trust in a household name such as Amazon, which gives buyers
                                        that added sense of security when making a purchase.</p>

                                    <p>As for PPC trends, the plethora of options is becoming more diverse: shopping, display and video ads are all examples of different formats available for advertisers. In
                                        ‘comparison to other platforms such as Facebook and Linkedin, this is nothing groundbreaking, however, the intent of the audience is more commercially driven, hence the
                                        migration to these platforms.</p>

                                    <p>As a result, costs are rising in comparison, close to 50% year on year!</p>

                                    <p>We see this looking to continue throughout 2022, maybe even more so as it becomes increasingly popular among smaller businesses.</p>
                                </div>
                            </div>
                        </div>
                        <div className="Grow_Your_Business grid gap-[50px] md:gap-[100px] mt-[50px]">
                            <div className="">
                                <h2 className='md:text-45px text-30px font-semibold font-mono bg-color-7 w-fit mb-[33px] md:mb-[58px]'>Grow Your Business through Growth Marketing</h2>
                                <div className={`${classes.list_sub_items}`}>
                                    <p>This list is only the tip of the iceberg, providing some starting points to consider in order to grow your business in 2022. It can be a daunting landscape to traverse for the first
                                        time especially considering how quickly this environment shifts</p>

                                    <p>At Zest Digital, we design, build, and integrate with your marketing stack, and then optimise for maximum conversions. First, though, jump over to our Growth Calculator to
                                        calculate your goals for digital marketing.</p>

                                    <p>‘Once you know what you need to achieve, we can help you to make it a reality. If you're ahead of the game, book a call in with our Growth Experts.</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className={`${classes.Footer_Img} bg-black rounded-30px xl:mb-[245px] lg:mb-[200px] md:mb-[150px] mb-[100px] py-[46px] px-[20px] md:px-[55px] xl:mt-[120px] lg:mt-[95px] md:mt-[70px] mt-[50px] relative flex items-center`}>
                        <div className={`${classes.Zest_symbol_white} w-full absolute top-[27px] left-0 right-0`}>
                            <Image src={urlFor(data.linkSection.icon).url()} alt='icon' className='mx-auto' width={50} height={50} />
                        </div>
                        <div className={`${classes.Footer_Link} max-w-max ms-auto relative  z-10`}>
                            <Link href={data.linkSection.linkUrl} className="border-b border-color-6  font-light w-max text-md lg:text-lg flex items-center gap-1  text-white"> {data.linkSection.linkName}<GoArrowRight /> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleInsightPage