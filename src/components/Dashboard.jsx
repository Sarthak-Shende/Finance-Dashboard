import React from 'react';
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from './Navbar';
import AreaCard from './AreaCard';

const Dashboard = () => {
  return (
    <>
      <Navbar/>
      <AreaCard/>
    </>
  )
}

export default Dashboard;