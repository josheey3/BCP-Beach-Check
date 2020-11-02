import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Overlay } from "react-native-elements";

import BeachData from "../../data/beach-data";

const BeachDetailsOverlay = ({ beachId }: any) => {
	const [visible, setVisible] = useState(false);

	const toggleOverlay = () => {
		setVisible(!visible);
	};

	return (
		<View>
			<Button title="Click" onPress={toggleOverlay} />

			<Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
				<Text>
					{BeachData[beachId].name}
					{BeachData[beachId].congestion}
					{BeachData[beachId].bbqs}
					{BeachData[beachId].cycling}
					{BeachData[beachId].dogs}
					{BeachData[beachId].lifeguarded}
					{BeachData[beachId].toilets}
				</Text>
			</Overlay>
		</View>
	);
};

export default BeachDetailsOverlay;
