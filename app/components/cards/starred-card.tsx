import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { Card, Button } from "react-native-elements";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"; // https://github.com/oblador/react-native-vector-icons

import SiteStyles from "../../assets/styles/site";
import SiteFunctions from "../../functions/site-functions";
import DataFunctions from "../../functions/data-functions";

const StarredCard = ({ navigation, siteColours, userSettings, updateUserSettings }: any) => {
	let beachData: any = DataFunctions.getBeachData();

	return (
		<View style={{ width: "100%" }}>
			<Card containerStyle={Object.assign({ paddingBottom: 0 }, SiteStyles.compactCard)}>
				<Card.Title style={SiteStyles.cardTitle}>Starred beaches</Card.Title>
				{userSettings.starredBeaches.length >= 1 ? (
					<View>
						<ScrollView horizontal={true}>
							{userSettings.starredBeaches.map((item: any, key: number) => (
								<Card
									key={key}
									containerStyle={Object.assign(
										{
											backgroundColor: SiteFunctions.getCongestionColour(beachData[item].congestion),
											borderColor: SiteFunctions.getCongestionColour(beachData[item].congestion, "dark"),
										},
										SiteStyles.compactCard
									)}>
									<Card.Title style={SiteStyles.cardTitle}>{beachData[item].name}</Card.Title>
									<Text>{beachData[item].congestion + " congestion"}</Text>
								</Card>
							))}
						</ScrollView>
					</View>
				) : (
					<Card containerStyle={SiteStyles.missingInfoCard}>
						<Card.Title style={SiteStyles.cardTitle}>No starred beaches</Card.Title>
						<Text>You can star beaches in the beach search page and they will appear here.</Text>
					</Card>
				)}
			</Card>
		</View>
	);
};

export default StarredCard;
