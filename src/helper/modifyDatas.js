
const runTime = time => {
    const hour = Math.floor(time/60)
    const min = time%60
    return `${hour}h ${min.toString().padStart(2,'0')}m`
}

const tvDate = (firstDate, lastDate) => {
    const firstYear = firstDate.split('-')[0]
    const lastYear = lastDate.split('-')[0]
    return `${firstYear} - ${lastYear}`
}

const movieDate = date => {
    return year = date.split('-')[0]
}

export { runTime, tvDate, movieDate }

