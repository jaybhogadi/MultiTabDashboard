import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopNavBar.css'; // Import CSS file for styles

const TopNavBar = () => {
  return (
    <div className="top-nav">
      <NavLink to="/model-training" className="tab" activeClassName="active">
        Model Training
      </NavLink>
      <NavLink to="/training-results" className="tab" activeClassName="active">
        Training Results
      </NavLink>
      <NavLink to="/wafer-defect-classifier" className="tab" activeClassName="active">
        Wafer Defect Classifier
      </NavLink>
    </div>
  );
};

export default TopNavBar;
