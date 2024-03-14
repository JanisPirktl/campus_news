import React from 'react';
import styles from "./Header.module.css"
import Navigation from "@/components/Navigation";

export default function Header() {
    return (
        <div className={styles.header}>
            <img src={"/logo_campus_news.png"} alt={"logo"}/>
            <h1>Campus News</h1>
            <Navigation/>
        </div>
    )
}