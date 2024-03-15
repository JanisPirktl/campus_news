import {useGlobalContext} from "@/store";

export default function ProfilePage() {
    const {session} = useGlobalContext()
    return (
        <>
        <h1>Your Profile</h1>
            <pre>{JSON.stringify(session, null, 4)}</pre>
        </>
    )
}