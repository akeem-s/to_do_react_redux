import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
// components
import ListComponent from '../listComponent/ListComponent';

// actions
import * as ListContainerActions from './listContainer.actions.js';

export class ListContainer extends React.Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
      dispatch(ListContainerActions.nameChange(''))
      dispatch(ListContainerActions.listCreateError(''))
    }
    else {
      let error = "List cannot be blank"
      dispatch(ListContainerActions.listCreateError(error))
    }
  }

  render(){
    // if(this.props.listContainerReducer.listArray){
    //   let len = this.props.listContainerReducer.listArray
    //   for(let i = 0; i < len; i ++){
    //
    //   }
    // }
    let errorHtml
    if(this.props.listContainerReducer.error){
      errorHtml = (
        <h1> {this.props.listContainerReducer.error}</h1>
      )
    }

    return(
      <div className="list_container" >
        <h1>Create list</h1>
        {errorHtml}
        <form onSubmit={(e) => e.preventDefault()}>
          <input id="list_name_input" type="text" name="list_name" placeholder="list name" onChange={this.handleChange}></input>
          <button onClick={this.handleSubmit} >create list</button>
        </form>
        <aside>
          <ListComponent/>
        </aside>
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
