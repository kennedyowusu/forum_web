export const handleInputError = (firstValue, secondValue) => {
  if (!firstValue && !secondValue) {
    return 'Both title and description are required'
  } else if (!firstValue) {
    return 'Title is required'
  } else if (!secondValue) {
    return 'Description is required'
  } else if (firstValue.length < 5) {
    return 'Title must be at least 5 characters'
  } else if (firstValue.length > 50) {
    return 'Title must be less than 50 characters'
  } else if (secondValue.length < 10) {
    return 'Description must be at least 10 characters'
  } else if (secondValue.length > 250) {
    return 'Description must be less than 250 characters'
  }
  
  return ''
}