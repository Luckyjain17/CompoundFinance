import React, { useState, useEffect } from "react";
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
import SwapVerticalCircleSharpIcon from '@mui/icons-material/SwapVerticalCircleSharp';


const Connection = () => {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(()=>{
    requestAccount()
  },[])
  //   Requests access to the user's META MASK WALLET
  async function requestAccount() {
    console.log("Requestion account...");

    // Check if Meta MAsk Extenxion exist
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        localStorage.setItem("uniqueId", accounts[0]);
      } catch (error) {
        console.log("Error Connectiog....");
      }
    } else {
      alert("Meta Mask not Detected");
    }
  }

  return (
    <div className=''>
      <div className="bottomTextWrapper"><div className='iconWrapper'><MonetizationOnSharpIcon className='dollarIcon'/><SwapVerticalCircleSharpIcon className='arrowIcon'/></div> <b>USDC&nbsp;</b> <span style={{color:'grey'}}>|&nbsp;Ethereum <div style={{fontSize:"20px"}}>{walletAddress}</div></span></div>
    </div>
  );
};

export default Connection;
