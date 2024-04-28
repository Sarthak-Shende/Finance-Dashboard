import React from 'react'
import { Text, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import searchLogo from '../icons/search.svg';

const Navbar = () => {
  return (
		<>
			<Text>Dashboard</Text>
			<InputGroup>
				<InputLeftElement pointerEvents="none">
					<img src={salesLogo} alt="Dashboard Logo" />
				</InputLeftElement>
				<Input placeholder="Search Dashboard"></Input>
			</InputGroup>
		</>
	);
}

export default Navbar