// import { useEffect } from 'react';

// const ChatBox: React.FC = () => {
//     useEffect(() => {
//         // Create and append the HubSpot script
//         const script = document.createElement('script');
//         script.src = '//js-eu1.hs-scripts.com/26290409.js';
//         script.type = 'text/javascript';
//         script.id = 'hs-script-loader';
//         script.async = true;
//         script.defer = true;

//         // Append the script to the document head
//         document.body.appendChild(script);

//         // Cleanup function to remove the script if the component unmounts
//         // return () => {
//         //     const existingScript = document.getElementById('hs-script-loader');
//         //     if (existingScript) {
//         //         document.head.removeChild(existingScript);
//         //     }
//         // };
//     }, []); // Empty dependency array ensures this effect runs once on mount and once on unmount

//     return null; // This component doesn't render anything
// };

// export default ChatBox;


import { useEffect } from 'react';
import Script from 'next/script';

const ChatBox: React.FC = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Verify if the script exists or not, add if it's not present
            if (!document.getElementById('hs-script-loader')) {
                const script = document.createElement('script');
                script.src = '//js-eu1.hs-scripts.com/26290409.js';
                script.type = 'text/javascript';
                script.id = 'hs-script-loader';
                script.async = true;
                script.defer = true;
                document.body.appendChild(script);
            }
        }
    }, []);

    return (
        <>
            <Script
                id="hs-script-loader"
                src="//js-eu1.hs-scripts.com/26290409.js"
                strategy="lazyOnload"
            />
        </>
    );
};

export default ChatBox;

