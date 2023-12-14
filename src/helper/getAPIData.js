import tmdb from "src/api/tmdbApi"

import { useAxios } from "src/hooks/useAxios"

const getAPIData = url => {
    const { data } = useAxios(tmdb, 'get', url)
    return data
}

export { getAPIData }