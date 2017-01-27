import * as actions from './listContainer.actions.js';

export function listContainerReducer(state = {
  listArray:[],
  activeList: '',
  activeListName: '',
  showCreateListPopup: false,
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

    case 'ACTIVATE_LIST':
      return Object.assign({}, state, {
        activeList: action.activeList,
        activeListName: action.activeListName
      })

    case 'TOGGLE_CREATE_LIST_POPUP':
      return Object.assign({}, state, {
        showCreateListPopup: action.showCreateListPopup
      })

    default:
      return state
  }
}

export default listContainerReducer;
