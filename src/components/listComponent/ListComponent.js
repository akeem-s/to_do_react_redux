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
      console.log(taskName, taskDetails)
      let key = this.props.taskKey
      dispatch(ListComponentActions.handleSubmit({taskName: taskName, taskDetails: taskDetails, listId: key}))
      document.getElementById("task_name_input").value = ""
      document.getElementById("task_details_input").value = ""
      dispatch(ListComponentActions.taskNameChange(''))
      dispatch(ListComponentActions.taskDetailsChange(''))
      dispatch(ListComponentActions.taskCreateError(''))
    }
    else {
      let error = "Task name cannot be blank"
      dispatch(ListComponentActions.taskCreateError(error))
    }
  }

  render(){
    return(
      <div className="list_component_container" >
        <h3> {this.props.name}</h3>
        <div className="new_task_form_container">
          <form onSubmit={(e) => e.preventDefault()}>
            <h5>Add task</h5>
            <label>task name</label>
            <input type="text" name="task_name_input" id="task_name_input" placeholder="task name" onChange={this.handleChange}></input>
            <label>task details</label>
            <input type="text" name="task_details_input" id="task_details_input" placeholder="task details" onChange={this.handleChange}></input>
          <button onClick={this.handleSubmit} >create task</button>
          </form>
        </div>
        <div className="task_container">
          {/*<TaskComponent/>*/}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { listComponentReducer } = state

  return {
  	listComponentReducer
  }
}

export default connect(mapStateToProps)(ListComponent);
