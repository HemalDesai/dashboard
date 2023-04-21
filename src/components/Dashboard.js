import React from 'react';
import './Dashboard.css';

function Dashboard() {
  const imagesLeft = 1000;
  const wordsLeft = 2000;
  const content = 1;
    const words = 2;
    const images_cnt = 3;
    const templates = 4;

  return (
    <div className='dashboard_main'>
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="user-profile">
          <img src="https://via.placeholder.com/150" alt="User Profile" />
          <h3>User Name</h3>
        </div>
        <div className="dashboard-content">
          <div className="dashboard-card">
            <h4>{imagesLeft} Images Left</h4>
          </div>
          <div className="dashboard-card">
            <h4>{wordsLeft} Words Left</h4>
          </div>
        </div>
        <div className="dashboard-upgrade">
          <button>Upgrade</button>
        </div>
      </div>
    </div>
    <div className="service_container">
    <div className="service_card">
      
      <div><b>Documents Created</b> (Current month)</div>
      <p>{content} contents</p>
      
    </div>
    <div className="service_card">
      <div><b>Words Generated</b> (Current month)</div>
      <p>{words} words</p>
    </div>
    <div className="service_card">
      <div><b>Images Created</b> (Current month)</div>
      <p>{images_cnt} images</p>
    </div>
    <div className="service_card">
      <div><b>Templates Used</b> (Current month)</div>
      <p>{templates} templates</p>
    </div>
    </div>
    </div>
  );
}

export default Dashboard;
