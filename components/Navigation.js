import React from 'react';
import styles from "./Navigation.module.css"
import Link from "next/link"

export default function Navigation() {
    return (
        <div  className={styles.navigation}>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
        </div>
    )
}