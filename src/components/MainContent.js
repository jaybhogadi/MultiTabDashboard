// src/components/MainContent.js
import React from 'react';
import { useLocation } from 'react-router-dom';
// import LeftNavBar from './LeftNavBar';
import WaferDefectClassification from './WaferDefect/WaferDefectClassification';
import TrainingResults from './TrainingResults/TrainingResults';
import ModelTraining from './ModelTraining/ModelTraining';
// import SecondLeftNavBar from './SecondLeftNavBar';



const MainContent = ({ activeImage, setActiveImage }) => {
  const location = useLocation();
  const isWaferDefectClassifier = location.pathname === '/wafer-defect-classifier';
  const isModelTraining = location.pathname === '/model-training';
  const isTrainingResults = location.pathname === '/training-results';

  return (
    <div className="main-content">
      {/* <SecondLeftNavBar activeImage={activeImage} setActiveImage={setActiveImage} /> */}
      {isWaferDefectClassifier && <WaferDefectClassification/> }
      { isModelTraining && <ModelTraining/>}
      { isTrainingResults && <TrainingResults/>}
     
    </div>
  );
};

export default MainContent;
