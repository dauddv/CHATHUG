import { SlSocialFacebook,SlSocialTwitter,SlSocialInstagram } from "react-icons/sl";
import { RiTelegram2Line } from "react-icons/ri";

const Footer = () => {
  return (
    <>
    <footer className="footer">
        <div className="footerlogo"><img src="/footerLogo.png"/></div>
        <div className="footerText">
            <div className="footerTop">
                <div className="footerMenu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Discover</a></li>
                        <li><a href="#">Brain</a></li>
                        <li><a href="#">History</a></li>
                        <li><a href="#"></a>Team</li>
                    </ul>
                </div>
                <div className="footerLogos">
                    <div className="footersocialLogo facebook"><SlSocialFacebook /></div>
                    <div className="footersocialLogo twitter"><SlSocialTwitter /></div>
                    <div className="footersocialLogo telegram"><RiTelegram2Line /></div>
                    <div className="footersocialLogo instagram"><SlSocialInstagram /></div>
                </div>
            </div>
            <div className="footerBottom">
                <p>Terms and Privacy Policy © 2025 Home UpKeep Genius. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
