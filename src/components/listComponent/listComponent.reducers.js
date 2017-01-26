export function listComponentReducer(state={
  taskArray: [],
  taskName: '',
  taskDetails: ''
}, action){
  switch (action.type){
    case 'TASK_NAME_CHANGE':
      return Object.assign({}, state, {
        taskName: action.taskName
      })

    case 'TASK_DETAILS_CHANGE':
      return Object.assign({}, state, {
        taskDetails: action.taskDetails
      })

    case 'HANDLE_TASK_SUBMIT':
      state.taskArray.push(action.newTask)
      return Object.assign({}, state, {
        taskName: '',
        taskDetails: ''
      })

    default:
      return state
  }
}

export default listComponentReducer;
