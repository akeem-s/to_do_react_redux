import * as actions from './listContainer.actions.js';

export function listContainerReducer(state = {
  listArray:[],
  error: ''
}, action){
  switch(action.type){
    case 'NAME_CHANGE':
      return Object.assign({}, state, {
        listName: action.listName
      })

    case 'HANDLE_SUBMIT':
      state.listArray.push(action.newList)
      return Object.assign({}, state, {
        listName: ''
      })

    case 'LIST_CREATE_ERROR':
      return Object.assign({}, state, {
        error: action.error
      })

    default:
      return state
  }
}

export default listContainerReducer;
