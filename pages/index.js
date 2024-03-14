import styles from './index.module.css'
import Post from "@/components/Post";
import PostsAPI from "@/lib/api/Posts";


export default function Home({posts}) {
    return (
        <div className={styles.body}>
            <div id={styles.title}>
                <h1>Home Site</h1>
                {posts.map((post, index) => (
                    <Post key={index} props={post}/>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const posts = await PostsAPI.readAll()
    return {
        props: {posts}, revalidate: 10
    }
}

