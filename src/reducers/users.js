import * as types from '../constants/ActionTypes';

const initialState = {
  isLoading: false,
  items: []
};

export default function users(state = initialState, action) {

  switch(action.type) {
    case types.INDEX_USERS:

      return Object.assign({}, state, {
        isLoading: false,
        items: action.items
      });
    case types.RECEIVE_USERS:

      return Object.assign({}, state, {
        isLoading: false,
        items: action.items
      });

    default:
      return state;
  }
}
