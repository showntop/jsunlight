import React          from 'react';
import { connect }    from 'react-redux';

import { Link }       from 'react-router';

import RoleList       from '../components/role-list';

export class Role extends React.Component {
  static propTypes = {


  }

  render () {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            角色
            <small>列表</small>
          </h1>
          <ul className="breadcrumb">
            <li><a href="/depts/new"><i className="fa fa-user-plus"></i>新建角色</a></li>
          </ul>
        </section>

        <section className="content">
          <RoleList { ...this.props } />
        </section>
      </div>    
    );
  }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(Role);
