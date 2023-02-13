export const handleInputError = (firstValue, secondValue) => {
  if (!firstValue && !secondValue) {
    return 'Input Fields are required'
  } else if (!firstValue) {
   return 'Title is required'
  } else if (!secondValue) {
   return 'Description is required'
  }
 
  return ''
}