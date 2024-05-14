import React, { useState } from 'react';
import styles from "./Header.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as Spinner } from "../../img/spinner.svg";
import { ReactComponent as ThreeLines } from "../../img/threeLines.svg";
import { ReactComponent as Cross } from "../../img/cross.svg";


function Header() {

    const location = useLocation();
    const indexSlash = location.pathname.lastIndexOf('/');
    const word = location.pathname.slice(indexSlash + 1);

    const [linkHome, setLinkHome] = useState("focus");
    const [linkTours, setLinkTours] = useState("unfocus");
    const [linkContacts, setLinkContacts] = useState("unfocus");
    const [clickBtn, setClickBtn] = useState(false);

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

    if (word === "" && linkHome !== "focus") {
        clickLinkHome();
    } else if (linkTours !== "focus" && word === "tours") {
        clickLinkTours();
    } else if (word !== "contacts" && linkContacts === "focus") {
        clickLinkHome();
    }


    return (
        <div className={styles.header}>
            <nav className={styles.headerNav}>
                <NavLink to={"/"} className={styles.headerLogo}>
                    <Spinner className={styles.headerLogoImg} />
                    <h1 className={styles.headerLogoText}>TRAVEL TEAM</h1>
                </NavLink>
                <button className={styles.headerListBtn} onClick={() => setClickBtn((val => !val))}>{clickBtn ? <Cross className={styles.headerListBtnImg} /> : <ThreeLines className={styles.headerListBtnImg} />}</button>

                <ul className={clickBtn?styles.headerListClick:styles.headerList}>
                <li className={linkHome === "focus" ? styles.headerListItemClick : styles.headerListItem} onClick={clickLinkHome}>
                    <NavLink to={"/"} className={styles.headerListLink}>Головна</NavLink>
                </li>
                <li className={linkTours === "focus" ? styles.headerListItemClick : styles.headerListItem} onClick={clickLinkTours}>
                    <NavLink to={"tours"} className={styles.headerListLink}>Тури</NavLink>
                </li>
                <li className={linkContacts === "focus" ? styles.headerListItemClick : styles.headerListItem} onClick={clickLinkContacts}>
                    <NavLink to={"contacts"} className={styles.headerListLink}>Контакти</NavLink>
                </li>
            </ul>
            <button className={clickBtn?styles.headerBtnClick:styles.headerBtn}>Увійти</button>
        </nav>

        </div >

    );
}

export default Header;
