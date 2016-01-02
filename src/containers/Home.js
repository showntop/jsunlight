import React          from 'react';
import { connect }    from 'react-redux';
import counterActions from 'actions/counter';
import { Link }       from 'react-router';


export class HomeView extends React.Component {
  static propTypes = {
    increment : React.PropTypes.func,
    counter   : React.PropTypes.number
  }

  render () {
    return (
      <div className='container text-center'>
        <hr />
        <Link to='/about'>Go To About View</Link>
      </div>
    );
  }
}

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter : state.counter
});

export default connect(mapStateToProps, counterActions)(HomeView);
