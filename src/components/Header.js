import React from 'react';
// import './Header.css';
// import Typography from '@material-ui/core/Typography';
import Typography from '@mui/material/Typography';

// Landing page of NDeVA Application
const Header = () => {
  return (
    <Typography component="div" className="header">
      {/* <img
        src="tcs_logo.svg"
        alt="tcs logo"
        style={{
          marginTop: '-8px',
          paddingRight: '10px',
          borderRight: '1px solid #8D99C3',
          marginRight: '10px',
          height: '30px',
        }}
      /> */}
      <span className="boldfont" style={{ display: 'inline', fontSize: '24px' }}>
        Multi Tab's Dashboard
        <sup>TM</sup>
      </span>
      <i
        className="fa fa-sign-out-alt"
        aria-hidden="true"
        // onClick={() => logout()}
        style={{
          float: 'right',
          marginTop: '10px',
          fontWeight: '900',
          cursor: 'pointer',
        }}
      />
      <img
        src="/assets/user.png"
        alt="user"
        style={{
          float: 'right',
          margin: '0px 20px',
          borderRadius: '5px',
          width: '35px',
        }}
      />
      <Typography component="div" style={{ display: 'inline', float: 'right' }}>
        <h5 style={{ margin: '0px', color: '#4BA3F3' }}>
          {/* {user.first_name + ' ' + user.last_name} */}
          user
        </h5>
        <h6 style={{ margin: '0px' }} id="role">
          {/* {user.role} */}
          Developer
        </h6>
      </Typography>
    </Typography>
  );
};

export default Header;
