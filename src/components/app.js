import React, { Component } from 'react';


import ThumbnailGallery from './thumbnailgallery';
import Navbar from './navbar';
import Footer from './footer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        {/* <img className="logo" src="PNGgoeshere"></img> */}
        <h1>Chelsi</h1>
        <h1>Stratton</h1>
        <Navbar/>
        <p className="missionstatement">
          Simple, clean, and impactful desings are what I strive for. They should be easy to use, tell a story, and make the user feel they've had an experience. 
        </p>
        <p className="inspiration">
          My husband and I are very connected with asia; especially the Japanese culture. They value organization, clean, crisp, and uncluttered spaces. This is applied to the mind as well. It give a peaceful clarity; everything has a place, and a purpose. This is what I want to bring to my design: Functional elegance.
          Every project will be different, but this is the intent.
        </p>
       
        
        <Footer/>
      </div>
    );
  }
}

