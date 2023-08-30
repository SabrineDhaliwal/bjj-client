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
                <p>Home</p>
                <p>About</p>
                <p>Back to Top</p>
                <p>Calendar</p>

            </div>
            <div className="footer__social">
                <img src={facebook} alt="facebook link"/>
                <img src={instagram} alt="instagram link"/>
                <img src={twitter} alt="twitter link"/> 
            </div> 

        </div>
        </div>

    );
}
export default Footer