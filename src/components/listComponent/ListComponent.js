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

  render(){
    let taskFormHtml, taskFormShowButton
      taskFormHtml =(
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="task_name_input" id="task_name_input" placeholder="task name" onChange={this.handleChange}></input>
            {/*<label>task details</label>
            <input type="text" name="task_details_input" id="task_details_input" placeholder="task details" onChange={this.handleChange}></input>*/}
            <button onClick={this.handleSubmit} >create task</button>
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
          activeTasks.push(<div key={i} className="task_tab_container">
          <p className="task_name_tab" key={this.props.listComponentReducer.taskArray[i].id}>  {name} </p>
          </div>)
        }
      }


    return(
      <div className="list_component_container" >
        <div className="new_task_form_container">

          {taskFormHtml}
        </div>
        <div className="task_container">
          {/*<TaskComponent/>*/}
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
