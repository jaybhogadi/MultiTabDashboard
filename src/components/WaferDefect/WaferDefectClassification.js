import React, { useState } from 'react';
import LeftNavBar from '../LeftNavBar';
import SubNavBar from '../SubNavBar';
import Graph from './Graph';
import WaferDefectTable from './WaferDefectTable';

const WaferDefectClassification = () => {
  const [activeItem, setActiveItem] = useState(2);
  const [activeSubNav, setActiveSubNav] = useState('all');

  return (
    <div className="wafer-defect-classification-container">
      <LeftNavBar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="content-area">
        <SubNavBar activeSubNav={activeSubNav} setActiveSubNav={setActiveSubNav} />
        <Graph />
        <WaferDefectTable />
      </div>
    </div>
  );
};

export default WaferDefectClassification;
