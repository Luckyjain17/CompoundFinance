import React from 'react'
import './Home.css';
import Header from '../Component/Header/Header'
import Container from '@mui/material/Container';
import Chart from '../Component/Header/Chart/Chart';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Connection from '../Connection'
import SecondChart from '../Component/SecondChart/SecondChart';
import ThirdCard from '../Component/ThirdCard/ThirdCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {
  
  return (
    <Container maxWidth="xl" className="compoundPage">
      <Header />
      <Connection />
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <Item><Chart /></Item>
  </Grid>
  <Grid item xs={6}>
    <Item><Chart /></Item>
  </Grid>
</Grid>
<SecondChart />
<ThirdCard />
    </Container>
  )
}

export default Home
