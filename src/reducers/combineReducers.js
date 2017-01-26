//redux dependencies
import {combineReducers} from 'redux';

//reducers
// import {routerReducer} from 'react-router-redux';
import listContainerReducer from '../components/listContainer/listContainer.reducers.js';
import listComponentReducer from '../components/listComponent/listComponent.reducers.js';

let reducers = combineReducers({
  listContainerReducer,
  listComponentReducer
});

export default reducers
