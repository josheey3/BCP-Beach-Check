import React from "react";
import { Text, ScrollView } from "react-native";
import { Button, Card } from "react-native-elements";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"; // https://github.com/oblador/react-native-vector-icons
import SiteColours from "../assets/colours/site-colours";
import NoticeCard from "../components/cards/notice-card";

import StarredCard from "../components/cards/starred-card";
import Map from "./map";

const Home = ({ navigation }: any) => {
	return (
		<ScrollView contentContainerStyle={{ alignItems: "center" }}>
			<StarredCard navigation={navigation}></StarredCard>

			<NoticeCard></NoticeCard>

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
		</ScrollView>
	);
};

export default Home;
