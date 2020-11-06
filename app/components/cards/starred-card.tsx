import React from "react";
import { View, ScrollView } from "react-native";
import { Card, Button } from "react-native-elements";

import SiteStyles from "../../assets/styles/site";

import BeachDetailsOverlay from "../overlays/beach-details-overlay";
import StarredBeach from "./starred-beach";

import SiteFunctions from "../../functions/site-functions";
import DataFunctions from "../../functions/data-functions";

const StarredCard = () => {
	let beachData: any = DataFunctions.getBeachData();
	let userSettings: any = DataFunctions.getUserSettings();

	return (
		<View style={{ width: "100%" }}>
			<Card containerStyle={{ justifyContent: "center" }}>
				<Card.Title style={SiteStyles.cardTitle}>Starred beaches</Card.Title>

				<ScrollView horizontal={true}>
					{userSettings.starredBeaches.map((item: any, key: number) => (
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
