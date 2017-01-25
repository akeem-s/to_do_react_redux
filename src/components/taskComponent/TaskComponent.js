import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

export class TaskComponent extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="task_component_container" >
        <h1> Task</h1>
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
