import React, { Component } from 'react';

import {MyArray} from "./project-array";

import ActiveThumbnailWindow from './active-thumbnail-window';
import ThumbnailGrid from './thumbnail-grid';






export default class ThumbnailGallery extends Component {
    state = {
        thumbnails: MyArray,
        activeIndex: 0,
        
    }

    renderThumbnails = () => {
        const { thumbnails, activeIndex } = this.state

            if(thumbnails.length) {
          return (
            <div>
                <ActiveThumbnailWindow
                    activeThumbnail={thumbnails [activeIndex]}
                />

                <ThumbnailGrid
                    thumbnails={thumbnails}
                    handleClick={this.handleClick}
                />
            </div>
          )
        }
        return null
    }

    renderTextContent = () => {
        const { thumbnails, activeIndex } = this.state

        if(thumbnails.length) {
            return (
                <div>
                    <h1> { thumbnails[activeIndex].title }</h1>
                    <p>
                        { thumbnails[activeIndex].bodyText }
                    </p>
                </div>
            )
        }
    }

    handleClick = (e) => {
       const newActiveIndex = e.target.getAttribute('data-index')
       this.setState({activeIndex: newActiveIndex})
    }

    render() {
        // const { thumbnails } = this.state

        return (
        <div style={thumbnailGalleryStyles}>
            {/* left side */}
                <div style={{ flex: 1 }}>
                    { this.renderThumbnails() }
                    
                </div>
            {/* right side */}
                <div style={{ flex: 1, padding: '40px'}}>
                    {this.renderTextContent()}
                    
                </div>
                
        </div>
        );
    }
}

const thumbnailGalleryStyles = {
    background: '#ddd',
    height:  '500px',
    width: '1024px',
    margin: '40px, auto',
    display: 'flex',
}