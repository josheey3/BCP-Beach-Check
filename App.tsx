import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import NavHeader from "./app/navigation/nav-header";
import NavSide from "./app/navigation/nav-side";
import NavBottom from "./app/navigation/nav-bottom";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<NavHeader></NavHeader>
			{/* <NavSide></NavSide> */}
			<NavBottom></NavBottom>
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