import CardGiftCard from "@material-ui/icons/CardGiftCard";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Search from "@material-ui/icons/Search";
import React from "react";
import "../styles/Nav.scss";

const Nav = () => {
    return (
        <div className=" nav  nav__black ">
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
                    <CardGiftCard />
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
