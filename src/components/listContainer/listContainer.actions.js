export const NAME_CHANGE = 'NAME_CHANGE'
export const CREATE_LIST = 'CREATE_LIST'

export function nameChange(val){
  return{
    type: NAME_CHANGE,
    newListName: val
  }
}

export function createList(){
  return{
    type: CREATE_LIST,
    key: input
  }
}
