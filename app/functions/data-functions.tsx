import BeachData from "../data/beach-data";
import BeachSegments from "../data/beach-segments";
import MapMarkers from "../data/map-markers";
import UserSettings from "../data/user-settings";
import FAQ from "../data/faqs.json";

/**
 * @description a class containing all the functions for getting data accross the app. Is designed so that static json files can be replaced with a proper API easily in the future
 * @author Josh Burtsal
 * @class DataFunctions
 */
class DataFunctions {
	static getBeachData(id?: number): Array<any> {
		let data: any;
		id ? (data = BeachData[id]) : (data = BeachData);
		return data;
	}

	static getBeachDataByKey(key: string, value: string): Array<any> {
		let data: any = BeachData.filter((beach: any) => {
			return beach[key].toLocaleLowerCase().includes(value.toLocaleLowerCase());
		});
		return data;
	}

	static getMapMarkers(id?: number) {
		let markers;
		id ? (markers = MapMarkers[id]) : (markers = MapMarkers);
		return markers;
	}

	/**
	 *
	 * @description get the LatLng coordinates for each of the segements of the beaches. Separate from getBeachData as segements are only required for a map and beach data is used in many other places
	 * @static
	 * @param {number} [id]
	 * @returns
	 * @memberof DataFunctions
	 */
	static getBeachSegments(id?: number) {
		let segments;
		id ? (segments = BeachSegments[id]) : (segments = BeachSegments);
		return segments;
	}

	static getUserSettings() {
		let settings = UserSettings;
		return settings;
	}

	static getFAQs() {
		let faqs = FAQ;
		return faqs;
	}
}

export default DataFunctions;
