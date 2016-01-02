import React                    from 'react'

import Header                   from "../components/header";

const ExpandableNav = require('react-expandable-nav');
const AppBar = require('material-ui/lib/app-bar');
const IconButton = require('material-ui/lib/icon-button');
const NavigationClose = require('material-ui/lib/svg-icons/navigation/close');

// Or var ExpandableNavContainer = ExpandableNav.ExpandableNavContainer;
var {ExpandableNavContainer, ExpandableNavbar, ExpandableNavHeader,
  ExpandableNavMenu, ExpandableNavMenuItem, ExpandableNavPage,
  ExpandableNavToggleButton} = ExpandableNav;

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.expanded || false,
        };
    }

  _handleToggle = (e) => {
    console.log(this);
    this.refs.navContainer.handleToggle();
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    var header = {
        small: <span className="logo">&lt;B&gt;</span>,
        full: <span>React</span>
    };
    var menuItems = {
        small: [<span className="glyphicon glyphicon-home"></span>, <span className="glyphicon glyphicon-user"></span>],
        full: [<span>Home</span>, <span>About us</span>, <span>Contact us</span>]
    };

    return (
      <div>
        <AppBar title="组织机构与权限管理" iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={this._handleToggle} />
        <ExpandableNavContainer ref="navContainer" expanded={this.state.expanded || false} >
          <ExpandableNavbar style ={{top: '64px'}}>
            <ExpandableNavHeader small={header.small} full={header.full} />
            <ExpandableNavMenu>
              <ExpandableNavMenuItem small={menuItems.small[0]} full={menuItems.full[0]} url='/home/' />
              <ExpandableNavMenuItem small={menuItems.small[1]} full={menuItems.full[1]} url='/about/' />
            </ExpandableNavMenu>
          </ExpandableNavbar>
          <ExpandableNavToggleButton />
          <ExpandableNavPage>
            {this.props.children}
          </ExpandableNavPage>
        </ExpandableNavContainer>
      </div>
    );
  }
}

export default Sidebar;
