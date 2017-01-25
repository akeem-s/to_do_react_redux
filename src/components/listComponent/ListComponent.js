import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
//components
import TaskComponent from '../taskComponent/TaskComponent'

export class ListComponent extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="list_component_container" >
        <h1> List Name</h1>
        <div className="new_task_form_container">
          <form onSubmit={(e) => e.preventDefault()}>
            <label>task name</label>
            <input type="text" name="task_name" placeholder="task name" onChange={this.handleChange}></input>
            <label>task details</label>
            <input type="text" name="task_details" placeholder="task details" onChange={this.handleChange}></input>
          <button onClick={this.handleSubmit} >create task</button>
          </form>
        </div>
        <div className="task_container">
          <TaskComponent/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { componentReducer } = state

  return {
  	componentReducer
  }
}

export default connect(mapStateToProps)(ListComponent);
