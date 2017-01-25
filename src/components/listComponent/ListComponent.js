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
