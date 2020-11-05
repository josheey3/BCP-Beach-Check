import React from "react";
import { View, ScrollView } from "react-native";
import { Card, Button } from "react-native-elements";

import beachData from "../../data/beach-data";
import userSettings from "../../data/user-settings";

import SiteStyles from "../../assets/styles/site";

import BeachDetailsOverlay from "../overlays/beach-details-overlay";
import StarredBeach from "./starred-beach";
import SiteFunctions from "../../functions/site-functions";

const StarredCard = ({ navigation }: any) => {
	return (
		<View style={{ width: "100%" }}>
			<Card containerStyle={{ justifyContent: "center" }}>
				<Card.Title style={SiteStyles.cardTitle}>Starred beaches</Card.Title>

				<ScrollView horizontal={true}>
					{userSettings.starredBeaches.map((item, key) => (
						// <StarredBeach item={item} key={key}></StarredBeach>
						<Card
							key={key}
							containerStyle={{
								backgroundColor: SiteFunctions.getCongestionColour(beachData[item].congestion),
								padding: 8,
								margin: 2,
								alignSelf: "center",
							}}>
							<Card.Title style={SiteStyles.cardTitle}>{beachData[item].name}</Card.Title>
							<Card.FeaturedSubtitle>{beachData[item].congestion + " congestion"}</Card.FeaturedSubtitle>
						</Card>
					))}
				</ScrollView>
			</Card>
		</View>
	);
};

export default StarredCard;
