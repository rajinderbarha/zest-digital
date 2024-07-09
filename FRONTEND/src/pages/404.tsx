import AOS from 'aos'
import 'aos/dist/aos.css';
import Link from 'next/link';

import { useEffect } from 'react';

export default function Custom404() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return <>
          <div className="pag404 mb-28 overflow-hidden">
            <div className=" flex flex-col items-center lg:gap-[20px] gap-[10px] main_padding justify-center w-full bg-white " data-aos="fade-up">
              <h1 className="text-[20px] md:text-[30px] font-mono font-semibold text-center lg:text-[50px] text-color-1" >404 | Page Not Found</h1>
              <Link href={'/'} className="text-[12px] md:text-[16px] lg:text-[20px] font-lato underline hover:no-underline hover:text-color-1 text-center text-color-9" >visit homepage</Link>
            </div>
          </div>
  </>
}
