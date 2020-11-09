import React, { useState } from "react";
import { View } from "react-native";
import { Header, Button, BottomSheet, ListItem } from "react-native-elements";

const NavHeader = ({ siteColours, userSettings, updateUserSettings }: any) => {
	const [isVisible, setIsVisible] = useState(false);
	const updateTheme = (theme: string) => {
		updateUserSettings({ theme: theme });
		setIsVisible(false);
	};

	const list = [
		{ title: "Default", onPress: () => updateTheme("default") },
		{ title: "Light", onPress: () => updateTheme("light") },
		{ title: "Dark", onPress: () => updateTheme("dark") },
		{
			title: "Cancel",
			containerStyle: { backgroundColor: "red" },
			titleStyle: { color: "white" },
			onPress: () => setIsVisible(false),
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
						onPress={() => setIsVisible(!isVisible)}
					/>
				}
			/>

			<BottomSheet isVisible={isVisible} modalProps={{ animationType: "slide" }}>
				{list.map((l, i) => (
					<ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
						<ListItem.Content>
							<ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
						</ListItem.Content>
					</ListItem>
				))}
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
