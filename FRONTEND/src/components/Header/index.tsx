import React from 'react';
import Image from 'next/image';
import bars from '../../assets/images/bars-svgrepo-com.svg';
import { urlFor } from '../../../sanity.client';
import Link from 'next/link';

export interface HeaderType {
  logo: any;
  navItem: { buttonName: string; buttonLink: string }[];
  button: { navName: string; navLink: string };
}


const Header = ({ data }: { data: HeaderType[] }) => {
  console.log("-----------", data);

  const navMenu = {
    menu: {
      simple: 'flex gap-5 text-base font-mono border-black',
      responsive1: 'screen-1-max:hidden screen-1-max:flex-col screen-1-max:gap-0 screen-1-max:text-lg screen-1-max:absolute screen-1-max:top-90px screen-1-max:-right-1/3 screen-1-max:w-1/3 screen-1-max:z-10',
      responsive2: 'sm-max:w-auto screen-1-max:bg-color-1 screen-1-max:text-white screen-1-max:ps-5 screen-1-max:rounded-l-lg screen-1-max:h-[89vh]',
    },
    linkclass: 'screen-1-max:border-b screen-1-max:border-color-2 screen-1-max:ps-2 screen-1-max:pe-20 screen-1-max:py-3',
    btn: 'screen-1-max:block mt-20 hidden mx-auto font-mono text-base px-21px h-10 bg-white text-color-1 rounded-full hover:bg-color-1 hover:text-white hover:border-white border border-color-1 sm-max:mx-2',
  };


  return (
    // <div className=' mx-auto flex justify-between items-center pt-25px pb-21px lg:px-20 2xl:px-100px md:px-11 sm-max:pt-4 sm-max:pb-3 px-8 relative'>
  <>
        {data?.map((item) => (
  <div key={`header_${item.logo._id}`} className=' mx-auto flex justify-between items-center pt-25px pb-21px max-w-[1720px] w-full px-5 relative'>
    <div className='flex items-center gap-68px '>
      <div className='screen-1-max:w-24 lg:w-28 xl:w-auto'>
        <Link href={"/"}>
          <Image src={urlFor(item.logo).url()} alt="Site Logo"  width={112} height={51} />
        </Link>
      </div>
      <div id="nav-menus" className={`${navMenu.menu.simple} + ${navMenu.menu.responsive1} + ${navMenu.menu.responsive2}`}>
        {item.navItem.map((navItem, index) => (  
          <Link href={navItem.buttonLink} key={`navItem_${index}`} className={navMenu.linkclass}>{navItem.buttonName}</Link>
        ))}
      </div>
    </div>
    <div className="">
      <Link href={item.button.navLink} className='screen-1-max:hidden font-mono text-base px-21px h-10 bg-color-1 text-white rounded-full  hover:bg-white hover:text-color-1 border border-color-1'>{item.button.navName}</Link>
    {/* <FontAwesomeIcon icon={faBars} transform="grow-10" className='screen-1-max:block hidden' onClick={() => showMenu()} /> */}
      <Image src={bars} alt="bars" className='screen-1-max:block hidden screen-1-max:w-[23px] screen-1-max:h-[23px]' />
    </div>
  </div>
))}

  </>
  )
};

export default Header;








