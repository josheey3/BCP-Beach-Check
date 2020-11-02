import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import SiteStyles from "../assets/styles/site";
import BeachData from "../data/beach-data";
import SiteFunctions from "../functions/site-functions";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"; // https://github.com/oblador/react-native-vector-icons
import FontistoIcon from "react-native-vector-icons/Fontisto";

const AllBeaches = () => {
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
			{BeachData.map((item, key) => (
				<Card
					key={key}
					containerStyle={{
						borderColor: SiteFunctions.getCongestionColour(item.congestion),
						backgroundColor: SiteFunctions.getCongestionColour(item.congestion, "light"),
					}}>
					<Card.Title style={SiteStyles.cardTitle}>{item.name} Beach</Card.Title>
					<View style={SiteStyles.row}>
						<Text>{item.congestion} congestion</Text>
						<Text>BBQs: {item.bbqs}</Text>
					</View>
					<View style={SiteStyles.row}>
						<FontistoIcon name="bicycle" size={26} color={item.cycling == "Permitted" ? "black" : "lightgrey"} />
						<MaterialIcon name="pets" size={26} color={item.dogs == "Permitted" ? "black" : "lightgrey"} />
						<FontistoIcon name="doctor" size={26} color={item.lifeguarded == "Yes" ? "black" : "lightgrey"} />
						<MaterialIcon name="wc" size={26} color={item.toilets == "Yes" ? "black" : "lightgrey"} />
					</View>
				</Card>
			))}
		</ScrollView>
	);
};

export default AllBeaches;
