import { useEffect } from 'react';

const ChatBox: React.FC = () => {
    useEffect(() => {
        // console.log("Attempting to load HubSpot script...");

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
                // console.log("HubSpot script loaded successfully.");
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

