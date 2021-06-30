import {ADD_TO_DO_NOTES} from '../action/constrain/actionType'

const INITIAL_STATE = {
      todoNotes:[]
}

const addToDoReducer = (state = INITIAL_STATE, action) => {
      switch(action.type) {   
        case ADD_TO_DO_NOTES:
          return {
                ...state,
            todoNotes:action.payload
          }
        default:
          return state;  
      }
    }
     
    export default addToDoReducer;