import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search.js'
import ImageWall from './components/image_wall.js'
import { PageHeader } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader>Flickr Rainbow Wall <small>Search for an image and we'll sort it by color</small></PageHeader>
        <SearchBar></SearchBar>
      </div>
    );
  }
}

export default App;
