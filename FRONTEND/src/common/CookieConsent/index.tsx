

// components/CookieConsent.js
import CookieConsent from "react-cookie-consent";
import styles from './CookieConsent.module.css'; // Import your custom styles if any

const CookieConsentComponent = () => {
    return (
        <div className="body_padding">
            <div className={` main_padding`}>
                <div className="main_container">
                    <CookieConsent
                        // location="bottom"
                        // buttonText="Accept"
                        // declineButtonText="Decline"
                        // cookieName="cookiesAccepted"
                        // style={{ background: "#2B373B" }}
                        // buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                        // declineButtonStyle={{ color: "#fff", background: "#6e757c", fontSize: "13px" }}
                        // expires={365}
                        location="bottom"
                        buttonText="Accept"
                        declineButtonText="Decline"
                        cookieName="cookiesAccepted"
                        containerClasses={styles.cookieConsent}
                        buttonWrapperClasses={styles.buttonWrapper}
                        buttonClasses={styles.acceptButton}
                        declineButtonClasses={styles.declineButton}
                        expires={365}
                    >
                        By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run effectively.
                    </CookieConsent>
                </div>
            </div>
        </div>
    );
};

export default CookieConsentComponent;
