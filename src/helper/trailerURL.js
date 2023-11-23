import tmdb from "src/api/tmdbApi"
import { useAxios } from "src/hooks/useAxios"

const getTrailer = (media, id) => {
    const { results, isLoading, error } = useAxios( tmdb, 'get', `/${media}/${id}/videos`)
    const trailer = results.filter( video => video.type.toLowerCase() === 'trailer')

    const trailerBaseURL = 'http://www.youtube.com/embed/'
    return `${trailerBaseURL}${trailer[0]?.key}`
}

export default getTrailer