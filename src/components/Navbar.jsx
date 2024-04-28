import React from 'react'
import { Text, Input, InputGroup, InputLeftElement, Button, Avatar, Stack } from '@chakra-ui/react';
import searchLogo from '../icons/search.svg';
import bellLogo from "../icons/bell.svg";
import downLogo from "../icons/downArrow.svg";

const Navbar = () => {
  return (
		<>
			<Stack direction="row">
				<Text>Dashboard</Text>
				<InputGroup>
					<InputLeftElement pointerEvents="none">
						<img src={searchLogo} alt="Dashboard Logo" />
					</InputLeftElement>
					<Input placeholder="Search Dashboard"></Input>
				</InputGroup>
				<img src={bellLogo} alt="Dashboard Logo" />
				<Button rightIcon={<img src={downLogo} alt="Dashboard Logo" />} colorScheme='facebook'>
					Import
				</Button>
				<Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
			</Stack>
		</>
	);
}

export default Navbar