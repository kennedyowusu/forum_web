export const handleInputError = (firstValue, secondValue) => {
 if (
   firstValue === '' || secondValue === '' || firstValue === null || secondValue === null || firstValue === undefined || secondValue === undefined 
  ) {
    return 'Input is required'
  }
  return ''
}