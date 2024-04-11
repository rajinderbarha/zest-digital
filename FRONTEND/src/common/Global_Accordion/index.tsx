import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import arrow_image from '../../assets/images/arrow.svg'; 
import Image from 'next/image';

const Global_Accordion: React.FC = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div className="app-container max-w-[1520px] mx-auto  mt-[80px] mb:mt-[212px] ">
        <div className="font-mono font-semibold text-30px md:text-45px text-center text-color-1 mb-[50px] md:mb-[115px]">Frequently Asked Questions</div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='mb-[10px]'>
                <AccordionSummary
                    expandIcon={
                        <div className="arrow_img">
                            <Image src={arrow_image} alt="" className='arrow_img' />
                        </div>
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className="custom-header"
                >
                    <Typography sx={{ width: '80%', flexShrink: 0 }} className='font-mono'>
                        Why would you re-design your website?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='panel-data font-mono'>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='mb-[10px]'>
                <AccordionSummary
                    expandIcon={
                        <div className="arrow_img">
                            <Image src={arrow_image} alt="" className='arrow_img' />
                        </div>
                    }
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    className="custom-header"
                >
                    <Typography sx={{ width: '80%', flexShrink: 0 }} className='font-mono'>
                        General settings
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='panel-data font-mono'>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='mb-[10px]'>
                <AccordionSummary
                    expandIcon={
                        <div className="arrow_img">
                            <Image src={arrow_image} alt="" className='arrow_img' />
                        </div>
                    }
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    className="custom-header"
                >
                    <Typography sx={{ width: '80%', flexShrink: 0 }} className='font-mono'>
                        General settings
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='panel-data font-mono'>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <div className="text-center">
                    <button className='font-mono bg-color-1 border border-color-1 text-[#c0c0c0] text-base md:px-[25px] px-[20px] py-[5px] md:py-[10px]  mt-[20px] md:mt-[60px] rounded-full'>Speak to our team</button>
                </div>
        </div>
    );
}

export default Global_Accordion;