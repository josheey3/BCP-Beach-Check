class SiteFunctions {
	static getCongestionColour(congestion: string, brightness?: string) {
		let colour: string = "";
		brightness == "light" ? (colour = "light") : brightness == "dark" ? (colour = "dark") : colour;
		switch (congestion.toLocaleLowerCase()) {
			case "low":
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
