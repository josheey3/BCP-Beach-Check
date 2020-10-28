import React, { useState } from "react";
import { Text, View, ScrollView, Pressable } from "react-native";
import { Card, Overlay } from "react-native-elements";
import Modal from "modal-react-native-web"; // Required for react-native-elements overlay on web

import beachData from "../../data/beach-data";
import userSettings from "../../data/user-settings";

import SiteStyles from "../../assets/styles/site";

import BeachDetailsOverlay from "../overlays/beach-details-overlay";
import SiteFunctions from "../../functions/site-functions";

const PinnedBeach = (item: any, key: number) => {
	const [visible, setVisible] = useState(false);

	const toggleOverlay = () => {
		setVisible(!visible);
	};

	item = item["item"]; // fix this

	return (
		<View>
			<Pressable
				onPress={() => {
					toggleOverlay();
				}}>
				<Card
					key={key}
					containerStyle={{
						backgroundColor: SiteFunctions.getCongestionColour(beachData[item].congestion),
						padding: "8px",
						margin: "2px",
						alignSelf: "center",
					}}>
					<Card.Title style={SiteStyles.cardTitle}>{beachData[item].name}</Card.Title>
					<Card.FeaturedSubtitle>{beachData[item].congestion + " congestion"}</Card.FeaturedSubtitle>
				</Card>
			</Pressable>

			<Overlay ModalComponent={Modal} isVisible={visible} onBackdropPress={toggleOverlay}>
				<Text>
					{beachData[item].name}
					{beachData[item].congestion}
					{beachData[item].bbqs}
					{beachData[item].cycling}
					{beachData[item].dogs}
					{beachData[item].lifegaurded}
					{beachData[item].toilets}
				</Text>
			</Overlay>
		</View>
	);
};

export default PinnedBeach;
