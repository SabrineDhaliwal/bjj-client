import "./Footer.scss";
import footerLogo from "../../assets/icons/icononly_nobuffer.png";

function Footer (){
const handleScrollToTop = ()=> {
    window.scrollTo({top: 0, behavior: 'smooth'});
}; 

    return (
        <div className="footer">
            <div className="footer__backTop">
                <button className="footer__backTop" onClick={handleScrollToTop} >Back to Top</button>
            </div>
       
            <div className="footer__top">
                <img className="footer__img" src={footerLogo} alt="Roll & Reflect icon"/>
                <p className="footer__text">A project designed and built by <a className="footer__sabrine" href="https://www.linkedin.com/in/sabrinedhaliwal" target="_blank">Sabrine Dhaliwal</a></p>
            </div>
    

        
        </div>

    );
}
export default Footer