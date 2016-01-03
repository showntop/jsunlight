import React                 from 'react';
import { Route, IndexRoute } from 'react-router';


// import CoreLayout             from 'layouts/core-layout';
import Root                   from 'containers/root';
import Users                  from 'containers/users';
import NewUser                from 'containers/new-user';


import DeptsView              from 'containers/Dept';
import RolesView              from 'containers/Role';
import PermissionsView        from 'containers/Permission';

export default (
  <Route        component={Root} path='/'>
    <IndexRoute component={Users} />
    <Route      component={Users}  path='/users' />
    <Route      component={NewUser}  path='/users/new' />
    
    <Route      component={DeptsView}  path='/dept' />
    <Route      component={RolesView}  path='/role' />
    <Route      component={PermissionsView}  path='/permission' />
  </Route>
);
