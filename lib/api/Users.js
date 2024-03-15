import {getJSON, BASE_URL, putJSON, postJSON, deleteJSON} from "@/lib/api/index";

const URL = `${BASE_URL}`

const AuthenticationAPI = (
    login(user) =
        {
            const data = postJSON(`${URL}/login`, {body: user})
            return data
        }
)