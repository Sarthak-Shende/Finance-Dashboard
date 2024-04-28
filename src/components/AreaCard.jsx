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
import {AreaChart, Area} from 'recharts';

const AreaCard = () => {
  const data = [
		{ name: "a", ba: 216 },
		{ name: "b", ba: 200 },
		{ name: "c", ba: 328 },
		{ name: "d", ba: 454 },
		{ name: "e", ba: 536 },
	];

  return (
		<>
			<Card>
				<CardBody>
					<Stat>
						<StatLabel>Profit and Loss</StatLabel>
						<StatNumber>$682.5</StatNumber>
						<StatHelpText>On Track</StatHelpText>
					</Stat>
					<AreaChart
						width={730}
						height={250}
						data={data}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
					>
						<defs>
							<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
								<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
							</linearGradient>
						</defs>
						<Area
							type="monotone"
							dataKey="ba"
							stroke="#ffffff"
							fillOpacity={1}
							fill="url(#colorUv)"
						/>
					</AreaChart>
				</CardBody>
			</Card>
		</>
	);
}

export default AreaCard