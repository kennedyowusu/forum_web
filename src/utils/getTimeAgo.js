const getTimeAgo = (createdAt) => {
  const postTime = new Date(createdAt).getTime()
  const currentTime = Date.now()
  const timeDiff = currentTime - postTime
  const oneDayInMs = 24 * 60 * 60 * 1000 // 24 hours in milliseconds
  const daysAgo = Math.floor(timeDiff / oneDayInMs)
  if (daysAgo > 0) {
    return `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`
  } else {
    const hoursAgo = Math.floor(timeDiff / (60 * 60 * 1000))
    return `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`
  }
}

export default getTimeAgo