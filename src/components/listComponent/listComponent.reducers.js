export function listComponentReducer(state={
  taskArray: [],
  taskName: '',
  taskDetails: '',
  showTaskForm: false
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

      case 'TOGGLE_TASK_FORM':
        return Object.assign({}, state, {
          showTaskForm: action.showTaskForm
        })

    default:
      return state
  }
}

export default listComponentReducer;
