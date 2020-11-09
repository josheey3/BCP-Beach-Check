import React, { useState } from "react";
import { View } from "react-native";
import { Header, Button, BottomSheet, Card } from "react-native-elements";
import SiteStyles from "../assets/styles/site";

const NavHeader = ({ siteColours, userSettings, updateUserSettings }: any) => {
	const [isVisible, setIsVisible] = useState(false);
	const updateTheme = (theme: string) => {
		updateUserSettings({ theme: theme });
		setIsVisible(false);
	};
	const themeOptions = [
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
					{themeOptions.map((theme, key) => (
						<Button
							key={key}
							onPress={theme.onPress}
							title={theme.title + (userSettings.theme.toLocaleLowerCase() == theme.title.toLocaleLowerCase() ? " (active)" : "")}
							titleStyle={theme.titleStyle}
							buttonStyle={theme.containerStyle}
						/>
					))}
				</View>
			</BottomSheet>
		</View>
	);
};

export default NavHeader;
