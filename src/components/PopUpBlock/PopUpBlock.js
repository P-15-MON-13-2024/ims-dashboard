import React, { useState } from 'react';
import './PopUpBlock.css'
const PopUpBlock = ({ content, visibility=false }) => {
  const [isVisible, setIsVisible] = useState(visibility);

  const togglePopup = () => {
    setIsVisible(!isVisible);
  };


  return (
    <>
    <div className='pop-up-bg' style={isVisible?{display:'block'}:{display:'none'}}> </div>
      <div className='PopUpBlock' style={isVisible?{display:'block'}:{display:'none'}}>
        <div className='close-button-box' onClick={togglePopup}><button className='close-button'>X</button></div>
        {isVisible && (
          <div className="popup-overlay">
            <div className="popup-dialog">
              <div className="popup-content">
                <p>{content}</p>
              </div>
              <div className="popup-footer">
              </div>
            </div>
          </div>
        )}
      </div>
    </>

  );
};

export default PopUpBlock;
