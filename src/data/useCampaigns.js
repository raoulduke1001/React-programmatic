import useSWR  from "swr"

export default function useCampaigns() {
    const { data, mutate } = useSWR("api/v1/campaigns")

    return {
        campaigns: data,
        mutate
    }
}