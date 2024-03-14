import PostForm from "@/components/PostForm";


export default function Create() {
    return (
        <div className={styles.body}>
            <div id={styles.title}>
                <h1>Create Post</h1>
            </div>
            <PostForm/>
        </div>
    );
}