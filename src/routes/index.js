import React                 from 'react';
import { Route, IndexRoute } from 'react-router';


// import CoreLayout             from 'layouts/core-layout';
import Root                   from 'containers/root';
import Users                  from 'containers/users';
import NewUser                from 'containers/new-user';

import Depts                  from 'containers/depts';

import Roles                  from 'containers/role';
import PermissionsView        from 'containers/Permission';

export default (
  <Route        component={Root} path='/'>
    <IndexRoute component={Users} />
    <Route      component={Users}  path='/users' />
    <Route      component={NewUser}  path='/users/new' />
    
    <Route      component={Depts}  path='/depts' />
    
    <Route      component={Roles}  path='/roles' />
    <Route      component={PermissionsView}  path='/permission' />
  </Route>
);
