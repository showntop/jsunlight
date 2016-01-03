import React          from 'react';
import { connect }    from 'react-redux';
import { Link }       from 'react-router';


import UserForm       from '../components/user-form';


function mapStateToProps (state) {
  let {user} = state;
          debugger;

  return {
    message: user.requestMessage
  };

}

export class NewUser extends React.Component {
  static propTypes = {
    items : React.PropTypes.array,
  }

  render () {

    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            用户管理
            <small>新建</small>
          </h1>
        </section>

        <section className="content">
          <UserForm { ...this.props } />
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NewUser);
