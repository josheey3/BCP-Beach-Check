import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapMarkers from "../data/map-markers";
import SiteFunctions from "../functions/site-functions";

//const [region, setRegion] = useState({})
function getInitialState() {
	return {
		region: {
			latitude: 37.78825,
			longitude: -122.4324,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		},
	};
}

const Map = () => {
	const [region, setRegion] = useState({ latitude: 50.7065464, longitude: -1.8505051, latitudeDelta: 0.25, longitudeDelta: 0.25 });

	return (
		<View style={styles.container}>
			<MapView provider={PROVIDER_GOOGLE} style={styles.map} initialRegion={region} onRegionChange={setRegion}>
				{MapMarkers.map((marker, key) => (
					<Marker
						key={key}
						opacity={region.latitudeDelta < 0.1 ? 1 : 0} // Only show markers when zoomed in enough
						coordinate={marker.coordinate}
						image={marker.image}
						title={marker.title}
						description={marker.description}
					/>
				))}
			</MapView>
		</View>
	);
};

export default Map;

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		height: "100%",
		width: "100%",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
});
