import React from "react";
import { Text, View, ScrollView, Pressable } from "react-native";
import { Card } from "react-native-elements";

import beachData from "../../data/beach-data";
import userSettings from "../../data/user-settings";

import SiteStyles from "../../assets/styles/site";

import BeachDetailsOverlay from "../overlays/beach-details-overlay";
import PinnedBeach from "./pinned-beach";

const PinnedCard = () => {
	return (
		<View style={{ width: "100%" }}>
			<Card containerStyle={{ justifyContent: "center" }}>
				<Card.Title style={SiteStyles.cardTitle}>Pinned beaches</Card.Title>

				<ScrollView style={{ flex: 1, flexDirection: "row" }} horizontal={true} persistentScrollbar={true}>
					{userSettings.pinnedBeaches.map((item, key) => (
						<PinnedBeach item={item} key={key}></PinnedBeach>
					))}
				</ScrollView>
			</Card>
		</View>
	);
};

export default PinnedCard;
