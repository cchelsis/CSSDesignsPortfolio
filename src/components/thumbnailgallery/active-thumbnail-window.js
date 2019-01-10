import React, { Component } from 'react';

const ActiveThumbnailWindow = ({ activeThumbnail }) => {
    return (
      <div className="activethumbnail" style={ styles }>
        <img 
        src={activeThumbnail.imgUrl}
          style= {{
            width: '100%',
            height: '314.91px',
          }}
        />
      </div>
    )
  }


const styles = {
    height: '65%',
    width: '100%',
    position: 'relative'
}

export default ActiveThumbnailWindow;