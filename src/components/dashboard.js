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
        
        <div className="content-wrapper">
          <section className="content-header">
            <h1>
                  Dashboard
                  <small>Control panel</small>
              </h1>
            {/*<ol className="breadcrumb">
              <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
              <li className="active">Dashboard</li>
            </ol>*/}
          </section>

          <section className="content">
            <div className="row">
             </div>
          </section>

        </div>

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
