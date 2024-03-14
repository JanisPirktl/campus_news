import React from 'react';
import styles from "./Post.module.css"
import Link from "next/link";


export default function Post({props}) {
    return (
        <article className={styles.article}>
            <h1>{props.title}</h1>
            <p className={styles.myText}>{props.text}</p>
            <ul>
                <li>
                    <Link href={`posts/${props.id}`} className={styles.myLink}>More Details</Link>
                </li>
            </ul>
        </article>
    )
}