import React, { useState } from "react";
import { Text, ScrollView } from "react-native";
import { Button, Card } from "react-native-elements";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"; // https://github.com/oblador/react-native-vector-icons
import NoticeCard from "../components/cards/notice-card";

import StarredCard from "../components/cards/starred-card";
import SiteFunctions from "../functions/site-functions";
import Map from "./map";

const Home = ({ navigation, siteColours, userSettings, updateUserSettings }: any, route: any) => {
	return (
		<ScrollView contentContainerStyle={{ alignItems: "center" }}>
			<StarredCard siteColours={siteColours} userSettings={userSettings} updateUserSettings={updateUserSettings}></StarredCard>

			<NoticeCard></NoticeCard>

			<Card containerStyle={{ marginTop: 2, height: 230, width: "100%" }}>
				<Map preview={true}></Map>
			</Card>

			{/* <Button
				containerStyle={{ width: "100%" }}
				title="View full map"
				titleStyle={{ color: siteColours.primary }}
				type="clear"
				icon={<MaterialIcon name="map" size={26} color={siteColours.primary} />}
				onPress={() => navigation.jumpTo("Map")}></Button> */}
		</ScrollView>
	);
};

export default Home;
