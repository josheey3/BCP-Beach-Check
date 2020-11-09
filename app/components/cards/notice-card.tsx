import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";

import SiteStyles from "../../assets/styles/site";
import DataFunctions from "../../functions/data-functions";

const NoticeCard = () => {
	let noticeData: any = DataFunctions.getNotices();

	return (
		<View style={{ width: "100%" }}>
			<Card containerStyle={SiteStyles.compactCard}>
				<Card.Title style={SiteStyles.cardTitle}>Notices</Card.Title>
				{noticeData.map((item: any, key: number) => (
					<Card
						key={key}
						containerStyle={Object.assign(
							{
								backgroundColor: "rgba(255,0,0,0.25)",
								borderColor: "red",
								marginBottom: 4,
							},
							SiteStyles.compactCard
						)}>
						<Card.Title style={SiteStyles.cardTitle}>{item.title}</Card.Title>
						<Text>{item.message}</Text>
					</Card>
				))}
			</Card>
		</View>
	);
};

export default NoticeCard;
