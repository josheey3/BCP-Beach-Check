const images: any = {
	toilet: require("../assets/icons/wc.png"),
	lifeguard: require("../assets/icons/doctor.png"),
};

const MapMarkers = [
	{
		type: "toilet",
		image: images.toilet,
		coordinate: { latitude: 50.716012, longitude: -1.87593 },
		title: "Public toilet",
		description: "Under Aruba",
	},
	{
		type: "toilet",
		image: images.toilet,
		coordinate: { latitude: 50.715548, longitude: -1.878068 },
		title: "Public toilet",
		description: "Next to amusements",
	},
	{
		type: "toilet",
		image: images.toilet,
		coordinate: { latitude: 50.71812, longitude: -1.866416 },
		title: "Public toilet",
		description: "Next to Red Arrows",
	},
	{
		type: "toilet",
		image: images.toilet,
		coordinate: { latitude: 50.715114, longitude: -1.885258 },
		title: "Public toilet",
		description: "In West Cliff Gardens",
	},
	{
		type: "toilet",
		image: images.toilet,
		coordinate: { latitude: 50.71376, longitude: -1.887515 },
		title: "Public toilet",
		description: "On West Cliff Promenade",
	},
	{
		type: "toilet",
		image: images.toilet,
		coordinate: { latitude: 50.711554, longitude: -1.896019 },
		title: "Public toilet",
		description: "Behind Vesuvio restaurant",
	},
	{
		type: "toilet",
		image: images.toilet,
		coordinate: { latitude: 50.683724, longitude: -1.947933 },
		title: "Public toilet",
		description: "Next to The Haven Ferry Cafe",
	},
	{
		image: images.lifeguard,
		coordinate: { latitude: 50.716082, longitude: -1.874003 },
		title: "Lifeguard",
	},
	{
		image: images.lifeguard,
		coordinate: { latitude: 50.715497, longitude: -1.877034 },
		title: "Lifeguard",
	},
	{
		image: images.lifeguard,
		coordinate: { latitude: 50.713524, longitude: -1.88749 },
		title: "Lifeguard",
	},
	{
		image: images.lifeguard,
		coordinate: { latitude: 50.717717, longitude: -1.86361 },
		title: "Lifeguard",
	},
];

export default MapMarkers;
