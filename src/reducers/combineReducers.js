//redux dependencies
import {combineReducers} from 'redux';

//reducers
// import {routerReducer} from 'react-router-redux';
import listContainerReducer from '../components/listContainer/listContainer.reducers.js'

let reducers = combineReducers({
  listContainerReducer
});

export default reducers
