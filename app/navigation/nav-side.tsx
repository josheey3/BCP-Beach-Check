import React from "react";
import { View } from "react-native";
import { Header, Button } from "react-native-elements";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/home";
import Settings from "../screens/settings";
import SiteColours from "../assets/colours/site-colours";

const Drawer = createDrawerNavigator();

const NavSide = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Home" component={Home} />
				<Drawer.Screen name="Notifications" component={Settings} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default NavSide;
