import React from 'react';

const WaferDefectTable = () => {
  return (
    <div className="wafer-defect-type">
      <h4>Wafer Defect Type Prediction</h4>
      <table>
        <thead>
          <tr>
            <th>Wafer Defect Image</th>
            <th>Wafer Defect Image ID</th>
            <th>Confidence Score (%)</th>
            <th>Defect Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="image_url" alt="defect" /></td>
            <td>FAC1-WLCSP-AOI1-20220430-img1.png</td>
            <td>92.3</td>
            <td>Corrosion</td>
          </tr>
          <tr>
            <td><img src="image_url" alt="defect" /></td>
            <td>FAC1-WLCSP-AOI1-20220430-img1.png</td>
            <td>92.3</td>
            <td>Corrosion</td>
          </tr>
          <tr>
            <td><img src="image_url" alt="defect" /></td>
            <td>FAC1-WLCSP-AOI1-20220430-img1.png</td>
            <td>92.3</td>
            <td>Corrosion</td>
          </tr>
          <tr>
            <td><img src="image_url" alt="defect" /></td>
            <td>FAC1-WLCSP-AOI1-20220430-img1.png</td>
            <td>92.3</td>
            <td>Corrosion</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default WaferDefectTable;
