import './App.css';
import React, { Component } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

class App extends Component {

  state = {
    slideOut: false,
    fadeIn: false
  }

  componentDidMount(){
    setTimeout( () =>
      this.setState({
        slideOut: true
      }), 1000);
    setTimeout( () =>
      this.setState({
        fadeIn: true
      }), 1500);
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Sidebar slideOut={this.state.slideOut}/>
        <Content fadeIn={this.state.fadeIn}>Welcome home</Content>
      </div>
    );
  }
  
}

export default App;
