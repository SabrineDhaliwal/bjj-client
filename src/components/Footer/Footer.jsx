import "./Footer.scss";
import footerLogo from "../../assets/icons/icononly_nobuffer.png";
import facebook from "../../assets/icons/icons8-facebook-50.svg";
import instagram from "../../assets/icons/icons8-instagram-50.svg";
import twitter from "../../assets/icons/icons8-twitter-50.svg";

function Footer (){

    return (
        <div className="footer">
        <div className= "footer__wrapper">
            <div className="footer__logo">
                <img className="footer__logo--img" src={footerLogo} alt="Roll & Reflect icon"/>
            </div>
            <div className="footer__contacts">
                <p>Want to add more content?</p>
                <p>Contact Us</p>
                <p>info@rollandreflect.com</p>
            </div>
            <div className="footer__pages">
                {/* to do add links to other pages */}
                <p>Home</p>
                <p>About</p>
                <p>Back to Top</p>
                {/* <p>Calendar</p> */}

            </div>
            {/* to do add links to social media sites  */}
            <div className="footer__social">
                <img src={facebook} className="social__icon" alt="facebook link"/>
                <img src={instagram} className="social__icon" alt="instagram link"/>
                <img src={twitter}  className="social__icon" alt="twitter link"/> 
            </div> 

        </div>
        </div>

    );
}
export default Footer