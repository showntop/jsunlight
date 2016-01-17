import React          from 'react';
import { connect }    from 'react-redux';

import { Link }       from 'react-router';

import DataGrid       from 'react-datagrid';

import { fetchRoles } from '../actions/roles';

var columns = [
  { name: 'id', title: 'ID', width: 150 },
  { name: 'name', title: '角色名称'},
  { name: 'description', title: '角色描述'},
  { name: 'created_at', title: '创建时间'  }
]

class RoleList extends React.Component {
  static propTypes = {
    users : React.PropTypes.array,
  }

  constructor(){
    super();
  }

  componentWillMount() {
    const {dispatch} = this.props;
    //dispatch(fetchUsers());
  }

  componentWillReceiveProps(nextProps) {
    
    
  }

  render() {
    return(
      <DataGrid
      dataSource='http://localhost:3001/v1/roles'
      idProperty='id'
      columns={columns} />);
  }
}

export default RoleList;
