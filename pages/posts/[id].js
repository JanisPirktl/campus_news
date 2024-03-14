import PostsAPI from "@/lib/api/Posts";
import Link from "next/link";
import styles from "./[id].module.css"


export default function DetailPost({post}) {

    return !post ? null : (
        <div className={styles.article}>
            <h1>{post.title}</h1>
            <p className={styles.myText}>{post.text}</p>
            <p><i>Erstellt am {post.createdAt}</i></p>
            <ul>
                <li>
                    <Link href={"/"} className={styles.myLink}>Back</Link>
                </li>
                <li>
                    <Link href={`/edit/${post.id}`} className={styles.myLink}>Edit</Link>
                </li>

            </ul>
        </div>
    )
}

export async function getStaticProps(context) {
    const id = context.params.id
    const post = await PostsAPI.read(id)
    return {
        props: {post}, revalidate: 10
    }
}

export async function getStaticPaths() {
    const posts = await PostsAPI.readAll();
    const paths = posts.map(post => ({ params: { id: post.id.toString() } }));
    return {paths, fallback: true}
}

