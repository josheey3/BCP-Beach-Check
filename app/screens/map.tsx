import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Polygon } from "react-native-maps";
import BeachData from "../data/beach-data";
import BeachSegments from "../data/beach-segments";
import MapMarkers from "../data/map-markers";
import SiteFunctions from "../functions/site-functions";

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

				{BeachData.map((beach, key) => (
					<Polygon key={key} strokeColor={SiteFunctions.getCongestionColour(beach.congestion, "dark")} fillColor={SiteFunctions.getCongestionColour(beach.congestion, "", 0.15)} coordinates={BeachSegments[key]}></Polygon>
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
