import { useEffect } from 'react';

const ChatBox: React.FC = () => {
    useEffect(() => {
        // Create and append the HubSpot script
        const script = document.createElement('script');
        script.src = '//js-eu1.hs-scripts.com/26290409.js';
        script.type = 'text/javascript';
        script.id = 'hs-script-loader';
        script.async = true;
        script.defer = true;

        // Append the script to the document head
        document.head.appendChild(script);

        // Cleanup function to remove the script if the component unmounts
        return () => {
            const existingScript = document.getElementById('hs-script-loader');
            if (existingScript) {
                document.head.removeChild(existingScript);
            }
        };
    }, []); // Empty dependency array ensures this effect runs once on mount and once on unmount

    return null; // This component doesn't render anything
};

export default ChatBox;
