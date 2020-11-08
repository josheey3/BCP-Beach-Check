import React from "react";
import { View } from "react-native";
import { Header, Button } from "react-native-elements";

import SiteFunctions from "../functions/site-functions";

const NavHeader = () => {
	let siteColours: any = SiteFunctions.getSiteColours();

	return (
		<View style={{ width: "100%" }}>
			<Header
				backgroundColor={siteColours.secondary}
				centerComponent={{ text: "BCP Beach Check", style: { color: "#fff" } }}

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
				*/
			/>
		</View>
	);
};

export default NavHeader;
