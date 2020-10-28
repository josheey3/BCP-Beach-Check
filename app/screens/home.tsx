import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";

import PinnedCard from "../components/cards/pinned-card";

const Home = ({ navigation }: any) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<PinnedCard></PinnedCard>
			<Button title="View all beaches" onPress={() => navigation.jumpTo("AllBeaches", { name: "Michaś" })}></Button>
		</View>
	);
};

export default Home;
