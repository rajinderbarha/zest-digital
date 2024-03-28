import React from 'react'
import Image from 'next/image';
import logo from '../../assets/images/zest-logo_vector.png'
import bars from '../../assets/images/bars-svgrepo-com.svg'
// function showMenu() {
//   let element = document.getElementById("nav-menus").style;
//   if (element.right.toString() != "0px" && element.right.length >= 0) {
//       element.display = "flex";
//       setTimeout(() => {
//           element.right = "0";
//           element.transition = "right 0.2s ease-out"
//       }, 1);
//   }

//   else {
//       element.right = "-360px";
//       element.transition = "right 0.2s ease-in"
//       setTimeout(() => {
//           element.display = "none";
//       }, 150);
//   }
// }

const Header = () => {

  const navMenu = {
    menu: {
      simple: 'flex gap-5 text-base font-mono  border-black ',
      responsive1: 'screen-1-max:hidden screen-1-max:flex-col screen-1-max:gap-0 screen-1-max:text-lg screen-1-max:absolute screen-1-max:top-90px screen-1-max:-right-1/3 screen-1-max:w-1/3 screen-1-max:z-10',
      responsive2: '/*sm-max:top-71px*/  sm-max:w-auto screen-1-max:bg-color-1 screen-1-max:text-white screen-1-max:ps-5 screen-1-max:rounded-l-lg screen-1-max:h-[89vh]',
    },
    linkclass: 'screen-1-max:border-b screen-1-max:border-color-2 screen-1-max:ps-2 screen-1-max:pe-20 screen-1-max:py-3',
    btn: 'screen-1-max:block mt-20  hidden mx-auto font-mono text-base px-21px h-10 bg-white text-color-1 rounded-full  hover:bg-color-1 hover:text-white hover:border-white border border-color-1 sm-max:mx-2',
  }



  return (
    // <div className=' mx-auto flex justify-between items-center pt-25px pb-21px lg:px-20 2xl:px-100px md:px-11 sm-max:pt-4 sm-max:pb-3 px-8 relative'>
    <div className=' mx-auto flex justify-between items-center pt-25px pb-21px max-w-[1720px] w-full px-5 relative'>

      <div className='flex items-center gap-68px  '>
        <div className='screen-1-max:w-24 lg:w-28 xl:w-auto'>
          <Image src={logo} alt="Site Logo" />

        </div>
        <div id="nav-menus" className={`${navMenu.menu.simple} + ${navMenu.menu.responsive1} + ${navMenu.menu.responsive2}`}>
          <a href="javscript:void(0);" className={navMenu.linkclass}>About</a>
          <a href="javscript:void(0);" className={navMenu.linkclass}>Solutions</a>
          <a href="javscript:void(0);" className={navMenu.linkclass}>Results</a>
          <a href="javscript:void(0);" className={navMenu.linkclass}>Insights</a>
          <a href="javscript:void(0);" className={navMenu.linkclass}>Resources</a>
          <button className={navMenu.btn}>Schedule a call</button>

        </div>
      </div>
      <div className="">
        <button className='screen-1-max:hidden font-mono text-base px-21px h-10 bg-color-1 text-white rounded-full  hover:bg-white hover:text-color-1 border border-color-1'>Schedule a call</button>
        {/* <FontAwesomeIcon icon={faBars} transform="grow-10" className='screen-1-max:block hidden' onClick={() => showMenu()} /> */}
        <Image src={bars} alt="bars" className='screen-1-max:block hidden screen-1-max:w-[23px] screen-1-max:h-[23px]' />
      </div>
    </div>
  )
}


export default Header