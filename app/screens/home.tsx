import React from "react";
import { ScrollView } from "react-native";
import { Card } from "react-native-elements";
import NoticeCard from "../components/cards/notice-card";

import StarredCard from "../components/cards/starred-card";
import Map from "./map";

const Home = ({ siteColours, userSettings, updateUserSettings }: any) => {
	return (
		<ScrollView contentContainerStyle={{ alignItems: "center" }}>
			<StarredCard siteColours={siteColours} userSettings={userSettings} updateUserSettings={updateUserSettings}></StarredCard>

			<NoticeCard></NoticeCard>

			<Card containerStyle={{ marginTop: 2, height: 230, width: "100%" }}>
				<Map preview={true}></Map>
			</Card>
		</ScrollView>
	);
};

export default Home;
