import {
  SUBMIT_CONTACT_SUCCESS,
  SUBMIT_CONTACT_ERROR
} from './action-types';


export function contactReducer(state = {}, action) {
  switch (action.type) {
    case SUBMIT_CONTACT_SUCCESS:
      return {
        completed: true,
        success: true
      };
    case SUBMIT_CONTACT_ERROR:
      return {
        completed: true,
        success: false
      };
    default:
      return state;
  }
}
