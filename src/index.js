import React from 'react';
// go find libray called React from my dependencies and assign to the variable React
//
import ReactDOM from 'react-dom';
// ReactDOM library is the one that is being used to interact doms, while react is to create and manage components
console.log('is this rendering?');
// Create a new component and // this component should
// product some html.
const App = function () {
  return <div>Heather! This is the last lecture! </div>;
}; // this is a class but we need to pass instance by instantiate <div></div> (= <App />)

// we have html inside js! JSL (It looks like html but it is js, where webpack and babel take a role to transpile)

// take this component's generated html and put it on DOM
// so it shows on a browser
// we mean to practice trouble-shooting as much as possible in this project.
ReactDOM.render(<App />, document.querySelector('.container'));
// second argument is an existing html element, where to render this instance of component
