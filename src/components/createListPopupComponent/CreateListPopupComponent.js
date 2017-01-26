import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

export class CreateListPopupComponent extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div id="create_list_popup" >
        <p>Create New List</p>
        <form id="list_form" onSubmit={(e) => e.preventDefault()}>
          <input id="list_name_input" type="text" name="list_name" placeholder="list name" onChange={this.props.handleChange}></input>
          <button id="save_button" onClick={this.props.handleSubmit}>Save</button><button id="cancel_button" onClick={this.props.toggleCreateListPopup}>Cancel</button>
        </form>
      </div>
    )
  }
}

export default (CreateListPopupComponent);
