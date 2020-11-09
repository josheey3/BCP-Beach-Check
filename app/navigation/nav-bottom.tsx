import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"; // https://reactnavigation.org/docs/material-bottom-tab-navigator/

//import Icon from "react-native-vector-icons/FontAwesome"; // https://github.com/oblador/react-native-vector-icons
import Icon from "react-native-vector-icons/MaterialIcons"; // https://github.com/oblador/react-native-vector-icons

import Home from "../screens/home";
import Settings from "../screens/settings";
import Map from "../screens/map";
import FAQ from "../screens/faq";
import AllBeaches from "../screens/all-beaches";

import SiteFunctions from "../functions/site-functions";
import DataFunctions from "../functions/data-functions";
import SiteColours from "../assets/colours/site-colours";

const Tab = createMaterialBottomTabNavigator();

const NavBottom = () => {
	//let siteColours: any = SiteFunctions.getSiteColours();
	let [siteColours, setSiteColours] = useState(SiteFunctions.getSiteColours());
	//let starredBeaches: setState(settings.starredBeaches)

	let [userSettings, setUserSettings] = useState(DataFunctions.getUserSettings());

	let sitecols: any = SiteColours;
	const updateUserSettings = (starredBeaches: Array<number>, name: string, theme: string) => {
		setUserSettings({
			starredBeaches: starredBeaches || userSettings.starredBeaches,
			name: name || userSettings.name,
			theme: theme || userSettings.theme,
		});
		setSiteColours(SiteFunctions.getSiteColours(theme))
	};
	console.log("User nav", userSettings);

	return (
		<NavigationContainer>
			<Tab.Navigator
				style={{ width: "100%" }}
				initialRouteName="Home"
				activeColor={siteColours.primary}
				inactiveColor={"#eee"}
				barStyle={{ backgroundColor: siteColours.secondary }}>
				{/* <Tab.Screen
					name="home2"
					children={() => <Home updateUserSettings={updateUserSettings} />}
					options={{
						tabBarLabel: "Map",
						tabBarIcon: ({ color }) => <Icon name="map" size={26} color={color} />,
					}}
				/> */}

				{/* <Tab.Screen name="Map View" component={MapScreen} options={({ route }) => ({ title: route.params.name, settings: updateUserSettings })} /> */}
				<Tab.Screen
					name="Home"
					children={() => <Home userSettings={userSettings} updateUserSettings={updateUserSettings} />}
					options={({ route }) => ({
						tabBarLabel: "Home",
						tabBarAccessibilityLabel: "Home page",
						tabBarIcon: ({ color }) => <Icon name="home" size={26} color={color} />,
						updateUserSettings: updateUserSettings,
					})}

					// options={{
					// 	tabBarLabel: "Home",
					// 	tabBarAccessibilityLabel: "Home page",
					// 	tabBarIcon: ({ color }) => <Icon name="home" size={26} color={color} />,
					// }}
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
					name="AllBeaches"
					component={AllBeaches}
					options={{
						tabBarLabel: "Search",
						tabBarIcon: ({ color }) => <Icon name="search" size={26} color={color} />,
					}}
				/>
				<Tab.Screen
					name="FAQ"
					component={FAQ}
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
