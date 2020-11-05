import React from "react";
import { Text, View } from "react-native";
import { Button, Card } from "react-native-elements";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"; // https://github.com/oblador/react-native-vector-icons
import SiteColours from "../assets/colours/site-colours";

import StarredCard from "../components/cards/starred-card";
import Map from "./map";

const Home = ({ navigation }: any) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<StarredCard></StarredCard>
			<Button
				containerStyle={{ width: "100%" }}
				title="View all beaches"
				titleStyle={{ color: SiteColours.primary }}
				type="clear"
				icon={<MaterialIcon name="search" size={26} color={SiteColours.primary} />}
				onPress={() => navigation.jumpTo("AllBeaches")}></Button>

			<Card containerStyle={{ height: 230, width: "100%" }}>
				<Map preview={true}></Map>
			</Card>

			<Button
				containerStyle={{ width: "100%" }}
				title="View full map"
				titleStyle={{ color: SiteColours.primary }}
				type="clear"
				icon={<MaterialIcon name="map" size={26} color={SiteColours.primary} />}
				onPress={() => navigation.jumpTo("Map")}></Button>
		</View>
	);
};

export default Home;
