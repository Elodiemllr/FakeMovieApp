import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__socials">
                    <a className="footer__social">
                        <FacebookIcon />
                    </a>
                    <a className="footer__social">
                        <InstagramIcon />
                    </a>
                    <a className="footer__social">
                        <TwitterIcon />
                    </a>
                    <a className="footer__social">
                        <YouTubeIcon />
                    </a>
                </div>
                <ul className="footer__links">
                    <li className="footer__link">
                        <a href="/">Lien</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien</a>
                    </li>
                </ul>
                <div className="footer__copy">COPYwirght</div>
            </div>
        </footer>
    );
};

export default Footer;
