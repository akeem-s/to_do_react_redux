import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

export class HeaderComponent extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="header_container" >
        <h1> To Do </h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { headerComponentReducer } = state

  return {
    headerComponentReducer
  }
}

export default connect(mapStateToProps)(HeaderComponent);
