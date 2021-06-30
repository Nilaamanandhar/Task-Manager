import {ADD_TO_DO_NOTES} from './constrain/actionType';

export const addToDoNotes = (data) => {
  return {
  type:ADD_TO_DO_NOTES,
  payload:data,
}}