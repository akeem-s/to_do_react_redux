import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

export class CreateListPopupComponent extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    window.$("#cancel_button").on('click', () => {
      if(this.props.listContainerReducer.showCreateListPopup){
        window.$(".active_list_container").removeClass("overlay")
      }
      if(!this.props.listContainerReducer.showCreateListPopup) {
        window.$(".active_list_container").addClass("overlay")
      }
    })
  }

  render(){
    return(
      <div id="create_list_popup" >
        <p>Create New List</p>
        <form id="list_form" onSubmit={(e) => e.preventDefault()}>
          <input id="list_name_input" type="text" name="list_name" placeholder="list name" onChange={this.props.handleChange}></input>
          <div id="user_details">
            <img src="./img/user_icon.png" id="popup_avatar"></img> <p id="popup_username">User Name</p><p id="popup_email">user_email@test.com</p>
          </div>
          <div id="popup_button_container">
            <button id="save_button" onClick={this.props.handleSubmit}>Save</button><button id="cancel_button" onClick={this.props.toggleCreateListPopup}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { listContainerReducer } = state

  return {
  	listContainerReducer
  }
}

export default connect(mapStateToProps)(CreateListPopupComponent);
