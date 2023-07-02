import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { data } from "../Data/Data";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import "./SecondChart.css";


const bull = (
  <Box
    component='span'
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

const SecondChart = () => {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: "#252c34", marginTop: "25px" }}>
      <div className='tableFirst'>
        <CardContent>
          <TableContainer component={Paper} className="tableContainer">
            <Table sx={{ minWidth: 650 }} aria-label='simple table' className="tableWrapper">
              <TableHead>
                <TableRow>
                  <TableCell className="tableRow1">Total Earning</TableCell>
                  <TableCell align='right' className="tableRow1">Earn APR</TableCell>
                  <TableCell align='right' className="tableRow1">Earn Distribution</TableCell>
                  <TableCell align='right' className="tableRow1">Reserves</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component='th' scope='row' className="tableRow2">
                    $214.07M
                  </TableCell>
                  <TableCell align='right' className="tableRow2"><MonetizationOnSharpIcon sx={{color:"#8F66FF", marginRight:"8px"}}/>3.09%</TableCell>
                  <TableCell align='right' className="tableRow2"><AutoAwesomeMotionIcon  sx={{color:"#00D395", backgroundColor:"black", fontSize:"15px", padding:"4px", borderRadius:"15px", marginRight:"8px"}} />0.00%</TableCell>
                  <TableCell align='right' className="tableRow2">$1.39M</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell className="tableRow1">Total Borrowing</TableCell>
                  <TableCell align='right' className="tableRow1">Borrow APR</TableCell>
                  <TableCell align='right' className="tableRow1">Borrow Distribution</TableCell>
                  <TableCell align='right' className="tableRow1">Oracle Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 }, }}
                >
                  <TableCell component='th' scope='row' className="tableRow2">
                    $194.59M
                  </TableCell>
                  <TableCell align='right' className="tableRow2"><MonetizationOnSharpIcon sx={{color:"#8F66FF", marginRight:"8px"}}/>3.99%</TableCell> 
                  <TableCell align='right' className="tableRow2"><AutoAwesomeMotionIcon sx={{color:"#00D395", backgroundColor:"black", fontSize:"15px", padding:"4px", borderRadius:"15px", marginRight:"8px"}} />5.66%</TableCell>
                  <TableCell align='right' className="tableRow2">$1.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </div>
    </Card>
  );
};

export default SecondChart;
