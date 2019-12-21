import React, { Component } from 'react';
import Main from '../../components/Main';
import Intro from '../Intro';
import './App.css';
import 'whatwg-fetch';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        TV Series List
        </header>        
        <Main />
      </div>
      
    );
  }
}

export default App;
