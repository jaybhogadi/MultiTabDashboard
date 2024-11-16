// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import TopNavBar from './components/TopNavBar';
// import WaferDefectClassification from './components/WaferDefectClassification';
// import './App.css';
// import Header from './components/Header';
// import SecondLeftNavBar from './components/SecondLeftNavBar';
// import LeftNavBar from './components/LeftNavBar';

// function App() {
//   const [activeImage, setActiveImage] = React.useState(2);
//   const location = useLocation();
//   const isWaferDefectClassifier = location.pathname === '/wafer-defect-classifier';

//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <TopNavBar />
//         <div className="main-content">
//           <SecondLeftNavBar activeImage={activeImage} setActiveImage={setActiveImage} />
//           {isWaferDefectClassifier && <LeftNavBar activeItem={activeImage} setActiveItem={setActiveImage} />}
//           <div className="content-area">
//             <Routes>
//               <Route path="/wafer-defect-classifier" element={<WaferDefectClassification />} />
//               {/* Add routes for other tabs */}
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import WaferDefectClassification from './components/WaferDefect/WaferDefectClassification';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import SecondLeftNavBar from './components/SecondLeftNavBar';
// import LandingPage from './components/'

function App() {
  const [activeImage, setActiveImage] = React.useState(2);

  return (
    <Router>
      <div className="App">
        <Header />
        <TopNavBar />
        <div className='Main'>
        <SecondLeftNavBar activeImage={activeImage} setActiveImage={setActiveImage} />

        <MainContent activeImage={activeImage} setActiveImage={setActiveImage} />
        {/* <Routes> */}
          {/* <Route path="/wafer-defect-classifier" element={<WaferDefectClassification />} /> */}
          {/* Add routes for other tabs */}
        {/* </Routes> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
