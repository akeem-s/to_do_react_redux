import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

export class HeaderComponent extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="header_container" >
        <p>List Name</p>
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
