import React from 'react'

const AppBar = require('material-ui/lib/app-bar');
const IconButton = require('material-ui/lib/icon-button');
const NavigationClose = require('material-ui/lib/svg-icons/navigation/close');
const IconMenu = require('material-ui/lib/menus/icon-menu');
const MenuItem = require('material-ui/lib/menus/menu-item');


class Header extends React.Component {
  render() {
    return (
        <AppBar 
            title="组织机构与权限管理" iconClassNameRight="muidocs-icon-navigation-expand-more" />
    );
  }
}

export default Header;