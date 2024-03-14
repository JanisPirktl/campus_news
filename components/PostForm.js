import {useState} from "react";

export default function PostForm(props) {

    const [isLoading, setLoading] = useState(true)
    const [post, setPost] = useState(null)
    function handleSubmit() {

    }

    return (
        <div className={styles['form-container-styling']}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <div>
                        <input value={post.title}
                               type="text" name="title" id="title" placeholder="Title"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="text">Text</label>
                    <div>
                        <textarea value={post.text}
                                  type="text" name="text" id="text" placeholder="Text" rows="10"/>
                    </div>
                </div>

                <button className={"button"}>Submit</button>
            </form>
        </div>
    )
}
