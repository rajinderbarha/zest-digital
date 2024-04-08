import React, { useState } from 'react';
import { Collapse } from 'antd';
import arrow_image from '../../assets/images/arrow.svg';
import Image from 'next/image';
// import './Growth_Accordion.css';

const { Panel } = Collapse;

// If your component accepted props, you would define their types here.
// interface GrowthAccordionProps {
// }

const GrowthAccordion: React.FC = () => {
    const [activeKey, setActiveKey] = useState<string[]>(['1']);

    const onPanelChange = (key: string | string[]) => {
        setActiveKey(Array.isArray(key) ? key : [key]);
    };

    // Check if the panel is active to rotate the icon
    const isActive = (key: string): boolean => activeKey.includes(key);

    // Generate the inline style for rotation based on panel state
    const getIconRotationStyle = (key: string): React.CSSProperties => ({
        transform: `rotate(${isActive(key) ? '0deg' : '90deg'})`,
        transitionDuration: `0.3s`,
    });

    // Construct custom panel header
    const customHeader = (text: string, key: string) => (
        <div className="custom-header">
            {text}
            <Image src={arrow_image} alt="" style={getIconRotationStyle(key)} className='arrow_img' />
        </div>
    );

    return (
        <>
            <div className="app-container max-w-[1520px] mx-auto  mt-[80px] mb:mt-[212px] ">
                <div className="font-mono font-semibold text-30px md:text-45px text-center text-color-1 mb-[50px] md:mb-[115px]">Frequently Asked Questions</div>
                <Collapse accordion onChange={onPanelChange} activeKey={activeKey} expandIconPosition="right">
                    <Panel header={customHeader('What investment is required for Growth Engine?', '1')} key="1" showArrow={false} className="panel-style">
                        <p className="panel-data">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos reiciendis dolorum perspiciatis pariatur exercitationem temporibus, voluptatibus nostrum error voluptatum vel accusantium asperiores, provident tenetur numquam praesentium, ipsam architecto eius quo.</p>
                    </Panel>
                    <Panel header={customHeader('Panel 2', '2')} key="2" showArrow={false} className="panel-style">
                        <p className="panel-data">Content for Panel 2</p>
                    </Panel>
                    <Panel header={customHeader('Panel 3', '3')} key="3" showArrow={false} className="panel-style">
                        <p className="panel-data">Content for Panel 3</p>
                    </Panel>
                </Collapse>
                <div className="text-center">
                    <button className='font-mono bg-color-1 border border-color-1 text-[#c0c0c0] text-base md:px-[25px] px-[20px] py-[5px] md:py-[10px]  mt-[20px] md:mt-[60px] rounded-full'>Speak to our team</button>
                </div>
            </div>
        </>
    );
}

export default GrowthAccordion;
