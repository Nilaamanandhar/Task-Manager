import { createStore, combineReducers, applyMiddleware } from 'redux';

import Thunk from 'redux-thunk';
import Logger from 'redux-logger';
import addToDoReducer from './reducer/addToDoReducer';


const rootReducer = combineReducers({
  toDoNotes: addToDoReducer,
})

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(Thunk, Logger));
}

export default configureStore;