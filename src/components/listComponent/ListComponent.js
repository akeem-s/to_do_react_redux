import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
//components
import TaskComponent from '../taskComponent/TaskComponent'
//actions
import * as ListComponentActions from './listComponent.actions'

export class ListComponent extends React.Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleTaskForm = this.toggleTaskForm.bind(this)
  }

  handleChange(e){
    let val = e.target.value
    let name = e.target.name
    const {dispatch} = this.props

    switch (name) {
      case "task_name_input":
        dispatch(ListComponentActions.taskNameChange(val))
        break;

      case "task_details_input":
        dispatch(ListComponentActions.taskDetailsChange(val))
        break;
      default:

    }
  }

  handleSubmit(e){
    const {dispatch} = this.props
    let taskName = this.props.listComponentReducer.taskName
    let taskDetails = this.props.listComponentReducer.taskDetails

    if(taskName){
      let key = this.props.taskKey
      dispatch(ListComponentActions.handleSubmit({taskName: taskName, taskDetails: taskDetails, id: this.props.listContainerReducer.activeList, completed: false}))
      document.getElementById("task_name_input").value = ""
      // document.getElementById("task_details_input").value = ""
      dispatch(ListComponentActions.taskNameChange(''))
      dispatch(ListComponentActions.taskDetailsChange(''))
      dispatch(ListComponentActions.taskCreateError(''))
    }
    else {
      let error = "Task name cannot be blank"
      dispatch(ListComponentActions.taskCreateError(error))
    }
  }

  toggleTaskForm(){
    const {dispatch} = this.props
    dispatch(ListComponentActions.toggleTaskForm(!this.props.listComponentReducer.showTaskForm))
  }

  deleteTask(taskName){
    const {dispatch} = this.props
    let len = this.props.listComponentReducer.taskArray.length
    for(let i = 0; i < len; i ++){
      if(this.props.listComponentReducer.taskArray[i] && this.props.listComponentReducer.taskArray[i].taskName === taskName){
        dispatch(ListComponentActions.deleteTask( i ))
      }
    }
  }

  render(){
    let taskFormHtml, taskFormShowButton
      taskFormHtml =(
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="task_name_input" id="task_name_input" placeholder="task name" onChange={this.handleChange}></input>
            <button onClick={this.handleSubmit} id="task_button">create task</button>
          </form>
        </div>
      )

      this.props.listComponentReducer.showTaskFormShowButton ?
        taskFormShowButton = (
          <h5 onClick={this.toggleTaskForm} >Add task</h5>
        )
        :
        null

      let activeTasks = []
      let len = this.props.listComponentReducer.taskArray.length
      for(let i = 0; i < len; i ++){
        let name = this.props.listComponentReducer.taskArray[i].taskName
        if(this.props.listComponentReducer.taskArray[i].id == this.props.listContainerReducer.activeList){
          activeTasks.push( <TaskComponent key={i} name={name} deleteTask={this.deleteTask.bind(this)}/>)
        }
        // if()
      }


    return(
      <div className="list_component_container" >
        <div id="new_task_form_container">

          {taskFormHtml}
        </div>
        <div className="task_container">
          {activeTasks}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { listComponentReducer, listContainerReducer } = state

  return {
  	listComponentReducer,
    listContainerReducer
  }
}

export default connect(mapStateToProps)(ListComponent);
