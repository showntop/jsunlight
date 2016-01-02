import React                 from 'react';
import { Route, IndexRoute } from 'react-router';

import Root                  from 'containers/Root';
import DeptsView              from 'containers/Dept';
import UsersView              from 'containers/Users';
import RolesView              from 'containers/Role';
import PermissionsView        from 'containers/Permission';


export default (
  <Route        component={Root} path='/'>
    <IndexRoute component={UsersView} />
    <Route      component={UsersView}  path='/users' />
    <Route      component={DeptsView}  path='/dept' />
    <Route      component={RolesView}  path='/role' />
    <Route      component={PermissionsView}  path='/permission' />
  </Route>
);
