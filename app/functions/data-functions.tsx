import BeachData from "../data/beach-data";
import BeachSegments from "../data/beach-segments";
import MapMarkers from "../data/map-markers";
import UserSettings from "../data/user-settings";
import FAQ from "../data/faqs";
import Notices from "../data/notices";

/**
 * @description a class containing all the functions for getting data accross the app. Is designed so that static json files can be replaced with a proper API easily in the future
 * @author Josh Burtsal
 * @class DataFunctions
 */
class DataFunctions {
	/**
	 * @description gets all beach data or a given beach by id
	 * @static
	 * @param {number} [id] for getting a beach by id rather than all beaches
	 * @returns {Array<any>} array of objects of beaches with all beach data
	 * @memberof DataFunctions
	 */
	static getBeachData(id?: number): Array<any> {
		let data: any;
		id ? (data = BeachData[id]) : (data = BeachData);
		return data;
	}

	/**
	 * @description gets a specific beach by any given key
	 * @static
	 * @param {string} key any key from the beach object e.g. name, dogs or bbq
	 * @param {string} value value you want to match against the given key
	 * @returns {*}
	 * @memberof DataFunctions
	 */
	static getBeachDataByKey(key: string, value: string): any {
		let data: any = BeachData.filter((beach: any) => {
			return beach[key].toLocaleLowerCase().includes(value.toLocaleLowerCase());
		});
		return data;
	}

	/**
	 * @description gets all of the map markers as an array objects
	 * @static
	 * @param {number} [id] the id of the map marker if just 1 is required
	 * @returns array of Marker objects
	 * @memberof DataFunctions
	 */
	static getMapMarkers(id?: number) {
		let markers;
		id ? (markers = MapMarkers[id]) : (markers = MapMarkers);
		return markers;
	}

	/**
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

	/**
	 * @description gets all of the users settings
	 * @static
	 * @returns {*}
	 * @memberof DataFunctions
	 */
	static getUserSettings(): any {
		let settings = UserSettings;
		return settings;
	}

	/**
	 * @description gets all of the faqs
	 * @static
	 * @returns {*}
	 * @memberof DataFunctions
	 */
	static getFAQs() {
		let faqs = FAQ;
		return faqs;
	}

	/**
	 * @description gets all of the active notices
	 * @static
	 * @returns {*}
	 * @memberof DataFunctions
	 */
	static getNotices() {
		let notices = Notices.filter((notice: any) => {
			return notice.active === true;
		});
		return notices;
	}
}

export default DataFunctions;
