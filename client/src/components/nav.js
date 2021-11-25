import CardGiftCardIcon from "@material-ui/icons/CardGiftcard";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Search from "@material-ui/icons/Search";
import React, { useState } from "react";
import "../styles/Nav.scss";

const Nav = () => {
    //nav bar noir quand on scroll
    //par default elle ne sera pas noir
    const [navBlack, setNavBlack] = useState(false);

    const transitionNav = () => {
        //on veut verifier que lorsqu'on scroll verticalelment, si on est au dessus de 100 zlors on met notre class black
        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
    };

    useState(() => {
        //quuand on va scroller on va appeler la function du dessus
        document.addEventListener("scroll", transitionNav);
    });
    // Detection de la transition du scroll

    // Afficher le menu au click sur le burger
    return (
        <div className={` nav ${navBlack && "nav__black"} `}>
            <button className="nav__burger">
                <MenuIcon />
            </button>
            <img src="./image/logo.png" className="nav__logo" alt="logo"></img>
            <nav className="nav__links">
                <a className="nav__link" href="/">
                    Accueil
                </a>
                <a className="nav__link" href="/">
                    Séries
                </a>
                <a className="nav__link" href="/">
                    Films
                </a>
            </nav>

            <div className="nav__actions">
                <a className="nav__action" href="/">
                    <Search />
                </a>
                <a className="nav__action" href="/">
                    Direct{" "}
                </a>

                <a className="nav__action" href="/">
                    <CardGiftCardIcon />
                </a>
                <a className="nav__action" href="/">
                    <NotificationsIcon />
                </a>

                <a className="nav__action" href="/">
                    <img
                        src="./image/moovieAvatar.png"
                        className="nav__action__avatar"
                        alt=""
                    ></img>
                </a>
            </div>
        </div>
    );
};

export default Nav;
