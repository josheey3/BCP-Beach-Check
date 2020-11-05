const BeachOptions = {
	lifeguarded: ["No", "Yes"], // Kept these as no/yes rather than boolean true/false
	toilets: ["No", "Yes"],		// As it will be easier to add new options in the future when they want to add a "Yes after _pm" for example
	dogs: ["Not permitted", "Permitted"],
	cycling: ["Not permitted", "Permitted"],
	bbqs: ["Not permitted", "Designated area only", "Permitted after 6pm"],
	congestion: ["Low", "Medium", "High"]
};

export default BeachOptions;
