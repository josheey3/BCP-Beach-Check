import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Card, Button } from "react-native-elements";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"; // https://github.com/oblador/react-native-vector-icons
import FontistoIcon from "react-native-vector-icons/Fontisto";

import SiteStyles from "../assets/styles/site";
import SiteFunctions from "../functions/site-functions";
import DataFunctions from "../functions/data-functions";

const AllBeaches = () => {
	let beachData: any = DataFunctions.getBeachData();
	let userSettings: any = DataFunctions.getUserSettings();

	return (
		<ScrollView persistentScrollbar={true}>
			<Card>
				<Card.Title style={SiteStyles.cardTitle}>Beach amenities</Card.Title>
				<View style={SiteStyles.row}>
					<FontistoIcon name="bicycle" size={20} />
					<MaterialIcon name="pets" size={26} />
					<FontistoIcon name="doctor" size={26} />
					<MaterialIcon name="wc" size={26} />
				</View>
				<View style={SiteStyles.row}>
					<Text>Cycling</Text>
					<Text>Dogs</Text>
					<Text>Lifeguard</Text>
					<Text>Toilets</Text>
				</View>
			</Card>
			{beachData.map((item: any, key: number) => (
				<Card
					key={key}
					containerStyle={{
						borderColor: SiteFunctions.getCongestionColour(item.congestion, "dark"),
						backgroundColor: SiteFunctions.getCongestionColour(item.congestion, "light"),
					}}>
					<Button
						type="clear"
						icon={{
							name: "star",
							color: userSettings.starredBeaches.includes(item.id) ? "gold" : "grey",
						}}
						title={item.name + " Beach"}
						titleStyle={{ color: "black" }}
						onPress={() => SiteFunctions.toggleStarBeach(item.id)}
					/>
					<View style={SiteStyles.row}>
						<Text>{item.congestion} congestion</Text>
						<Text>BBQs: {item.bbqs}</Text>
					</View>
					<View style={SiteStyles.row}>
						{/* Only show the icons that are relevant to the beach segement */}
						{item.cycling == "Permitted" ? <FontistoIcon name="bicycle" size={26} /> : null}
						{item.dogs == "Permitted" ? <MaterialIcon name="pets" size={26} /> : null}
						{item.lifeguarded == "Yes" ? <FontistoIcon name="doctor" size={26} /> : null}
						{item.toilets == "Yes" ? <MaterialIcon name="wc" size={26} /> : null}
					</View>
				</Card>
			))}
		</ScrollView>
	);
};

export default AllBeaches;
