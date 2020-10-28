import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Card } from "react-native-elements";
import SiteStyles from "../assets/styles/site";
import PinnedBeach from "../components/cards/pinned-beach";
import BeachData from "../data/beach-data";
import SiteFunctions from "../functions/site-functions";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"; // https://github.com/oblador/react-native-vector-icons
import FontistoIcon from "react-native-vector-icons/Fontisto"; // https://github.com/oblador/react-native-vector-icons

const AllBeaches = () => {
	return (
		<ScrollView persistentScrollbar={true}>
			<Card>
				<Card.Title style={SiteStyles.cardTitle}>Beach amenities</Card.Title>
				<View style={{ flexDirection: "row", justifyContent: "space-around" }}>
					<FontistoIcon name="bicycle" size={20} />
					<MaterialIcon name="pets" size={26} />
					<FontistoIcon name="doctor" size={26} />
					<MaterialIcon name="wc" size={26} />
				</View>
				{/* Do this propperly using rows and colurmnsmns */}
				<View style={{ flexDirection: "row", justifyContent: "space-around" }}>
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
						justifyContent: "center",
						borderWidth: 4,
						borderColor: SiteFunctions.getCongestionColour(item.congestion),
						backgroundColor: SiteFunctions.getCongestionColour(item.congestion, "light"),
					}}>
					<Card.Title style={SiteStyles.cardTitle}>{item.name} beach</Card.Title>
					<View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 6 }}>
						<Text>{item.congestion} congestion</Text>
						<Text>BBQs: {item.bbqs}</Text>
					</View>
					<View style={{ flexDirection: "row", justifyContent: "space-around" }}>
						<FontistoIcon name="bicycle" size={26} color={item.cycling == "Permitted" ? "black" : "lightgrey"} />
						<MaterialIcon name="pets" size={26} color={item.dogs == "Permitted" ? "black" : "lightgrey"} />
						<FontistoIcon name="doctor" size={26} color={item.lifegaurded == "Yes" ? "black" : "lightgrey"} />
						<MaterialIcon name="wc" size={26} color={item.toilets == "Yes" ? "black" : "lightgrey"} />
					</View>
				</Card>
			))}
		</ScrollView>
	);
};

export default AllBeaches;
