import { getJSON, BASE_URL } from "."

const URL = `${BASE_URL}/posts`

const PostsAPI = {
    readAll() {
        return getJSON(`${URL}?_sort=-id`)
    }
}

export default PostsAPI
