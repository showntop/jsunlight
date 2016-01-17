import React          from 'react';
import { connect }    from 'react-redux';

import { Link }       from 'react-router';

import DeptTree       from "../components/dept-tree";


export class Depts extends React.Component {
  static propTypes = {
    

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
            <li><a href="/depts/new"><i className="fa fa-user-plus"></i>新建部门</a></li>
          </ul>
        </section>

        <section className="content">
          <DeptTree { ...this.props } />
        </section>
      </div>    
    );
  }
}

function mapStateToProps(state) {

  const {dept} = state;

  return dept;

}

export default connect(mapStateToProps)(Depts);
