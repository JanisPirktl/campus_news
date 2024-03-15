import {getJSON, BASE_URL, putJSON, postJSON, deleteJSON} from "."

const URL = `${BASE_URL}/posts`

const PostsAPI = {

    readAll() {
        return getJSON(`${URL}?_sort=-id`)
    },

    read(id) {
        return getJSON(`${URL}/${id}`)
    },
    create(post) {
        return postJSON(URL,{body: post})
    },
    update(post) {
        return putJSON(`${URL}/${post.id}`,{body: post})
    },
    delete(post) {
        let data = null
        if (post != null) {data = deleteJSON(`${URL}/${post.id}`)
        }
        return data
    }
}

export default PostsAPI
