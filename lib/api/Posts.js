import {getJSON, BASE_URL, putJSON, postJSON, deleteJSON} from "."

const URL = `${BASE_URL}/posts`

const PostsAPI = {

    readAll() {
        return getJSON(`${URL}?_sort=-id`)
    },

    read(id) {
        return getJSON(`${URL}/${id}`)
    },
    create(id) {
        return postJSON({body: id})
    },
    update(id) {
        return putJSON(`${URL}/${id}`)
    },
    delete(id) {
        return deleteJSON(`${URL}/${id}`)
    }
}

export default PostsAPI
