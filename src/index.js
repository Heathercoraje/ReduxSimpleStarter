import React, { Component } from 'react';
// go find libray called React from my dependencies and assign to the variable React
//
import ReactDOM from 'react-dom';
// ReactDOM library is the one that is being used to interact doms, while react is to create and manage components
import YTSearch from 'youtube-api-search';
import Videolist from './components/video_list';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyAo8tozmokmZgPweiTW82Y_dOS9U5ST8vk';
// download youtube-api-search package
// Create a new component and // this component should
// product some html.
class App extends Component {
  constructor (props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos: videos });
      // this.setState({videos:videos}); only when the key and the value have idential names
      // here, videos is just a data from YTSearch method
    });// config option, callback
  }
  render () {
    return (
      <div>
        <SearchBar />
        <Videolist videos={this.state.videos} />
      </div>
    );
  }
} // this is a class but we need to pass instance by instantiate <div></div> (= <App />)

// we have html inside js! JSL (It looks like html but it is js, where webpack and babel take a role to transpile)

// take this component's generated html and put it on DOM
// so it shows on a browser
// we mean to practice trouble-shooting as much as possible in this project.
ReactDOM.render(<App />, document.querySelector('.container'));
// second argument is an existing html element, where to render this instance of component
