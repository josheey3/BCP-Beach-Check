import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"; // https://reactnavigation.org/docs/material-bottom-tab-navigator/

//import Icon from "react-native-vector-icons/FontAwesome"; // https://github.com/oblador/react-native-vector-icons
import Icon from "react-native-vector-icons/MaterialIcons"; // https://github.com/oblador/react-native-vector-icons

import Home from "../screens/home";
import Settings from "../screens/settings";
import Map from '../screens/map';
import FAQ from "../screens/faq";
import AllBeaches from "../screens/all-beaches";

import SiteColours from "../assets/colours/site-colours";

const Tab = createMaterialBottomTabNavigator();

const NavBottom = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				style={{ width: "100%" }}
				initialRouteName="Home"
				activeColor={SiteColours.primary}
				inactiveColor={SiteColours.primaryDark}
				barStyle={{ backgroundColor: SiteColours.secondary }}
				// backBehavior="history"
			>
				<Tab.Screen
					name="Home"
					component={Home}
					options={{
						tabBarLabel: "Home",
						tabBarAccessibilityLabel: "Home page",
						tabBarIcon: ({ color }) => <Icon name="home" size={26} color={color} />,
					}}
				/>
				<Tab.Screen
					name="Settings"
					component={Settings}
					options={{
						tabBarLabel: "Settings",
						tabBarIcon: ({ color }) => <Icon name="settings" size={26} color={color} />,
						// tabBarIcon: ({ color }) => <Icon name="cog" size={26} color={color} />,
					}}
				/>
				<Tab.Screen
					name="Map"
					component={Map}
					options={{
						tabBarLabel: "Map",
						tabBarIcon: ({ color }) => <Icon name="map" size={26} color={color} />,
					}}
				/>
				<Tab.Screen
					name="FAQ"
					component={FAQ}
					options={{
						tabBarLabel: "FAQ",
						tabBarIcon: ({ color }) => <Icon name="help" size={26} color={color} />,
						// tabBarIcon: ({ color }) => <Icon name="question" size={26} color={color} />,
					}}
				/>
				<Tab.Screen
					name="AllBeaches"
					component={AllBeaches}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default NavBottom;
