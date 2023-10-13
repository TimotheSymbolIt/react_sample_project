import { combineReducers } from "redux";
import { authenticationSlice } from './authenticationSlice';

/**
 * Combine all the reducers create in different files, to add them in the redux-store
 * So, if you create a new reducer, it needs to be added here
 */
export default combineReducers({
    authenticationSlice,
    
})
