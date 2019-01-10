import React from 'react'
import Thumbnail from './thumbnail'

const ThumbnailGrid = ({ thumbnails, handleClick }) => {
    return (
      <div className="thumbnailgrid" style={styles}>
        {
          thumbnails.map((thumbnail, i) => {
            return (
              <Thumbnail
                key={ thumbnail.imgUrl }
                imgUrl={ thumbnail.imgUrl }
                handleClick={handleClick}
                index={i}
              />
            )
          })
        }
      </div>
    )
  }


const styles = {
    height: '185.09px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    
}

export default ThumbnailGrid