class SiteFunctions {
	static getCongestionColour(congestion: string, brightness?: string, opacity: number = 1) {
		let colour: string = "rgba(";
		switch (congestion.toLocaleLowerCase()) {
			case "low":
				if (brightness) {
					brightness == "light" ? colour += "0,225,0" : colour += "0,80,0"
				} else {
					colour += "0,130,0"
				}
				break;
			case "medium":
				if (brightness) {
					brightness == "light" ? colour += "255,193,77" :  colour += "255,125,0"
				} else {
					colour += "255,165,0"
				}
				break;
			case "high":
				if (brightness) {
					brightness == "light" ? colour += "255,70,70" : colour += "200,0,0"
				} else {
					colour += "255,0,0"
				}
				break;
		}
		colour += "," + opacity + ")";
		return colour;
	}
	static getAmenityColour(type: string, brightness?: string) {
		let colour: string = "";
		brightness == "light" ? (colour = "light") : brightness == "dark" ? (colour = "dark") : colour;
		switch (type.toLocaleLowerCase()) {
			case "toilet":
				colour += "green";
				break;
			case "medium":
				brightness == "light" ? (colour = "#FFDB99") : (colour += "orange");
				break;
			case "high":
				brightness == "light" ? (colour = "#FFBBBB") : (colour += "red");
				break;
		}
		return colour;
	}
}

export default SiteFunctions;
