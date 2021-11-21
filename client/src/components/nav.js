import React from "react";
import "../styles/Nav.scss";

const Nav = () => {
    return (
        <div className=" nav nav__black ">
            <button className="nav__burger"></button>
            <img src="./image/logo.png" alt="logo"></img>
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
                    Search
                </a>
                <a className="nav__action" href="/">
                    Direct{" "}
                </a>

                <a className="nav__action" href="/">
                    Gift{" "}
                </a>
                <a className="nav__action" href="/">
                    Notif{" "}
                </a>

                <a className="nav__action" href="/">
                    <img src="./image/moovieAvatar.png" alt=""></img>
                </a>
            </div>
        </div>
    );
};

export default Nav;
