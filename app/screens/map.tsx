import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Polygon } from "react-native-maps";

import DataFunctions from "../functions/data-functions";
import SiteFunctions from "../functions/site-functions";

/**
 * @description a map view using Google Maps, that contains an overlay for congestion in Bournemouth Beach and icons for toilets and lifeguards
 * @author Josh Burtsal
 * @param {*} preview if true shows a more zoomed in smaller version of the map for small previews
 */
const Map = (preview: any) => {
	let beachData: any = DataFunctions.getBeachData();
	let mapMarkers: any = DataFunctions.getMapMarkers();
	let beachSegments: any = DataFunctions.getBeachSegments();

	const [region, setRegion] = useState({
		latitude: 50.7065464,
		longitude: -1.8505051,
		latitudeDelta: preview["preview"] === true ? 0.02 : 0.25,
		longitudeDelta: 0.25,
	});

	return (
		<View style={styles.container}>
			<MapView
				provider={PROVIDER_GOOGLE}
				style={styles.map}
				initialRegion={region}
				onRegionChange={preview["preview"] !== true ? setRegion : () => {}} // Don't change region in preview mode
				showsPointsOfInterest={true}>
				{preview["preview"] !== true
					? mapMarkers.map((marker: any, key: number) => (
							<Marker
								key={key}
								opacity={region.latitudeDelta < 0.1 ? 1 : 0} // Only show markers when zoomed in enough
								coordinate={marker.coordinate}
								image={marker.image}
								title={marker.title}
								description={marker.description}
							/>
					  ))
					: null}
				{beachData.map((beach: any, key: number) => (
					<Polygon
						key={key}
						strokeColor={SiteFunctions.getCongestionColour(beach.congestion, "dark")}
						fillColor={SiteFunctions.getCongestionColour(beach.congestion, "", 0.5)}
						coordinates={beachSegments[key]}></Polygon>
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
		minHeight: 200,
	},
});
