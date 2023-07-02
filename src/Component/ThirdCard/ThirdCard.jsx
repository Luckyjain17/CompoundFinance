import React from 'react'
import './ThirdCard.css'
import { Data } from '../Data/Data'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import SwapVerticalCircleSharpIcon from '@mui/icons-material/SwapVerticalCircleSharp';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import TokenIcon from '@mui/icons-material/Token';
import TollIcon from '@mui/icons-material/Toll';
import '../SecondChart/SecondChart.css';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

const ThirdCard = () => {
  return (
    <div>
        <Card sx={{ minWidth: 275, backgroundColor: "#252c34", marginTop: "25px" }}>
      <div className='table'>
        <CardContent>
        <TableContainer component={Paper} className="tableContainer">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableRow1">Collateral Asset</TableCell>
            <TableCell align="right" className="tableRow1">Total Supply</TableCell>
            <TableCell align="right" className="tableRow1">Oracle Price</TableCell>
            <TableCell align="right" className="tableRow1">Reserves</TableCell>
            <TableCell align="right" className="tableRow1">Collateral Factor</TableCell>
            <TableCell align="right" className="tableRow1">Liquidation Factor</TableCell>
            <TableCell align="right" className="tableRow1">Liquidation Penalty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((row) => (
            <TableRow
              key={row.ca}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} 
              
            >
              <TableCell component="th" scope="row" className="tableRow2">
              <div>{row.ca === "Wrapped Bitcoin" ? <CurrencyBitcoinIcon /> :
               row.ca === "Ether" ? <SwapVerticalCircleSharpIcon /> :
               row.ca === "Compound" ? <AutoAwesomeMotionIcon    /> : 
               row.ca === "Uniswap" ? <TollIcon /> : 
               row.ca === "Chainlink" ? <TokenIcon /> : 
               " "} 
              {row.ca}</div>
              {/* <div>{row.ca === "Wrapped Bitcoin" ? <SwapVerticalCircleSharpIcon />  : " " }{row.ca}</div> */}
              <div>{row.caBottomText}</div>
              </TableCell>
              <TableCell align="right" className="tableRow2 tanleRow2Hover">{row.ta}
              <BorderLinearProgress variant="determinate" value={50} />
              </TableCell>
              <TableCell align="right" className="tableRow2">{row.op}</TableCell>
              <TableCell align="right" className="tableRow2">{row.re}</TableCell>
              <TableCell align="right" className="tableRow2">{row.cf}</TableCell>
              <TableCell align="right" className="tableRow2">{row.lf}</TableCell>
              <TableCell align="right" className="tableRow2">{row.lp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </CardContent>
      </div>
    </Card>

    </div>
  )
}

export default ThirdCard
