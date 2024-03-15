import {useEffect, useState} from "react";
import PostsAPI from "@/lib/api/Posts";

export default function PostForm({editedPost = null}) {

    const defaultPost = {
        title: "",
        text: ""
    }

    const [isLoading, setIsLoading] = useState(false)
    const [post, setPost] = useState(defaultPost)

    useEffect(() => {
        if (editedPost != null) {
            setPost(editedPost)
        }
    }, [editedPost])

    const handleChange = (e) => {
        const name = e.target.name
        const text = e.target.value

        setPost({
            ...post,
            ...{[name]: text}
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        if (post.id) {
            post.updatedAt = new Date().toString()
            const updatedPost = await PostsAPI.update(post)
            setPost(updatedPost)
        } else {
            post.createdAt = new Date().toISOString()
            post.updatedAt = new Date().toISOString()
            const newPost = await PostsAPI(post)
            setPost(newPost)
        }
        setIsLoading(false)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <div>
                        <input value={post.title}
                               type="text" name="title" id="title" placeholder="Title" onChange={handleChange}/>
                    </div>
                </div>
                <div>
                    <label htmlFor="text">Text</label>
                    <div>
                        <textarea value={post.text}
                                  type="text" name="text" id="text" placeholder="Text" rows="10"
                                  onChange={handleChange}/>
                    </div>
                </div>

                <button className={"button"}>Submit</button>
            </form>
        </div>
    )
}
