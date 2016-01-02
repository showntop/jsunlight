import React from 'react';

import DashBoard    from "../components/dashboard.js";

import '../styles/main.css';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    return (
      <DashBoard />
    );
  }
}
