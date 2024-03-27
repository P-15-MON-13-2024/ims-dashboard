import React from 'react';
import PropTypes from 'prop-types';
import './InventoryViewPage.css';
import LongListItem from '../LongListItem/LongListItem';
import { useState, useEffect } from 'react';

function InventoryViewPage () { 
  const [inventoryItems, setInventoryItems] = useState([]);

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

  
  return(
  <div className="InventoryViewPage">
    {
      inventoryItems.map((item, index)=>(
        <LongListItem imageUrl={''} flag={`Available: ${item['total_count']-item['issued_count']}`}>
          <h4 align='left'>{item['bucket_name']}</h4>
          <p align='left'>
          Total Count: {item['total_count']}<br/>
          Issued: {item['issued_count']}
          </p>

        </LongListItem>
      ))
    }

  </div>
);}

InventoryViewPage.propTypes = {};

InventoryViewPage.defaultProps = {};

export default InventoryViewPage;
