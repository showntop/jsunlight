import React          from 'react';
import { connect }    from 'react-redux';
import { Link }       from 'react-router';


import UserList       from '../components/user-list';


function mapStateToProps (state) {

  return {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    height: '300px',

    items: state.users.items
  };

}

export class UsersView extends React.Component {
  static propTypes = {
    items : React.PropTypes.array,
  }

  render () {

    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            用户
            <small>列表</small>
          </h1>
          <ul className="breadcrumb">
            <li><a href="/users/new"><i className="fa fa-user-plus"></i>新建用户</a></li>
          </ul>
        </section>

        <section className="content">
          <UserList { ...this.props } />
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps)(UsersView);
