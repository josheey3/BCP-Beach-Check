import { StyleSheet } from "react-native";

const SiteStyles = StyleSheet.create({
	cardTitle: {
		marginBottom: 4,
		color: "#111",
	},
	compactCard: {
		padding: 8,
		margin: 0,
		alignContent: "center",
	},
	missingInfoCard: {
		padding: 8,
		margin: 2,
		alignContent: "center",
		backgroundColor: "#eee",
		borderColor: "#111",
		marginBottom: 8,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
});

export default SiteStyles;
