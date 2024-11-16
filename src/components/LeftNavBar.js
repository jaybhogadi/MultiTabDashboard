import React from 'react';

const LeftNavBar = ({ activeItem, setActiveItem }) => {
  return (
    <div className="left-nav">
      <div
        className={`nav-item ${activeItem === 1 ? 'active' : ''}`}
        onClick={() => setActiveItem(1)}
      >
        Incorrectly Classified by AOI
      </div>
      <div
        className={`nav-item ${activeItem === 2 ? 'active' : ''}`}
        onClick={() => setActiveItem(2)}
      >
        Defects Classified Correctly
      </div>
      <div
        className={`nav-item ${activeItem === 3 ? 'active' : ''}`}
        onClick={() => setActiveItem(3)}
      >
        Requires Manual Validation
      </div>
    </div>
  );
};

export default LeftNavBar;
