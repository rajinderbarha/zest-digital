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

// import { useEffect } from 'react';

// const ChatBox: React.FC = () => {
//     useEffect(() => {
//         // Adding hsConversationsSettings to the window object
//         (window as any).hsConversationsSettings = {
//             loadImmediately: true,
//             inlineEmbedSelector: "#my-chat-container",
//             enableWidgetCookieBanner: true,
//             disableAttachment: true,
//         };

//         // Load the HubSpot script on the client-side
//         const script = document.createElement("script");
//         script.src = "//js-eu1.hs-scripts.com/26290409.js"; // Replace XXXXXX with your HubSpot script ID
//         script.id = "hs-script-loader";
//         script.async = true;

//         // Check if the HubSpot script is already loaded
//         const existingScript = document.getElementById("hs-script-loader");
//         if (!existingScript) {
//             // Append the script to the body if it's not already there
//             document.body.appendChild(script);
//         }

//         // Clean up the script when the component unmounts
//         return () => {
//             const scriptElement = document.getElementById("hs-script-loader");
//             if (scriptElement) {
//                 scriptElement.remove();
//             }
//         };
//     }, []);

//     return (
//         <div style={{ position: "fixed", bottom: "40px", right: "40px", zIndex: "9999999999" }}>
//             <div id="my-chat-container"></div>
//         </div>
//     );
// };

// export default ChatBox;




import { useEffect } from 'react';

const ChatBox: React.FC = () => {
    useEffect(() => {
        console.log("Attempting to load HubSpot script...");

        if (typeof window !== 'undefined' && !document.getElementById('hs-script-loader')) {
            (window as any).hsConversationsSettings = {
                loadImmediately: true,
                enableWidgetCookieBanner: true,
                disableAttachment: true,
            };

            const script = document.createElement("script");
            script.src = "//js-eu1.hs-scripts.com/26290409.js"; // Replace with your HubSpot script ID
            script.id = "hs-script-loader";
            script.async = true;

            script.onload = () => {
                console.log("HubSpot script loaded successfully.");
            };

            script.onerror = () => {
                console.error("Error loading HubSpot script.");
            };

            document.body.appendChild(script);

            return () => {
                const scriptElement = document.getElementById("hs-script-loader");
                if (scriptElement) {
                    scriptElement.remove();
                }
            };
        }
    }, []);

    return null;
};

export default ChatBox;

