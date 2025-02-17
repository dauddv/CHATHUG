import { FaAngleDown } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { FaBrain } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbBell } from "react-icons/tb";


const Navbar = ( {hamburgOnClick} ) => {

    return (
        <div className="Navbar">
            <div className="navbarLogo">
                <div onClick={hamburgOnClick} className="navbarHamburg">
                <IoMenu />
                </div>
                <img src="/Logo.png"/>
            </div>
            <div className="navbarMiddle">
                <div className="navbarMiddleArrowText">
                    <h1>Your Property Brain</h1>
                    <div className="navbarMiddlelogoText">
                        <div className="navbarMiddleLine">
                            <div className="navbarMiddleLineWidth"></div>
                        </div>
                        <div className="navbarMiddlelogo"><FaBrain /><span>50%</span></div>
                    </div>
                </div>
                <div className="navbarMiddleArrowLogo"><MdKeyboardArrowDown /></div>
            </div>
            <div className="NavbarSignUp">
                <div className="NavbarSignUpNotification">
                <TbBell />
                <div className="notifictaionNumber">4</div>
                </div>
                <div className="NavbarSignUpImg">
                    <img src="signInlogo.png"/>
                </div>
                <div className="NavbarSignUpLogo">
                <FaAngleDown />
                </div>
            </div>
        </div>
    )
}

export default Navbar
