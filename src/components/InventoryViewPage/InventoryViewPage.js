import React from 'react';
import PropTypes from 'prop-types';
import './InventoryViewPage.css';
import LongListItem from '../LongListItem/LongListItem';
function InventoryViewPage () { 
  var inventoryItems=['a','b']
  
  return(
  <div className="InventoryViewPage">
    {
      inventoryItems.map((item, index)=>(
        <LongListItem imageUrl={''}>
          {item}
        </LongListItem>
      ))
    }

  </div>
);}

InventoryViewPage.propTypes = {};

InventoryViewPage.defaultProps = {};

export default InventoryViewPage;
