import tmdb from "src/api/tmdbApi"

import { useAxios } from "src/hooks/useAxios"

const getTrailerKey = (media, id) => {
    const { results, isLoading, error } = useAxios( tmdb, 'get', `/${media}/${id}/videos`)
    const trailer = results.filter( video => video.type.toLowerCase() === 'trailer')
    return trailer[0]?.key
}

export { getTrailerKey }

