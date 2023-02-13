export const handleInputError = (firstValue, secondValue) => {
  if (!firstValue) {
    return 'Input is required'
  }
  return ''
}