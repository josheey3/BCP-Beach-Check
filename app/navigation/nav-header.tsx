import React, { useState } from "react";
import { View, Text } from "react-native";
import { Header, Button, BottomSheet, Card } from "react-native-elements";
import SiteStyles from "../assets/styles/site";
// import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const NavHeader = ({ siteColours, userSettings, updateUserSettings }: any) => {
	const [isVisible, setIsVisible] = useState(false);
	const updateTheme = (theme: string) => {
		updateUserSettings({ theme: theme });
		setIsVisible(false);
		console.log(theme);
	};

	const list = [
		{
			title: "Default",
			onPress: () => updateTheme("default"),
			containerStyle: { backgroundColor: siteColours.secondary, borderRadius: -1 },
		},
		{
			title: "Light",
			onPress: () => updateTheme("light"),
			containerStyle: { backgroundColor: siteColours.secondary, borderRadius: -1 },
		},
		{
			title: "Dark",
			onPress: () => updateTheme("dark"),
			containerStyle: { backgroundColor: siteColours.secondary, borderRadius: -1 },
		},
		{
			title: "Cancel",
			containerStyle: { backgroundColor: "red" },
			titleStyle: { color: "white" },
			onPress: () => {
				console.log("close");
				setIsVisible(false);
			},
		},
	];

	return (
		<View style={{ width: "100%" }}>
			<Header
				backgroundColor={siteColours.secondary}
				centerComponent={{ text: "BCP Beach Check", style: { color: "#fff" } }}
				rightComponent={
					<Button
						type="clear"
						icon={{
							name: "palette",
							color: siteColours.primary,
						}}
						onPress={() => setIsVisible(true)}
					/>
				}
			/>

			<BottomSheet isVisible={isVisible} modalProps={{ animationType: "slide", onRequestClose: () => setIsVisible(false) }}>
				<View>
					<Card containerStyle={Object.assign({ width: "100%" }, SiteStyles.compactCard)}>
						<Card.Title style={SiteStyles.cardTitle}>Choose a theme</Card.Title>
					</Card>
					{list.map((l, i) => (
						// <Button key={i} containerStyle={{ backgroundColor: "grey" }} onPress={l.onPress} title={l.title} titleStyle={l.titleStyle}>
						// 	{/* <ListItem.Content> */}
						// 	{/* <Title style={l.titleStyle}>{l.title}</ListItem.Title> */}
						// 	{/* </ListItem.Content> */}
						// </Button>

						<Button
							key={i}
							onPress={l.onPress}
							title={l.title + (userSettings.theme.toLocaleLowerCase() == l.title.toLocaleLowerCase() ? " (active)" : "")}
							titleStyle={l.titleStyle}
							buttonStyle={l.containerStyle}
						/>

						// <Button
						// 	containerStyle={{ width: "100%" }}
						// 	title="View full map"
						// 	titleStyle={{ color: siteColours.primary }}
						// 	type="clear"
						// 	icon={{name="map", size={26}, color={siteColours.primary} }}
						// 	onPress={() => navigation.jumpTo("Map")}></Button>
					))}
				</View>
			</BottomSheet>

			{/* 
				/* 
				As the app only needs 4 screens, not much navigation is needed. However, if later more navigation is needed these components would be optimal:

				A top left hand burger menu icon can be added to toggle a navigation drawer containing more navigation items
				A top right hand account icon can be added to display more account settings to the user (e.g. log in/out, account settings, dark/light mode) 

				leftComponent={
					<Button
						type="clear"
						icon={{
							name: "menu",
							color: SiteColours.primary,
						}}
						onPress={() => console.log("Menu")}
					/>
				}
				rightComponent={
					<Button
						type="clear"
						icon={{
							name: "person",
							color: SiteColours.primary,
						}}
						onPress={() => console.log("Account")}
					/>
				}
				*/}
		</View>
	);
};

export default NavHeader;

// import React, { useState } from "react";
// import { View } from "react-native";
// import { Header, Button, BottomSheet, ListItem } from "react-native-elements";

// const NavHeader = ({ siteColours, userSettings, updateUserSettings }: any) => {
// 	const [isSheetVisible, setIsSheetVisible] = useState(false);
// 	const updateTheme = (theme: string) => {
// 		updateUserSettings({ theme: theme });
// 		setIsSheetVisible(false);
// 	};
// 	const BottomSheetOptions = [
// 		{ title: "Default", onPress: () => updateTheme("default") },
// 		{ title: "Light", onPress: () => updateTheme("light") },
// 		{ title: "Dark", onPress: () => updateTheme("dark") },
// 		{
// 			title: "Close",
// 			containerStyle: { backgroundColor: "grey" },
// 			titleStyle: { color: "white" },
// 			onPress: () => setIsSheetVisible(false),
// 		},
// 	];

// 	return (
// 		<View style={{ width: "100%" }}>
// 			<Header
// 				backgroundColor={siteColours.secondary}
// 				centerComponent={{ text: "BCP Beach Check", style: { color: "#fff" } }}
// 				rightComponent={
// 					<Button
// 						type="clear"
// 						icon={{
// 							name: "palette",
// 							color: siteColours.primary,
// 						}}
// 						onPress={() => setIsSheetVisible(!isSheetVisible)}
// 					/>
// 				}
// 			/>
// 			<BottomSheet isVisible={isSheetVisible} modalProps={{ animationType: "slide", onRequestClose: () => setIsSheetVisible(false) }}>
// 				{BottomSheetOptions.map((option, key) => (
// 					<ListItem key={key} containerStyle={option.containerStyle} onPress={option.onPress}>
// 						<ListItem.Content>
// 							<ListItem.Title style={option.titleStyle}>
// 								{option.title}
// 								{userSettings.theme.toLocaleLowerCase() == option.title.toLocaleLowerCase() ? " (active)" : null}
// 							</ListItem.Title>
// 						</ListItem.Content>
// 					</ListItem>
// 				))}
// 			</BottomSheet>
// 		</View>
// 	);
// };

// export default NavHeader;
