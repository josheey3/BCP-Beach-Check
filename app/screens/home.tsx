import React from "react";
import { Text, View } from "react-native";
import { Button, Card } from "react-native-elements";

import PinnedCard from "../components/cards/pinned-card";
import Map from "./map";

const Home = ({ navigation }: any) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<PinnedCard></PinnedCard>
			{/* <Button title="View all beaches" onPress={() => navigation.jumpTo("AllBeaches")}></Button> */}
			<Card containerStyle={{ height: 230, width: "100%" }}>
				<Map preview={true}></Map>
			</Card>
		</View>
	);
};

export default Home;
