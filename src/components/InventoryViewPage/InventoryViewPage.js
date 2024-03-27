import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './InventoryViewPage.css';
import LongListItem from '../LongListItem/LongListItem';
import PopUpBlock from '../PopUpBlock/PopUpBlock';

function InventoryViewPage() {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/dashboard/get-buckets/');
      const result = await response.json();
      setInventoryItems(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

const handleItemClick = (item) => {
  setSelectedItem((prevSelectedItem) => {
    // If the clicked item is already selected, deselect it
    if (prevSelectedItem && prevSelectedItem['bucket_name'] === item['bucket_name']) {
      return null;
    }
    // Otherwise, select the clicked item
    return item;
  });
};


  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className="InventoryViewPage">
      {inventoryItems.map((item, index) => (
        <div key={index} onClick={() => handleItemClick(item)}>
          <LongListItem imageUrl={''} flag={`Available: ${item['total_count'] - item['issued_count']}`}>
            <h4 align="left">{item['bucket_name']}</h4>
              <p align="left">
                Total Count: {item['total_count']}<br />
                Issued: {item['issued_count']}
              </p>
          </LongListItem>
        </div>
      ))}
      {selectedItem && (
        <PopUpBlock visibility={true} onClose={handleClosePopup}>
          {/* Content to show in the popup */}
          <h2>{selectedItem['bucket_name']}</h2>
          <p>Total Count: {selectedItem['total_count']}</p>
          <p>Issued: {selectedItem['issued_count']}</p>
        </PopUpBlock>
      )}
    </div>
  );
}

InventoryViewPage.propTypes = {};

InventoryViewPage.defaultProps = {};

export default InventoryViewPage;
