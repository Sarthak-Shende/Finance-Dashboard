import React from "react";
import {
	Text,
	Button,
	ButtonGroup,
	Grid,
	GridItem,
	Stack,
	Flex,
} from "@chakra-ui/react";
import dashboardLogo from "../icons/dashboard.svg";
import organizationLogo from "../icons/organisation.svg";
import reportsLogo from "../icons/reports.svg";
import documentsLogo from "../icons/documents.svg";
import salesLogo from "../icons/sales.svg";
import purchasesLogo from "../icons/purchases.svg";
import accountingLogo from "../icons/accounting.svg";
import bankingLogo from "../icons/banking.svg";
import auroraLogo from "../icons/aurora.svg";

const Sidebar = () => {
	return (
		<>
			<Grid templateRows="repeat(3,1fr)" templateColumns="repeat(1,1fr)">
				<GridItem rowSpan='1'>
					<img src={auroraLogo} alt="Dashboard Logo" />
				</GridItem>
				<GridItem rowSpan="2">
					<Text fontSize="14px">GENERAL</Text>
					<Stack>
						<Button leftIcon={<img src={dashboardLogo} alt="Dashboard Logo" />}>
							Dashboard
						</Button>
						<Button
							leftIcon={<img src={organizationLogo} alt="Dashboard Logo" />}
						>
							Organization
						</Button>
						<Button leftIcon={<img src={reportsLogo} alt="Dashboard Logo" />}>
							Reports
						</Button>
						<Button leftIcon={<img src={documentsLogo} alt="Dashboard Logo" />}>
							Documents
						</Button>
					</Stack>
				</GridItem>
				<GridItem rowSpan="3">
					<Text fontSize="14px">MANAGEMENT</Text>
					<Stack>
						<Button leftIcon={<img src={salesLogo} alt="Dashboard Logo" />}>
							Sales
						</Button>
						<Button leftIcon={<img src={purchasesLogo} alt="Dashboard Logo" />}>
							Purchases
						</Button>
						<Button
							leftIcon={<img src={accountingLogo} alt="Dashboard Logo" />}
						>
							Accounting
						</Button>
						<Button leftIcon={<img src={bankingLogo} alt="Dashboard Logo" />}>
							Banking
						</Button>
					</Stack>
				</GridItem>
			</Grid>
		</>
	);
};

export default Sidebar;
