import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Avatar,
	Text,
	Badge,
	Box,
  Stack,
  Button
} from "@chakra-ui/react";
import { format, formatDistanceToNow } from "date-fns";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const TransferCard = () => {
	const data = [
		{
			name: "Dan Abrahmov",
			src: "https://bit.ly/dan-abramov",
			time: new Date(Date.now() - 86400000),
			type: "+",
			amount: "$50",
		},
		{
			name: "Kent Dodds",
			src: "https://bit.ly/kent-c-dodds",
			time: new Date(Date.now() - 9900000),
			type: "-",
			amount: "$27",
		},
	];

	return (
		<>
			<Card>
				<CardHeader>Your Transfers</CardHeader>
				<CardBody>
					{data.map((d) => (
						<Stack direction="row">
							<Box>
								<Avatar name={d.name} src={d.src}></Avatar>
							</Box>
							<Box>
								<Text>From {d.name}</Text>
								<Text>
									{format(d.time, "HH:mm")}{" "}
									{formatDistanceToNow(d.time, { addSuffix: true })}
								</Text>
							</Box>
							<Box>
								<Badge colorScheme="red">
									{d.type} {d.amount}
								</Badge>
							</Box>
						</Stack>
					))}
				</CardBody>
				<CardFooter>
					<Button rightIcon={<ArrowForwardIcon/>}>View all</Button>
				</CardFooter>
			</Card>
		</>
	);
};

export default TransferCard;
