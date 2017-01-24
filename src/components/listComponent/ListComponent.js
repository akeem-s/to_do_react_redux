import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

export class ListComponent extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="list_component_container" >
        <h1> List Name</h1>
        <div className="task_container">
          {/*Tasks Here*/}
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
