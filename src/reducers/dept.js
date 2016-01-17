import * as types from '../constants/ActionTypes';

const initialState = {
  isLoading: false,
  depts: [],
  currentDept: null,
  requestMessage: ''
};

export default function dept(state = initialState, action) {

  switch(action.type) {
    case types.INDEX_DEPTS:

      return Object.assign({}, state, {
        isLoading: false,
        depts: action.users
      });
    case types.RECEIVE_DEPTS:

      return Object.assign({}, state, {
        isLoading: false,
        depts: action.depts
      });
    case types.CREATED_USER:
      {
              return Object.assign({}, state, {
        isLoading: false,
        requestMessage: action.result.message
      }); 

      }

    default:
      return state;
  }
}
