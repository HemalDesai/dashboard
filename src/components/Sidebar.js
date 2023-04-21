import React from 'react';
import './Sidebar.css';

const wordsLeft = 2000;

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="message">
        {wordsLeft} words left
      </div>
      <button className="upgrade-button">Upgrade</button>
      <ul>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
        <li>Option 4</li>
      </ul>
    </div>
  );
}

export default Sidebar;
