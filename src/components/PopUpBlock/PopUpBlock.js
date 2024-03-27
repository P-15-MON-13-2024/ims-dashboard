import React, { useState } from 'react';
import './PopUpBlock.css'
const PopUpBlock = ({ title, content, onConfirm, onCancel }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleConfirm = () => {
    onConfirm();
    setIsOpen(false);
  };

  const handleCancel = () => {
    onCancel();
    setIsOpen(false);
  };

  return (
    <div className='PopUpBlock'>
      <button onClick={togglePopup}>Open Dialog</button>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-dialog">
            <div className="popup-header">
              <h2>{title}</h2>
              <button onClick={handleCancel}>X</button>
            </div>
            <div className="popup-content">
              <p>{content}</p>
            </div>
            <div className="popup-footer">
              <button onClick={handleConfirm}>Confirm</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUpBlock;
