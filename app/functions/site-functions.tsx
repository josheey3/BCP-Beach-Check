import DataFunctions from "./data-functions";

/**
 * @description a class containing useful funtions for use accross all parts of the site
 * @author Josh Burtsal
 * @class SiteFunctions
 */
class SiteFunctions {

	/**
	 * @description used for getting the colour/traffic light for congestion based on the given congestion string
	 * @author Josh Burtsal
	 * @static
	 * @param {string} congestion current congestion from the congestion data (low, medium or high)
	 * @param {string} [brightness] optional brightness, 'light' or 'dark' or null for normal
	 * @param {number} [opacity=1] alpha for rgba opacity
	 * @return {*} an rgba colour value as a string
	 * @memberof SiteFunctions
	 */
	static getCongestionColour(congestion: string, brightness?: string, opacity: number = 1) {
		let colour: string = "rgba(";
		switch (congestion.toLocaleLowerCase()) {
			case "low":
				if (brightness) {
					brightness == "light" ? (colour += "0,225,0") : (colour += "0,80,0");
				} else {
					colour += "0,130,0";
				}
				break;
			case "medium":
				if (brightness) {
					brightness == "light" ? (colour += "255,193,77") : (colour += "255,125,0");
				} else {
					colour += "255,165,0";
				}
				break;
			case "high":
				if (brightness) {
					brightness == "light" ? (colour += "255,70,70") : (colour += "200,0,0");
				} else {
					colour += "255,0,0";
				}
				break;
		}
		colour += "," + opacity + ")";
		return colour;
	}


	// static getAmenityColour(type: string, brightness?: string) {
	// 	let colour: string = "";
	// 	brightness == "light" ? (colour = "light") : brightness == "dark" ? (colour = "dark") : colour;
	// 	switch (type.toLocaleLowerCase()) {
	// 		case "toilet":
	// 			colour += "green";
	// 			break;
	// 		case "medium":
	// 			brightness == "light" ? (colour = "#FFDB99") : (colour += "orange");
	// 			break;
	// 		case "high":
	// 			brightness == "light" ? (colour = "#FFBBBB") : (colour += "red");
	// 			break;
	// 	}
	// 	return colour;
	// }


	/**
	 * @description star or unstar the given beach segment id
	 * @author Josh Burtsal
	 * @static
	 * @param {number} id id of a beach segment
	 * @memberof SiteFunctions
	 */
	static toggleStarBeach(id: number) {
		let userSettings: any = DataFunctions.getUserSettings();
		let idIndex = userSettings.starredBeaches.indexOf(id);
		/* If id is not in starred beaches add it, else remove it if it is */
		idIndex === -1 ? userSettings.starredBeaches.push(id) : userSettings.starredBeaches.splice(idIndex, 1);
	}
}

export default SiteFunctions;
