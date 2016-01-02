import React          from 'react';
import { connect }    from 'react-redux';
import { fetchUsers }           from '../actions/users';

import { Link }       from 'react-router';

const Table = require('material-ui/lib/table/table');
const TableBody = require('material-ui/lib/table/table-body');
const TableFooter = require('material-ui/lib/table/table-footer');
const TableHeader = require('material-ui/lib/table/table-header');
const TableHeaderColumn = require('material-ui/lib/table/table-header-column');
const TableRow = require('material-ui/lib/table/table-row');
const TableRowColumn = require('material-ui/lib/table/table-row-column');


function mapStateToProps (state) {

  debugger;
  return {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    height: '300px',

    items: state.users.items
  };

}

export class UsersView extends React.Component {
  static propTypes = {
    items : React.PropTypes.array,
  }

  constructor(){
    super();
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      height: '300px',

      items: []
    };
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchUsers());
  }

  componentWillReceiveProps(nextProps) {
    
    
  }

  renderUser() {
    debugger;
    const {items} = this.props;

    return items.map(function (item, i) {
      debugger;
      return (<TableRow selected={i == items.length - 1}>
              <TableRowColumn>{i + 1}</TableRowColumn>
              <TableRowColumn>{items[i].id}</TableRowColumn>
              <TableRowColumn>{items[i].login}</TableRowColumn>
            </TableRow>)
    });
      
  }

  render () {

    return (
      <div>
        <hr />
        <Table
          height={this.props.height}
          fixedHeader={this.props.fixedHeader}
          fixedFooter={this.props.fixedFooter}
          selectable={this.props.selectable}
          multiSelectable={this.props.multiSelectable}
          onRowSelection={this._onRowSelection}>

          <TableHeader enableSelectAll={this.props.enableSelectAll}>
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip='Super Header' style={{textAlign: 'center'}}>
                Super Header
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip='序号'>序号</TableHeaderColumn>
              <TableHeaderColumn tooltip='ID'>ID</TableHeaderColumn>
              <TableHeaderColumn tooltip='登录名'>登录名</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody
            deselectOnClickaway={this.props.deselectOnClickaway}
            showRowHover={this.props.showRowHover}
            stripedRows={this.props.stripedRows}>
            {this.renderUser()}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                Super Footer
              </TableRowColumn>
            </TableRow>
          </TableFooter>

        </Table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(UsersView);
