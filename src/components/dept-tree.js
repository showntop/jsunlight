import React          from 'react';
import { connect }    from 'react-redux';

import { Link }       from 'react-router';

import {Treebeard}    from 'react-treebeard';

import {fetchRootDepts} from "../actions/depts";

// import styles         from '../styles/dept-tree';

class DeptTree extends React.Component {
  static propTypes = {
    depts : React.PropTypes.array,
  }

  constructor(props){
    super(props);
    this.state = {
      depts: []
    };
    this.onToggle = this.onToggle.bind(this);
  }

  componentWillMount() {

    const {dispatch} = this.props;
    dispatch(fetchRootDepts());
  }

  componentWillReceiveProps(nextProps) {

    
  }

  onToggle(node, toggled){
    if(this.state.cursor){this.state.cursor.active = false;}
    node.active = true;
    if(node.children){ node.toggled = toggled; }
    this.setState({ cursor: node });
  }

  render() {

    return(          
      <Treebeard data={this.props.depts} onToggle={this.onToggle}/>
    );
  }
}

export default DeptTree;
