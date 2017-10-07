import React, { Component } from 'react';
// by adding { Component }, React.Component can be optimized into Component
class SearchBar extends Component {
  constructor (props) {
    super(props);

    this.state = { term: '' }; // initialize state, ONLY! inside constructor method, we manipulate state
  }

  render () { // method syntax for class
    return (
      <div>
        <input
          value={this.state.term}
          onChange={(event) => this.setState({ term: event.target.value })} />
      </div>
    );
  } // watch for the change (onChange) and run this event handler, onChange is react property
}
// defining new class then give access to functions of React.component
export default SearchBar;
