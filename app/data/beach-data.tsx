import options from "./beach-options";

const BeachData = [
	{
		id: 0,
		name: "Bournemouth",
		lifegaurded: options.lifegaurded[1],
		toilets: options.toilets[1],
		dogs: options.dogs[1],
		cycling: options.cycling[0],
		bbqs: options.bbqs[1],
		congestion: "Medium",
	},
	{
		id: 1,
		name: "East Cliff",
		lifegaurded: options.lifegaurded[0],
		toilets: options.toilets[0],
		dogs: options.dogs[1],
		cycling: options.cycling[1],
		bbqs: options.bbqs[2],
		congestion: "Low",
	},
	{
		id: 2,
		name: "Boscombe",
		lifegaurded: options.lifegaurded[1],
		toilets: options.toilets[1],
		dogs: options.dogs[0],
		cycling: options.cycling[0],
		bbqs: options.bbqs[0],
		congestion: "High",
    },
    {
		id: 3,
		name: "Some other beach",
		lifegaurded: options.lifegaurded[1],
		toilets: options.toilets[1],
		dogs: options.dogs[1],
		cycling: options.cycling[0],
		bbqs: options.bbqs[0],
		congestion: "Low",
	},
];

export default BeachData;
