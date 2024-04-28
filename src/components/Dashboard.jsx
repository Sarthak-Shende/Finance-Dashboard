import React from 'react';
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from './Navbar';
import AreaCard from './AreaCard';
import TransferCard from './TransferCard';

const Dashboard = () => {
  return (
    <>
      <Navbar/>
      <AreaCard/>
      <TransferCard/>
    </>
  )
}

export default Dashboard;