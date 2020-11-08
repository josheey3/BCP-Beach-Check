import React from "react";
import { View, useWindowDimensions } from "react-native";
import { Header, Button, Text } from "react-native-elements";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/home";
import Settings from "../screens/settings";

const Drawer = createDrawerNavigator();

const NavSide = () => {
	const ref = React.useRef(null);
	const dimensions = useWindowDimensions();

	return (
		<NavigationContainer ref={ref}>
			<Text>Help</Text>
			<Drawer.Navigator initialRouteName="Home" drawerType={dimensions.width >= 768 ? "permanent" : "front"}>
				<Drawer.Screen name="Home" component={Home} />
				<Drawer.Screen name="Notifications" component={Settings} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default NavSide;
