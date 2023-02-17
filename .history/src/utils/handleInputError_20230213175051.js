export const handleInputError = (firstValue, secondValue) => {
  if (!firstValue && !secondValue) {
    return 'Input is required'
  }
  return ''
}