import PostForm from "@/components/PostForm";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import PostsAPI from "@/lib/api/Posts";

export default function Edit() {

    const router = useRouter()
    const id = router.query.id



    const [post, setPost] = useState(null)

    useEffect(() => {
        let isMounted = true
        if(!router.isReady) return
        const loadPost = async () => {
            const post = await PostsAPI.read(id)
            if(isMounted) {
                setPost(post)
            }
        }
        loadPost()

        return () => (isMounted = false)
    }, [router])

    return (
        <div>
            <h1>Edit Post</h1>
            <PostForm editedPost={post}/>
        </div>
    );
}