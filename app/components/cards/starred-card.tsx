import React from "react";
import { View, ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";

import SiteStyles from "../../assets/styles/site";
import SiteFunctions from "../../functions/site-functions";
import DataFunctions from "../../functions/data-functions";

/**
 * @description displays cards of all the starred beach segments on the home page
 */
const StarredCard = ({ userSettings }: any) => {
	let beachData: any = DataFunctions.getBeachData();

	return (
		<View style={{ width: "100%" }}>
			<Card containerStyle={[SiteStyles.compactCard, { paddingBottom: 0 }]}>
				<Card.Title style={SiteStyles.cardTitle}>Starred beaches</Card.Title>
				{userSettings.starredBeaches.length >= 1 ? (
					<View>
						<ScrollView horizontal={true}>
							{userSettings.starredBeaches.map((item: any, key: number) => (
								<Card
									key={key}
									containerStyle={[
										SiteStyles.compactCard,
										{
											backgroundColor: SiteFunctions.getCongestionColour(beachData[item].congestion),
											borderColor: SiteFunctions.getCongestionColour(beachData[item].congestion, "dark"),
										},
									]}>
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
