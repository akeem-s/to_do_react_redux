import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as ListContainerActions from './listContainer.actions'

export class ListContainer extends React.Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    const {dispatch} = this.props
    let val = e.target.value
    dispatch(ListContainerActions.nameChange(val))
  }

  handleSubmit(){
    console.log("handle submit")
  }

  render(){
    return(
      <div className="list_container" >
        <h1>CREATE LIST</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="list_name" placeholder="list name" onChange={this.handleChange}></input>
          <button onClick={this.handleSubmit} ></button>
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

export default connect(mapStateToProps)(ListContainer);
