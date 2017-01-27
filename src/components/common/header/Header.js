import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

export class HeaderComponent extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="header_container" >
        <p id="list_name_header">List Name Placeholder</p>
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
