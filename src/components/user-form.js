import React          from 'react';
import { connect }    from 'react-redux';

import { Link }       from 'react-router';

import {createUser}     from '../actions/users';


class UserList extends React.Component {
  static propTypes = {

  }

  constructor(){
    super();
  }

  componentWillMount() {

  }

  componentWillReceiveProps(nextProps) {
    
    
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    let user = $('form').serialize()

    const {dispatch} = this.props;
    dispatch(createUser(user));
    return false;
  }

  render() {

    if (this.props.message == 'hi') {
      console.log(this.props.message);
    } else{};

    return(
      <div className="box box-primary">
        <div className="box-header with-border">
          <h3 className="box-title">填写用户信息</h3>
        </div>
        <form role="form" onSubmit={this._handleSubmit}>
          <div className="box-body">
            <div className="form-group">
              <label htmlFor="">用户名</label>
              <input name="login" className="form-control" placeholder="用户名"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">密码</label>
              <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="密码"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail">邮箱</label>
              <input name="email" type="email" className="form-control" id="exampleInputEmail" placeholder="邮箱"/>
            </div>
          </div>
          <div className="box-footer">
            <button type="submit" className="btn btn-primary">提交</button>
          </div>
        </form>
      </div>
      );
  }
}

export default UserList;
