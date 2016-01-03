import React     from 'react'

import HeaderBar from "../components/header/header-bar";
import NavigationMenu from "../components/navigation-menu";


class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <HeaderBar />
        <NavigationMenu />
        
        {this.props.children}

        <footer className="main-footer">
            <div className="pull-right hidden-xs">
                <b>Version</b> 1.0.0
            </div>
            <strong>This project is a derivative of <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong>
        </footer>

        {/*<ControlsMenu />*/}
      </div>
    )
  }
}

export default Dashboard;
