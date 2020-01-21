import {Types} from '../actions/auth';

const INITIAL_STATE = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    error: null,
    isRegistered: null,
  };
  

export default function users(state = INITIAL_STATE, action) {
    switch (action.type) {
     
        case Types.LOGIN_USER_REQUEST:{
            localStorage.setItem('token', action.payload);
            console.log("reducers",action)
            return {
              ...state,
              isAuthenticated: true,
              isLoading: false,
            };
      
        }
        case Types.USERS_ERROR: {
            return {
                ...state,
                error: action.payload.error
            }
        }
        default: {
            return state;
        }
    }
}