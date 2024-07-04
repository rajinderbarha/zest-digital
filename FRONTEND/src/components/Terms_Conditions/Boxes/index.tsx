import classes from './Boxes.module.css';
import { GoArrowRight } from 'react-icons/go';
import Link from 'next/link';

interface BoxesProps {
    title: string;
    smallDescription: string;
    buttonName: string;
    buttonLink: string;
    shadow_right: boolean;
}

const Boxes: React.FC<BoxesProps> = (props) => {
    const { title, smallDescription, buttonName, buttonLink } = props; 

    return (
        <div className={`${classes.boxes} ${props.shadow_right ? ` shadow-dark-pink-left ` : `shadow-blue-right`} w-full mx-auto lg:rounded-30px md:rounded-[20px] rounded-[15px] border border-black  bg-white text-color-1`} data-aos="fade-up">
            <div className="max-w-[446px] ">
                <h2 className={`${classes.box_title} text-40px font-semibold `}>{title || ''}</h2>
                <p className={`${classes.box_desc}  my-5 lg:pe-[80px] lg:mb-[45px]`}>{smallDescription || ''}</p>
                <div className="">
                    <Link href={`/terms-and-conditions/${buttonLink}`} 
                    className={`${classes.terms_btn} bg-color-1 rounded-full text-white text-[16px] group hover:bg-white hover:text-color-1 border border-color-1  w-fit flex gap-[8px] items-center`}>{buttonName || ''} <span className=' bg-white rounded-full text-black  group-hover:text-white group-hover:bg-color-1'><GoArrowRight /></span></Link>
                </div>
            </div>
        </div>
    );
};

export default Boxes;
