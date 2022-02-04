import useSWR  from "swr"

export default function useUser() {
    const { data, error, mutate } = useSWR("api/v1/users/me")

    const isLoading = !error && !data
    const loggedOut = Boolean(!isLoading && error)

    return {
        user: data,
        isLoading,
        loggedOut,
        mutate
    }
}