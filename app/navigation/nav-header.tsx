import React from "react";
import { View } from "react-native";
import { Header, Button } from "react-native-elements";

import SiteColours from "../assets/colours/site-colours";

const NavHeader = () => {
	return (
		<View style={{ width: "100%" }}>
			<Header
				backgroundColor={SiteColours.secondary}
				leftComponent={
					<Button
						type="clear"
						icon={{
							name: "menu",
							color: SiteColours.primary,
						}}
						onPress={() => console.log("Menu") /*navigation.toggleDrawer()*/}
					/>
				}
				centerComponent={{ text: "BCP Beach Check", style: { color: "#fff" } }}
				rightComponent={
					<Button
						type="clear"
						icon={{
							name: "person",
							color: SiteColours.primary,
						}}
					/>
				}
			/>
		</View>
	);
};

export default NavHeader;
