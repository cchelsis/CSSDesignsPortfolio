import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';


export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className="navbarwrapper">
        <div className='menu-header'>
          <Link className='link home-link' to='/resume.js'>Welcome!</Link>
      
        </div>
        </div>

      </div>
    );
  }
}