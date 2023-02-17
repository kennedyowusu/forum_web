const getTimeAgo = (createdAt) => {
  const postTime = new Date(createdAt).getTime()
  const currentTime = Date.now()
  const timeDiff = currentTime - postTime
  const oneMinuteInMs = 60 * 1000 // 1 minute in milliseconds
  const oneHourInMs = 60 * oneMinuteInMs // 1 hour in milliseconds
  const oneDayInMs = 24 * oneHourInMs // 24 hours in milliseconds

  if (timeDiff < oneHourInMs) {
    const minutesAgo = Math.floor(timeDiff / oneMinuteInMs)
    return `${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`
  } else if (timeDiff < oneDayInMs) {
    const hoursAgo = Math.floor(timeDiff / oneHourInMs)
    return `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`
  } else {
    const daysAgo = Math.floor(timeDiff / oneDayInMs)
    return `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`
  }
}

export default getTimeAgo
