import React from "react";
import "./Header.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DashboardIcon from '@mui/icons-material/Dashboard';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import Button from '@mui/material/Button';
import SwapVerticalCircleSharpIcon from '@mui/icons-material/SwapVerticalCircleSharp';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      color: 'white',
      backgroundColor: '#333d4d'
    },
  },
};

const names = [
  "Etherum",
  "Polygon",
  "Arbitrum"
];


const ConnectWallet = () => {

  return (
    <div className="main-page">
      <div className="left-content">
        <div className= "left-text"><AutoAwesomeMotionIcon className="logo" /> Compound</div>
        <div  className="button"><DashboardIcon className="button-logo"/>Dashboard</div>
        <div  className="button"><EqualizerIcon className="button-logo"/>Markets</div>
        <div  className="button"><SpaceDashboardIcon className="button-logo"/>Extensions</div>
        <div  className="button"><CheckCircleIcon className="button-logo"/>Vote</div>
      </div>
      <div className="right-content">
      <FormControl sx={{  width: 200, mt: 3 }}>
        <Select
          className="dropBox"
          displayEmpty
          input={<OutlinedInput />}
          renderValue={(selected) => {
              return <div className="textWrapper"><div style={{display:'flex',position:'relative'}}><MonetizationOnSharpIcon sx={{marginRight:'5px', color:'#8F66FF !important',position:'absolute',right:'8px',zIndex:'1'}}/><SwapVerticalCircleSharpIcon sx={{zIndex:'2'}}/></div> <b>USDC&nbsp;</b> <span style={{color:'grey'}}>Ethereum</span></div>;
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        <Button className="wallet-button" variant="outlined">Connect Wallet</Button>
      </div>
    </div>
  );
};

export default ConnectWallet;
