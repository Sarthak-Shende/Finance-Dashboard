import React from 'react';
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
} from "@chakra-ui/react";

const AreaCard = () => {
  return (
		<>
			<Card>
				<CardBody>
					<Stat>
						<StatLabel>Profit and Loss</StatLabel>
						<StatNumber>$682.5</StatNumber>
						<StatHelpText>On Track</StatHelpText>
					</Stat>
				</CardBody>
			</Card>
		</>
	);
}

export default AreaCard