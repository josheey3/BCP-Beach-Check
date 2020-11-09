import React from "react";
import { Text, ScrollView } from "react-native";
import { Button, Card } from "react-native-elements";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"; // https://github.com/oblador/react-native-vector-icons
import NoticeCard from "../components/cards/notice-card";

import StarredCard from "../components/cards/starred-card";
import SiteFunctions from "../functions/site-functions";
import Map from "./map";

const Home = ({ navigation, userSettings, updateUserSettings }: any) => {
	let siteColours: any = SiteFunctions.getSiteColours();
	//let a = options.updateUserSettings;
	console.log(updateUserSettings);

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
				titleStyle={{ color: siteColours.primary }}
				type="clear"
				icon={<MaterialIcon name="map" size={26} color={siteColours.primary} />}
				// onPress={() => navigation.jumpTo("Map")}></Button>
				onPress={() => {
					console.log("1", userSettings);
					updateUserSettings([0, 1], "New", "dark");
					console.log("2", userSettings);
				}}></Button>
		</ScrollView>
	);
};

export default Home;
