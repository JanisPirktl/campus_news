import {useState} from "react";
import {useGlobalContext} from "@/store";
import {router} from "next/client";
import {useRouter} from "next/router";

const defaultModel = {
    email: ``,
    password: ``
}
export default function login() {

    const {session, logout, login } = useGlobalContext()

    const [user,setUser] = useState()
    const [errors, setErrors] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        user[name] = value
        setUser(user)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const response = await AuthenticationAPI.login(user)
            login(response)
            router.push("/")
        } catch (e) {
            console.error(e)
        }
        setIsLoading(false)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <input onChange={handleChange} type="email"
                           name="email" placeholder="Email"/>
                </div>

                <div>
                    <input onChange={handleChange} type="password"
                           name="password" placeholder="Password"/>
                </div>
                <button disabled={isLoading}>
                    {isLoading ? "...Loading" : "Login"}
                </button>
            </form>
        </div>
    )
}
