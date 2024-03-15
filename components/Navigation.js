import React from 'react';
import styles from "./Navigation.module.css"
import Link from "next/link"
import {useGlobalContext} from "@/store";
import {useRouter} from "next/router";


export default function Navigation() {

    const {session, logout} = useGlobalContext()
    const router = useRouter()

    return (
        <div  className={styles.navigation}>
            <nav>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>About</Link>
                <Link href={"/posts/create"}>Create new Post</Link>
                { session &&
                <Link href={"/profile"}>Profil</Link>
                }
                { session ? <Link href={"/login"}>Logout</Link> : <Link href={"/login"}>Login</Link>
                }
            </nav>
        </div>
    )
}