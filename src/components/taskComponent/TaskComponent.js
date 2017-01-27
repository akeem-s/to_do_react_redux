import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

export class TaskComponent extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="task_component_container" >
        <h4>Task Name</h4>
        <h5>Details</h5>
        <h5>Due Date</h5>
        <h5>completed?</h5>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { taskComponentReducer } = state

  return {
    taskComponentReducer
  }
}

export default connect(mapStateToProps)(TaskComponent);
