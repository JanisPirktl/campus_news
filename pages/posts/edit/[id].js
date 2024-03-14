import PostForm from "@/components/PostForm";

export default function Edit() {
    return (
        <div className={styles.body}>
            <div id={styles.title}>
                <h1>Edit Post</h1>
            </div>
            <PostForm/>
        </div>
    );
}