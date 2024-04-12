import React, { useState } from 'react';
import './PopUpBlock.css'
const PopUpBlock = ({visibility=false, onClose, children}) => {
  const [isVisible, setIsVisible] = useState(visibility);

  const handleClosePopup = () => {
    onClose();
    setIsVisible(false);
  };


  return (
    <>
    <div className='pop-up-bg' style={isVisible?{display:'block'}:{display:'none'}} onClick={handleClosePopup}> </div>
      <div className='PopUpBlock' style={isVisible?{display:'block'}:{display:'none'}}>
        <div className='close-button-box' onClick={handleClosePopup}><button className='close-button'>X</button></div>
        {isVisible && (
          <div className="popup-overlay" >
            <div className="popup-dialog">
              <div className="popup-content">
                {children}
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
