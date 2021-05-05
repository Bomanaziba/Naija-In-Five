import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Paper(props) {

  return (
    <Popup trigger={<button className="mu-order-btn">{props.name}</button>} modal>
    <div className="model-img">
        <img src={props.coverpage} />
    </div>
  </Popup>
  )
 }

export default Paper;