import React                    from 'react';
import { connect }              from 'react-redux';

import ExpandableNav            from 'react-expandable-nav';
import AppBar                   from 'material-ui/lib/app-bar';
import IconButton               from 'material-ui/lib/icon-button';
import NavigationClose          from 'material-ui/lib/svg-icons/navigation/close';

// Or var ExpandableNavContainer = ExpandableNav.ExpandableNavContainer;
var {ExpandableNavContainer, ExpandableNavbar, ExpandableNavHeader,
  ExpandableNavMenu, ExpandableNavMenuItem, ExpandableNavPage,
  ExpandableNavToggleButton} = ExpandableNav;

class Root extends React.Component {

  static propTypes = {

  }

  constructor(props) {
      super(props);
      this.state = {

      };
  }

  _handleToggle = (e) => {
    console.log(this);
    this.refs.navContainer.handleToggle();
  }

  componentWillMount() {

  }

  render () {
    var header = {
      small: <span className="logo">&lt;B&gt;</span>,
      full: <span>React</span>
    };
    var menuItems = {
      small: [
          <span className="glyphicon glyphicon-user"></span>, 
          <span className="glyphicon glyphicon-user"></span>,
          <span className="glyphicon glyphicon-user"></span>,
          <span className="glyphicon glyphicon-user"></span>,
        ],
      full: [
          <span>用户管理</span>, 
          <span>部门管理</span>, 
          <span>角色管理</span>,
          <span>权限管理</span>,
        ]
    };

    return (
      <div>
        <AppBar title="组织机构与权限管理" iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={this._handleToggle} />
        <ExpandableNavContainer ref="navContainer" >
          <ExpandableNavbar style ={{top: '64px'}}>
            <ExpandableNavHeader />
            <ExpandableNavMenu>
              <ExpandableNavMenuItem small={menuItems.small[0]} full={menuItems.full[0]} url='/users/' />
              <ExpandableNavMenuItem small={menuItems.small[1]} full={menuItems.full[1]} url='/depts/' />
              <ExpandableNavMenuItem small={menuItems.small[2]} full={menuItems.full[2]} url='/roles/' />
              <ExpandableNavMenuItem small={menuItems.small[3]} full={menuItems.full[3]} url='/permissions/' />
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

function mapStateToProps(state) {

  return {

  };

}


export default connect(mapStateToProps)(Root);
