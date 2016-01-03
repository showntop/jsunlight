import React        from 'react';
import { connect }  from 'react-redux';

import DashBoard    from "../components/dashboard.js";


class Root extends React.Component {

  static propTypes = {

  }

  render () {
    
    return (
      <DashBoard { ...this.props } /> ///> // 
    );
  }    

}

function mapStateToProps(state) {

  return {

  };

}


export default connect(mapStateToProps)(Root);
