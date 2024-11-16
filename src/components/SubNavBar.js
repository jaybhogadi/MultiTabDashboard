import React from 'react';

const SubNavBar = ({ activeSubNav, setActiveSubNav }) => {
  return (
    <div className="sub-nav">
      <span
        className={`sub-nav-item ${activeSubNav === 'all' ? 'active' : ''}`}
        onClick={() => setActiveSubNav('all')}
      >
        All Defects (43658)
      </span>
      <span
        className={`sub-nav-item ${activeSubNav === 'corrosion' ? 'active' : ''}`}
        onClick={() => setActiveSubNav('corrosion')}
      >
        Corrosion (8635)
      </span>
      <span
        className={`sub-nav-item ${activeSubNav === 'foreign' ? 'active' : ''}`}
        onClick={() => setActiveSubNav('foreign')}
      >
        Foreign Particle (8428)
      </span>
      <span
        className={`sub-nav-item ${activeSubNav === 'missing' ? 'active' : ''}`}
        onClick={() => setActiveSubNav('missing')}
      >
        Missing Bump (8854)
      </span>
      <span
        className={`sub-nav-item ${activeSubNav === 'residue' ? 'active' : ''}`}
        onClick={() => setActiveSubNav('residue')}
      >
        Residue (8757)
      </span>
      <span
        className={`sub-nav-item ${activeSubNav === 'scratch' ? 'active' : ''}`}
        onClick={() => setActiveSubNav('scratch')}
      >
        Scratch (8984)
      </span>
      {/* Add more options as needed */}
    </div>
  );
};

export default SubNavBar;
