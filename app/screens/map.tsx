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
					<Polygon key={key} strokeColor={SiteFunctions.getCongestionColour(beach.congestion, "dark")} fillColor={SiteFunctions.getCongestionColour(beach.congestion)} coordinates={BeachSegments[key]}></Polygon>
				))}

				{/* <Polygon
					coordinates={[
						{ latitude: 50.68340281063753, longitude: -1.9473670041232771 },
						{ latitude: 50.68220841905381, longitude: -1.9462847170999154 },
						{ latitude: 50.68524981416961, longitude: -1.9384119380177234 },
						{ latitude: 50.68868130996969, longitude: -1.9347641337574695 },
						{ latitude: 50.69118256856022, longitude: -1.9324896205128406 },
						{ latitude: 50.6947846903423, longitude: -1.9270393717945788 },
						{ latitude: 50.69650518232654, longitude: -1.929603404402711 },
						{ latitude: 50.692557439748384, longitude: -1.9359688596560498 },
						{ latitude: 50.68858810533986, longitude: -1.940260394079878 },
						{ latitude: 50.685614869831646, longitude: -1.943427461003433 },
					]}></Polygon>

				<Polygon
					coordinates={[
						{ latitude: 50.6947846903423, longitude: -1.9270393717945788 },
						{ latitude: 50.69650518232654, longitude: -1.929603404402711 },
						{ latitude: 50.703729584542636, longitude: -1.9170002775027295 },
						{ latitude: 50.70217934494779, longitude: -1.9144238087184684 },
					]}></Polygon>

				<Polygon
					coordinates={[
						{ latitude: 50.7068338826538, longitude: -1.9094331926107189 },
						{ latitude: 50.703729584542636, longitude: -1.9170002775027295 },
						{ latitude: 50.70217934494779, longitude: -1.9144238087184684 },
						{ latitude: 50.70545620611368, longitude: -1.9075649734323807 },
						{ latitude: 50.708344705862864, longitude: -1.900959820315704 },
						{ latitude: 50.70971118913377, longitude: -1.9022510905388712 },
					]}></Polygon>

				<Polygon
					coordinates={[
						{ latitude: 50.713431696524104, longitude: -1.8906073407961865 },
						{ latitude: 50.71223504970065, longitude: -1.8892754169948356 },
						{ latitude: 50.708344705862864, longitude: -1.900959820315704 },
						{ latitude: 50.70971118913377, longitude: -1.9022510905388712 },
					]}></Polygon>

				<Polygon
					coordinates={[
						{ latitude: 50.713431696524104, longitude: -1.8906073407961865 },
						{ latitude: 50.71223504970065, longitude: -1.8892754169948356 },
						{ latitude: 50.71451346107573, longitude: -1.878815502688751 },
						{ latitude: 50.71577107419704, longitude: -1.8795059580925821 },
					]}></Polygon>

				<Polygon
					coordinates={[
						{ latitude: 50.71716796878199, longitude: -1.8716816739871045 },
						{ latitude: 50.71590187197664, longitude: -1.8711930883074102 },
						{ latitude: 50.71451346107573, longitude: -1.878815502688751 },
						{ latitude: 50.71577107419704, longitude: -1.8795059580925821 },
					]}></Polygon>

				<Polygon
					coordinates={[
						{ latitude: 50.71716796878199, longitude: -1.8716816739871045 },
						{ latitude: 50.71590187197664, longitude: -1.8711930883074102 },
						{ latitude: 50.71792359182162, longitude: -1.8577011533235166 },
						{ latitude: 50.71896374782728, longitude: -1.8579195399407267 },
					]}></Polygon>

				<Polygon
					coordinates={[
						{ latitude: 50.720102431970716, longitude: -1.8433146314456006 },
						{ latitude: 50.71913529271298, longitude: -1.8430406224870977 },
						{ latitude: 50.71792359182162, longitude: -1.8577011533235166 },
						{ latitude: 50.71896374782728, longitude: -1.8579195399407267 },
					]}></Polygon>

				<Polygon
					coordinates={[
						{ latitude: 50.720102431970716, longitude: -1.8433146314456006 },
						{ latitude: 50.71913529271298, longitude: -1.8430406224870977 },
						{ latitude: 50.71979967400314, longitude: -1.8323893586694773 },
						{ latitude: 50.72008366579882, longitude: -1.8179615445588682 },
						{ latitude: 50.72120145481544, longitude: -1.8178347034741726 },
						{ latitude: 50.72089283243583, longitude: -1.832470740807426 },
					]}></Polygon>

				<Polygon
					coordinates={[
						{ latitude: 50.71947751539381, longitude: -1.7916016416384717 },
						{ latitude: 50.718442435620524, longitude: -1.7919069898271855 },
						{ latitude: 50.71989476988786, longitude: -1.8043441812097605 },
						{ latitude: 50.72008366579882, longitude: -1.8179615445588682 },
						{ latitude: 50.72120145481544, longitude: -1.8178347034741726 },
						{ latitude: 50.721005152504375, longitude: -1.804074442392758 },
					]}></Polygon>

				<Polygon
					coordinates={[
						{ latitude: 50.71947751539381, longitude: -1.7916016416384717 },
						{ latitude: 50.718442435620524, longitude: -1.7919069898271855 },
						{ latitude: 50.717021430490696, longitude: -1.7781014482080515 },
						{ latitude: 50.715328654338464, longitude: -1.7648967214082334 },
						{ latitude: 50.716378626161045, longitude: -1.764340726881155 },
						{ latitude: 50.718118295562604, longitude: -1.7775849461616788 },
					]}></Polygon>

				<Polygon
					coordinates={[
						{ latitude: 50.713255065372046, longitude: -1.7500166730715772 },
						{ latitude: 50.71348474897522, longitude: -1.7479806646097718 },
						{ latitude: 50.71634099867558, longitude: -1.7458194217411416 },
						{ latitude: 50.71582625876849, longitude: -1.7433655092912215 },
						{ latitude: 50.71438762610137, longitude: -1.7443019090361056 },
						{ latitude: 50.71099697185649, longitude: -1.7486054074907598 },
						{ latitude: 50.715328654338464, longitude: -1.7648967214082334 },
						{ latitude: 50.716378626161045, longitude: -1.764340726881155 },
					]}></Polygon>

				<Polygon
					coordinates={[
						{ latitude: 50.71634099867558, longitude: -1.7458194217411416 },
						{ latitude: 50.71582625876849, longitude: -1.7433655092912215 },
						{ latitude: 50.718557792038645, longitude: -1.74117295782088 },
						{ latitude: 50.72174386758916, longitude: -1.7394329519221552 },
						{ latitude: 50.72411470026174, longitude: -1.7386370835966525 },
						{ latitude: 50.72468368406494, longitude: -1.742228252668907 },
					]}></Polygon> */}
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
