import React, { useState, useEffect } from 'react';
import './InventoryViewPage.css';
import LongListItem from '../LongListItem/LongListItem';
import PopUpBlock from '../PopUpBlock/PopUpBlock';

const inventoryFlagColor = "#CFB34F"

function InventoryViewPage() {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [bucketItems, setBucketItems] = useState([]);

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

  const handleItemClick = async (item) => {
    setSelectedItem(item);
    try {
      const response = await fetch(`http://localhost:8000/api/dashboard/get-bucket-items/${item.id}/`);
      const result = await response.json();
      setBucketItems(result); // Set bucketItems directly to the fetched result
    } catch (error) {
      console.error('Error fetching bucket items:', error);
    }
  };
  

  const handleClosePopup = () => {
    setSelectedItem(null);
    setBucketItems([]); // Reset bucketItems when closing the popup
  };

  return (
    <div className="InventoryViewPage">
      {inventoryItems.map((item, index) => (
        <div key={index} onClick={() => handleItemClick(item)}>
          <LongListItem imageUrl={''} flag={`Available: ${item['total_count'] - item['issued_count']}`} flagColor={(item['total_count'] - item['issued_count'])?inventoryFlagColor:"#ff5555"} flagTextColor="#fff">
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
          <h2>{selectedItem['bucket_name']}</h2>
          <p>Total Count: {selectedItem['total_count']}</p>
          <p>Issued: {selectedItem['issued_count']}</p>
          <h3>Items:</h3>
          <ul>
            {bucketItems.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </PopUpBlock>
      )}
    </div>
  );
}

export default InventoryViewPage;
