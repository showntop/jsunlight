import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';
import user                   from './user';
import dept                   from './dept';

export default combineReducers({
  user, dept
});
