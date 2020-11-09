import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import NavHeader from "./app/navigation/nav-header";
import NavBottom from "./app/navigation/nav-bottom";
import DataFunctions from "./app/functions/data-functions";
import SiteFunctions from "./app/functions/site-functions";

export default function App() {
	let [userSettings, setUserSettings] = useState(DataFunctions.getUserSettings());
	let [siteColours, setSiteColours] = useState(SiteFunctions.getSiteColours(userSettings.theme));

	// const updateUserSettings = (starredBeaches: Array<number>, name: string, theme: string) => {
	const updateUserSettings = ({ starredBeaches, name, theme }: any) => {
		setUserSettings({
			starredBeaches: starredBeaches || userSettings.starredBeaches,
			name: name || userSettings.name,
			theme: theme || userSettings.theme,
		});
		setSiteColours(SiteFunctions.getSiteColours(theme || userSettings.theme));
	};

	return (
		<View style={styles.container}>
			{/* Light required as dark status bar cannot be seen with the dark purple header */}
			<StatusBar style={userSettings.theme == "light" ? "dark" : "light"} />
			<NavHeader siteColours={siteColours} userSettings={userSettings} updateUserSettings={updateUserSettings}></NavHeader>
			<NavBottom siteColours={siteColours} userSettings={userSettings} updateUserSettings={updateUserSettings}></NavBottom>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
