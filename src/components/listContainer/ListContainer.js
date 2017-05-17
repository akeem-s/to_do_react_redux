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
    this.deleteList = this.deleteList.bind(this)
    this.toggleCreateListPopup = this.toggleCreateListPopup.bind(this)
  }

  // In Progress Styling Change
  // componentDidMount(){
  //   window.$("#create_list_button_container").on('click', () => {
  //     if(this.props.listContainerReducer.showCreateListPopup){
  //       window.$(".list_container").removeClass("overlay")
  //       window.$(".active_list_container").removeClass("overlay")
  //
  //     }
  //     if(!this.props.listContainerReducer.showCreateListPopup) {
  //       window.$(".list_container").addClass("overlay")
  //       window.$(".active_list_container").addClass("overlay")
  //     }
  //   })
  // }

  handleChange(e){
    const {dispatch} = this.props
    let listName = e.target.value
    dispatch(ListContainerActions.nameChange(listName))
  }

  handleSubmit(e){
    e.preventDefault()
    const {dispatch} = this.props
    let key = this.props.listContainerReducer.listArray.length
    let listName = this.props.listContainerReducer.listName
    let newList = {key: key, name: listName}
    if(listName){
      dispatch(ListContainerActions.handleSubmit(newList))
      document.getElementById("list_name_input").value = ""
      dispatch(ListContainerActions.listCreateError(''))
      dispatch(ListContainerActions.toggleCreateListPopup(false))
    }
    else {
      let error = "List cannot be blank"
      dispatch(ListContainerActions.listCreateError(error))
    }
  }

  activateList(listKey, listName){
    const {dispatch} = this.props
    dispatch(ListContainerActions.activateList(listKey, listName))
  }

  toggleCreateListPopup(e){
    e.preventDefault()
    const {dispatch} = this.props
    dispatch(ListContainerActions.toggleCreateListPopup(!this.props.listContainerReducer.showCreateListPopup))
  }

  deleteList(key){
    const {dispatch} = this.props
    let len = this.props.listContainerReducer.listArray.length
    for(var i = 0; i < len; i ++){
      if(this.props.listContainerReducer.listArray[i] && this.props.listContainerReducer.listArray[i].key === key){
        dispatch(ListContainerActions.deleteList(i))
      }
    }
  }

  render(){
    let errorHtml, createListPopup, activeListHtml
    let listArrayHtml = [];

    if(this.props.listContainerReducer.listArray){
      let len = this.props.listContainerReducer.listArray.length
      for(let i = 0; i < len; i ++){
        listArrayHtml.push(
          <div className="list_tab" key={this.props.listContainerReducer.listArray[i].key}>
           <i className="fa fa-bars" style={{display: "inline-block"}} aria-hidden="true"></i> <i className="fa fa-trash-o" style={{display: "inline-block", position: "absolute", "margin-left": "236px", "margin-top": "23px"}} aria-hidden="true" onClick={ () =>   {this.deleteList(this.props.listContainerReducer.listArray[i].key)}}></i> <p className="list_name_tab" onClick={()=>{this.activateList(this.props.listContainerReducer.listArray[i].key, this.props.listContainerReducer.listArray[i].name)}}>{this.props.listContainerReducer.listArray[i].name} </p>
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

    if(this.props.listContainerReducer.activeListName){
      let taskArray = []
      let len = this.props.listComponentReducer.taskArray.length
      // for(let i = 0; i < len; i ++){
      //   if()
      // }
      activeListHtml = (
        <ListComponent key={this.props.listContainerReducer.activeList} name={this.props.listContainerReducer.activeListName}/>
      )
    }

    return(
      <div>
        <div className="list_container" >
          <div className="mini_nav"><i className="fa fa-lg fa-bars header_bars" aria-hidden="true"></i> <i className="fa fa-lg fa-search header_magnify" aria-hidden="true"></i></div>
          <div className="user_profile_nav"><img src="./img/user_icon.png" id="avatar"></img><p id="user_name_list_container">User Name</p><i className="fa fa-lg fa-bell bell_custom" aria-hidden="true"></i></div>
          {errorHtml}
            <div id="create_list_button_container" onClick={this.toggleCreateListPopup}>
              <div className="circle-plus"><div className="circle"><div className="horizontal"></div><div className="vertical"></div></div></div>
              <i className="fa fa-lg fa-plus" aria-hidden="true"></i> <p id="create_list_button">Create List</p>
            </div>
          <aside>
            {listArrayHtml}
          </aside>
        </div>
        <div id="active_list_container">
          <img src="./img/monster.png" id="monster_png"></img>
          {activeListHtml}
        </div>
        {createListPopup}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { listContainerReducer, listComponentReducer } = state

  return {
  	listContainerReducer,
    listComponentReducer
  }
}

export default connect(mapStateToProps)(ListContainer);
