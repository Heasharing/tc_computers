// HorizontalList.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HorizontalList.css';

const HorizontalList = () => {
  return (
    <div className="horizontal-list-container">
      <div className="horizontal-list">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="horizontal-list-item card">
            <div className="card-body">
              Item {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalList;
