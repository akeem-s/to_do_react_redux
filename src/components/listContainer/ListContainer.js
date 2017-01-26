import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
// components
import ListComponent from '../listComponent/ListComponent';
import CreateListPopupComponent from '../createListPopupComponent/CreateListPopupComponent'

// actions
import * as ListContainerActions from './listContainer.actions.js';

export class ListContainer extends React.Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleCreateListPopup = this.toggleCreateListPopup.bind(this)
  }

  componentDidMount(){
    window.$("#create_list_button").on('click', () => {
      if(this.props.listContainerReducer.showCreateListPopup == true){
        console.log("efeiojfieowjfeio")
        window.$("main").addClass("overlay")
      }
      if(!this.props.listContainerReducer.showCreateListPopup) {
        console.log("else")
        window.$("main").removeClass("overlay")
      }
    })
  }

  handleChange(e){
    const {dispatch} = this.props
    let listName = e.target.value
    dispatch(ListContainerActions.nameChange(listName))
  }

  handleSubmit(){
    const {dispatch} = this.props
    let key = this.props.listContainerReducer.listArray.length
    let listName = this.props.listContainerReducer.listName
    let newList = {key: key, name: listName}
    if(listName){
      dispatch(ListContainerActions.handleSubmit(newList))
      document.getElementById("list_name_input").value = ""
      dispatch(ListContainerActions.listCreateError(''))
    }
    else {
      let error = "List cannot be blank"
      dispatch(ListContainerActions.listCreateError(error))
    }
  }

  activateList(listKey){
    const {dispatch} = this.props
    dispatch(ListContainerActions.activateList(listKey))
  }

  toggleCreateListPopup(e){
    e.preventDefault()
    const {dispatch} = this.props
    dispatch(ListContainerActions.toggleCreateListPopup(!this.props.listContainerReducer.showCreateListPopup))
  }

  render(){
    let errorHtml, createListPopup
    let listArrayHtml = [];

    if(this.props.listContainerReducer.listArray){
      let len = this.props.listContainerReducer.listArray.length
      for(let i = 0; i < len; i ++){
        // listArrayHtml.push(<ListComponent key={this.props.listContainerReducer.listArray[i].key} taskKey={this.props.listContainerReducer.listArray[i].key} name={this.props.listContainerReducer.listArray[i].name}/>)
        listArrayHtml.push(
          <div className="list_tab" key={this.props.listContainerReducer.listArray[i].key}>
            <i class="fa fa-bars" aria-hidden="true"></i><p onClick={()=>{this.activateList(this.props.listContainerReducer.listArray[i].key)}} >{this.props.listContainerReducer.listArray[i].name} </p>
          </div>
        )
      }
    }

    if(this.props.listContainerReducer.error){
      errorHtml = (
        <h1> {this.props.listContainerReducer.error}</h1>
      )
    }

    if(this.props.listContainerReducer.showCreateListPopup){
      createListPopup = <CreateListPopupComponent handleSubmit={this.handleSubmit} toggleCreateListPopup={this.toggleCreateListPopup} handleChange={this.handleChange}/>
    }
    if(!this.props.listContainerReducer.showCreateListPopup){
      createListPopup = null
    }


    return(
      <div>
        <div className="list_container" >
          <div className="mini_nav"></div>
          <div className="user_profile_nav"><img src="./img/user_icon.png" id="avatar"></img>User Name<i className="fa fa-bell" aria-hidden="true"></i></div>
          {errorHtml}
            <div id="create_list_button_container" onClick={this.toggleCreateListPopup}>
              <div className="circle-plus"><div className="circle"><div className="horizontal"></div><div className="vertical"></div></div></div>
              <p id="create_list_button">Create List</p>
            </div>
          <aside>
            {listArrayHtml}
          </aside>
        </div>
        <div id="active_list_container">
          {createListPopup}
        </div>
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

export default connect(mapStateToProps)(ListContainer);
