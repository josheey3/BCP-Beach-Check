import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import NavHeader from "./app/navigation/nav-header";
import NavBottom from "./app/navigation/nav-bottom";
import DataFunctions from "./app/functions/data-functions";
import SiteFunctions from "./app/functions/site-functions";

const App = () => {
	let [userSettings, setUserSettings] = useState(DataFunctions.getUserSettings());
	let [siteColours, setSiteColours] = useState(SiteFunctions.getSiteColours(userSettings.theme));
	/* The optimal way to store a user's settings would be to use local on device storage,
	this would allow settings to be persistent after the device/app is restarted */
	const updateUserSettings = ({ starredBeaches, name, theme }: any) => {
		setUserSettings({
			starredBeaches: starredBeaches || userSettings.starredBeaches,
			name: name || userSettings.name,
			theme: theme || userSettings.theme,
		});
		setSiteColours(SiteFunctions.getSiteColours(theme || userSettings.theme));
	};

	return (
		<View style={styles.appContainer}>
			{/* Light required as dark status bar cannot be seen with the dark purple header */}
			<StatusBar style={userSettings.theme == "light" ? "dark" : "light"} />
			{/* Pass siteColours, userSettings and updateUserSettings to each page/screen so that settings and colours can be synced and used at any point accross the app */}
			<NavHeader siteColours={siteColours} userSettings={userSettings} updateUserSettings={updateUserSettings}></NavHeader>
			<NavBottom siteColours={siteColours} userSettings={userSettings} updateUserSettings={updateUserSettings}></NavBottom>
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
