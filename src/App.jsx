import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Component } from 'react'
import Header from './component/header/header';
import Homepage from './component/homepage/homepage';
import Content from './component/content/content';
import Footer from './component/footer/footer';

class App extends Component {
  constructor (props) {
    super(props)

  }
  render(){
  return (
    <div>
        <Header />
        <Homepage/>
        {/* Other components or content here */}
        <Content/>
        <Footer/>
      </div>
  );
  }
}

export default App;