import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import MainPage from './pages/mainpage.jsx';
import Blog from './pages/blog';
import AboutUs from './pages/aboutus.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path='/Flower-Shop' element={<MainPage/>} /> 
            {/*<Route path='/Flower-Shop/Blog' element={<Blog/>}/>*/}
            <Route path='/aboutus' element={<AboutUs />} /> 
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
