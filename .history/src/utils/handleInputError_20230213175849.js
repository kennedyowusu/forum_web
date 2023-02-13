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
  } 
  else if (secondValue.length < 10) {
   return 'Description must be at least 3 characters'
  }
  
  return ''
}

if (!title || !description) {
  setError('Both title and description are required')
  return
}
if (title.length < 5) {
  setError('Title must be at least 5 characters long')
  return
}
if (title.length > 50) {
  setError('Title must be less than 50 characters long')
  return
}
if (description.length < 10) {
  setError('Description must be at least 10 characters long')
  return
}
if (description.length > 250) {
  setError('Description must be less than 250 characters long')
  return
}

dispatch(createPost({ title, description }))

setTitle('')
setDescription('')