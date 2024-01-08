import React, { useState } from 'react';
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { ReactComponent as Spinner } from "../../img/spinner.svg";

function Header() {

    const [linkHome, setLinkHome] = useState("focus");
    const [linkTours, setLinkTours] = useState("unfocus");
    const [linkContacts, setLinkContacts] = useState("unfocus");

    const clickLinkHome = () => {
        setLinkHome("focus");
        setLinkTours("unfocus");
        setLinkContacts("unfocus");
    };

    const clickLinkTours = () => {
        setLinkHome("unfocus");
        setLinkTours("focus");
        setLinkContacts("unfocus");
    };
    const clickLinkContacts = () => {
        setLinkHome("unfocus");
        setLinkTours("unfocus");
        setLinkContacts("focus");
    };


    return (
        <div className={styles.header}>
            <nav className={styles.headerNav}>
                <NavLink to={"/"} className={styles.headerLogo}>
                    <Spinner className={styles.headerLogoImg} />
                    <h1 className={styles.headerLogoText}>TRAVEL TEAM</h1>
                </NavLink>
                <ul className={styles.headerList}>
                    <li className={linkHome === "focus" ? styles.headerListItemClick : styles.headerListItem} onClick={clickLinkHome}>
                        <NavLink to={"/"} className={styles.headerListLink}>HOME</NavLink>
                    </li>
                    <li className={linkTours === "focus" ? styles.headerListItemClick : styles.headerListItem} onClick={clickLinkTours}>
                        <NavLink to={"tours"} className={styles.headerListLink}>TOURS</NavLink>
                    </li>
                    <li className={linkContacts === "focus" ? styles.headerListItemClick : styles.headerListItem} onClick={clickLinkContacts}>
                        <NavLink to={"contacts"} className={styles.headerListLink}>CONTACTS</NavLink>
                    </li>
                </ul>
                <button className={styles.headerBtn}>SING UP</button>
            </nav>

        </div>

    );
}

export default Header;
