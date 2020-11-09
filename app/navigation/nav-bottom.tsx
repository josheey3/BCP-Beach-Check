import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"; // https://reactnavigation.org/docs/material-bottom-tab-navigator/
import Icon from "react-native-vector-icons/MaterialIcons"; // https://github.com/oblador/react-native-vector-icons

import Home from "../screens/home";
import Map from "../screens/map";
import FAQ from "../screens/faq";
import AllBeaches from "../screens/all-beaches";

const Tab = createMaterialBottomTabNavigator();

const NavBottom = ({ siteColours, userSettings, updateUserSettings }: any) => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				style={{ width: "100%" }}
				initialRouteName="Home"
				activeColor={siteColours.primary}
				inactiveColor={"#eee"}
				barStyle={{ backgroundColor: siteColours.secondary }}
				backBehavior="history">
				<Tab.Screen
					name="Home"
					children={() => (
						<Home navigation={navigator} siteColours={siteColours} userSettings={userSettings} updateUserSettings={updateUserSettings} />
					)}
					options={{
						tabBarLabel: "Home",
						tabBarAccessibilityLabel: "Home page",
						tabBarIcon: ({ color }) => <Icon name="home" size={26} color={color} />,
					}}
				/>
				<Tab.Screen
					name="Map"
					children={() => <Map siteColours={siteColours} userSettings={userSettings} updateUserSettings={updateUserSettings} />}
					options={{
						tabBarLabel: "Map",
						tabBarIcon: ({ color }) => <Icon name="map" size={26} color={color} />,
					}}
				/>
				<Tab.Screen
					name="AllBeaches"
					children={() => <AllBeaches siteColours={siteColours} userSettings={userSettings} updateUserSettings={updateUserSettings} />}
					options={{
						tabBarLabel: "Search",
						tabBarIcon: ({ color }) => <Icon name="search" size={26} color={color} />,
					}}
				/>
				<Tab.Screen
					name="FAQ"
					children={() => <FAQ siteColours={siteColours} userSettings={userSettings} updateUserSettings={updateUserSettings} />}
					options={{
						tabBarLabel: "FAQ",
						tabBarIcon: ({ color }) => <Icon name="help" size={26} color={color} />,
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default NavBottom;
