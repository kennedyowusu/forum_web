export const handleInputError = (firstValue, secondValue) => {
 if (
   firstValue === '' || secondValue === '' || firstValue === null || secondValue === null 
  ) {
    return 'Input is required'
  }
  return ''
}