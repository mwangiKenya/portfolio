import { Link } from "react-router-dom";

function Footer() {
    return(
        <>
            <footer>
                <div className="footercontentdiv">
                    <h3> About me </h3>
                    <p>
                        I am a passionate and growing tech expert, with a dream 
                        of managing digital projects, and automating workflows.
                    </p>
                </div>

                <div className="footercontentdiv">
                    <h3> Quick links </h3>
                    <Link to = "/Home" className="ShowFooterLink"> Home </Link>
                    <Link to = "/About" className="ShowFooterLink"> About </Link>
                    <Link to = "/Skills" className="ShowFooterLink"> My Skills </Link>
                    <Link to = "/Projects" className="ShowFooterLink"> View Projects </Link>
                    <Link to = "/Hire" className="ShowFooterLink"> Get in touch </Link>
                </div>
                <div className="footercontentdiv">
                    <p> &copy;Collins Mwangi. </p>
                    <p> From Nakuru Kenya </p>
                    <p> All rights reserved </p>
                </div>
                <div className="footercontentdiv">
                    <p> Contact me; </p>
                    <a href="mailto:cmwangi0075@gmail.com"
                        className="my-footer-link-one"> <img src="mail.png" className="footer-pic"/> </a>
                    <a href="https://wa.me/254705796880?text=Hi%20Collins%2C%20am%20interested%20with%20your%20digital%20services%20and%20I%20would%20like%20to%20know%20more." 
                        className="my-footer-link-one"> <img src="whatsapp.png"  className="footer-pic"/> </a>
                    <a href="https://www.linkedin.com/in/collins-mwangi-918580357"
                        className="my-footer-link-one"> <img src="linkedln.png"  className="footer-pic"/> </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;