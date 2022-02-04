import useUser from "../data/useUser"

export default function useLogout() {
    const { mutate: userMutate } = useUser()

    const logout = async () => {
        localStorage.removeItem("token")
        await userMutate(null)
    }

    return logout
}