import * as types from '../constants/ActionTypes';

const initialState = {
  isLoading: false,
  users: [],
  currentUser: null,
  requestMessage: ''
};

export default function user(state = initialState, action) {

  switch(action.type) {
    case types.INDEX_USERS:

      return Object.assign({}, state, {
        isLoading: false,
        users: action.users
      });
    case types.RECEIVE_USERS:

      return Object.assign({}, state, {
        isLoading: false,
        users: action.users
      });
    case types.CREATED_USER:
      {
        debugger;
              return Object.assign({}, state, {
        isLoading: false,
        requestMessage: action.result.message
      }); 

      }

    default:
      return state;
  }
}
