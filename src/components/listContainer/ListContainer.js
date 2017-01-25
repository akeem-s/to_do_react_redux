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
    dispatch(ListContainerActions.handleSubmit(newList))
  }

  render(){
    // if(this.props.listContainerReducer.listArray){
    //   let len = this.props.listContainerReducer.listArray
    //   for(let i = 0; i < len; i ++){
    //
    //   }
    // }
    return(
      <div className="list_container" >
        <h1>CREATE LIST</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="list_name" placeholder="list name" onChange={this.handleChange}></input>
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
