import React from "react";
import { Text, View } from "react-native";
import { Button, Card } from "react-native-elements";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"; // https://github.com/oblador/react-native-vector-icons

import StarredCard from "../components/cards/starred-card";
import Map from "./map";

const Home = ({ navigation }: any) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<StarredCard></StarredCard>
			<Button
				title="View all beaches"
				type="clear"
				icon={<MaterialIcon name="search" size={26} />}
				onPress={() => navigation.jumpTo("AllBeaches")}></Button>

			<Card containerStyle={{ height: 230, width: "100%" }}>
				<Map preview={true}></Map>
			</Card>
			<Button title="View full map" type="clear" icon={<MaterialIcon name="map" size={26} />} onPress={() => navigation.jumpTo("Map")}></Button>
		</View>
	);
};

export default Home;
