export const NAME_CHANGE = 'NAME_CHANGE'
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT'
export const LIST_CREATE_ERROR = 'LIST_CREATE_ERROR'

export function nameChange(listName){
  return{
    type: NAME_CHANGE,
    listName: listName
  }
}

export function handleSubmit(newList){
  return{
    type: HANDLE_SUBMIT,
    newList: newList
  }
}

export function listCreateError(error){
  return{
    type: LIST_CREATE_ERROR,
    error: error
  }
}
