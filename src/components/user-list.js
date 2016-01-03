import React          from 'react';
import { connect }    from 'react-redux';

import { Link }       from 'react-router';

import DataGrid       from 'react-datagrid';

import { fetchUsers }           from '../actions/users';

var columns = [
  { name: 'id', title: 'ID', width: 150 },
  { name: 'login', title: '用户名'},
  { name: 'email', title: '邮箱'},
  { name: 'created_at', title: '注册时间'  },
  { name: 'sign_in_count', title: '登录次数' },
  { name: 'last_sign_in_at', title: '上次登录时间', width: 200 }
]

class UserList extends React.Component {
  static propTypes = {
    users : React.PropTypes.array,
  }

  constructor(){
    super();
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchUsers());
  }

  componentWillReceiveProps(nextProps) {
    
    
  }

  render() {
    return(
      <DataGrid
      dataSource='http://localhost:3000/v1/users'
      idProperty='id'
      columns={columns} />);
  }
}

export default UserList;
