import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Card, Button, SearchBar } from "react-native-elements";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"; // https://github.com/oblador/react-native-vector-icons
import FontistoIcon from "react-native-vector-icons/Fontisto";

import SiteStyles from "../assets/styles/site";
import SiteFunctions from "../functions/site-functions";
import DataFunctions from "../functions/data-functions";

const AllBeaches = ({ siteColours, userSettings, updateUserSettings }: any) => {
	const [beachData, setBeachData] = useState(DataFunctions.getBeachData());
	const [search, setSearch] = useState("");
	const updateBeachData = (search: string) => {
		setSearch(search);
		setBeachData(DataFunctions.getBeachDataByKey("name", search));
	};

	return (
		<ScrollView>
			<SearchBar placeholder="Search..." onChangeText={updateBeachData} value={search} />
			<Card containerStyle={SiteStyles.compactCard}>
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
				<View style={{ width: "100%" }} key={key}>
					<Card
						key={key}
						containerStyle={Object.assign(
							{
								borderColor: SiteFunctions.getCongestionColour(item.congestion, "dark"),
								backgroundColor: SiteFunctions.getCongestionColour(item.congestion),
								paddingTop: 0,
							},
							SiteStyles.compactCard
						)}>
						<Button
							type="clear"
							icon={{
								name: "star",
								color: userSettings.starredBeaches.includes(item.id) ? "black" : "rgba(255,255,255,.75)",
							}}
							title={item.name + " Beach"}
							titleStyle={{ color: "black" }}
							onPress={() => {
								updateUserSettings({ starredBeaches: SiteFunctions.toggleStarBeach(key, userSettings.starredBeaches) });
							}}
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
				</View>
			))}
		</ScrollView>
	);
};

export default AllBeaches;
