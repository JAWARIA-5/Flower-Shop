import React, { Component } from 'react'
import './homepage.css'
import Navbar from '../navbar/navbar';
import Slideshow from '../slideshow/slideshow'; // Corrected import statement
class homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }
  
  render() {
    const items = [
      {
        label: 'About',
        options: ['Option 1', 'Option 2', 'Option 3']
      },
      {
        label: 'Services',
        options: ['Option 4', 'Option 5']
      },
      {
        label: 'Contact',
        options: ['Option 6', 'Option 7', 'Option 8', 'Option 9']
      }
    ];
    return (
      <>
      <div className="page1">
      <header>
      <nav class="nav-bar">
      <Navbar items={items} />
      </nav>
    </header  >
    <Slideshow/>
    <img className="mainimg" src="/Lilyhomepage.jpg" alt="" />
    </div>
    </>
    )
  }
}


export default homepage;