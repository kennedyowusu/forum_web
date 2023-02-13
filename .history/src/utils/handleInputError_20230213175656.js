export const handleInputError = (firstValue, secondValue) => {
  if (!firstValue && !secondValue) {
    return 'Input Fields are required'
  } else if (!firstValue) {
   return 'Title is required'
  } else if (!secondValue) {
   return 'Description is required'
  } else if (firstValue.length < 3) {
   return 'Title must be at least 3 characters'
  }
  
  return ''
}