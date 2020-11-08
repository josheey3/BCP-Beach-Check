import React from "react";
import { View, ScrollView } from "react-native";
import { Card, Button } from "react-native-elements";

import SiteStyles from "../../assets/styles/site";

import BeachDetailsOverlay from "../overlays/beach-details-overlay";
// import StarredBeach from "./starred-beach";

import SiteFunctions from "../../functions/site-functions";
import DataFunctions from "../../functions/data-functions";
import SiteColours from "../../assets/colours/site-colours";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"; // https://github.com/oblador/react-native-vector-icons

const StarredCard = ({ navigation }: any) => {
	let beachData: any = DataFunctions.getBeachData();
	let userSettings: any = DataFunctions.getUserSettings();

	return (
		<View style={{ width: "100%" }}>
			<Card containerStyle={Object.assign({ paddingBottom: 0 }, SiteStyles.compactCard)}>
				<Card.Title style={SiteStyles.cardTitle}>Starred beaches</Card.Title>

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
							<Card.FeaturedSubtitle>{beachData[item].congestion + " congestion"}</Card.FeaturedSubtitle>
						</Card>
					))}
				</ScrollView>
				<Button
					containerStyle={{ width: "100%" }}
					title="View all beaches"
					titleStyle={{ color: SiteColours.primary }}
					type="clear"
					icon={<MaterialIcon name="search" size={26} color={SiteColours.primary} />}
					onPress={() => navigation.jumpTo("AllBeaches")}></Button>
			</Card>
		</View>
	);
};

export default StarredCard;
