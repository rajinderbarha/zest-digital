import { useEffect } from 'react'
import classes from './Singalcasebanner.module.css'
import { SingalcasebannerProps } from '../../../../lib/interface'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Singalcasebanner({ data }: SingalcasebannerProps) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const { title, upperTitle } = data
    return <div className={`${classes.Singalcasebanner} main_padding `}>
        <div className='main_container'>
            <div className="grid max-w-[1680px] ms-auto" data-aos="fade-up">
                <div className={`${classes.banner_text} `}>
                    <h2 className='font-semibold font-mono bg-light-green-1' >{upperTitle}</h2>
                    <h1 className='font-mono font-semibold'>{title}</h1>
                </div>
            </div>
        </div>
    </div>

}

export default Singalcasebanner