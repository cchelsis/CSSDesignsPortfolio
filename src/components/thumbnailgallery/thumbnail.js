import React from 'react';


const Thumbnail = ({ imgUrl, handleClick, index}) => {
 
    return (
      <div style={styles}>
        <img 
          src={imgUrl}
          style={{
          width: '100%',
          height: '100%',
          cursor: 'pointer',
          
          }}
          onClick={handleClick}
          data-index={index}
        />
        
      </div>
    )
  }


const styles = {
    height: '92.5px',
    width: '25%',
    background: 'red',
  
    position: 'relative'
    
    
}

export default Thumbnail;