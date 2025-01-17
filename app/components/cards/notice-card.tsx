import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";

import SiteStyles from "../../assets/styles/site";
import DataFunctions from "../../functions/data-functions";

/**
 * @description displays cards from json for important notices on the home page
 */
const NoticeCard = () => {
	let noticeData: any = DataFunctions.getNotices();

	return (
		<View style={{ width: "100%" }}>
			<Card containerStyle={SiteStyles.compactCard}>
				<Card.Title style={SiteStyles.cardTitle}>Notices</Card.Title>
				{noticeData.map((item: any, key: number) => (
					<Card
						key={key}
						containerStyle={[
							SiteStyles.compactCard,
							{
								backgroundColor: "rgba(255,0,0,0.25)",
								borderColor: "red",
								marginBottom: 4,
							},
						]}
					>
						<Card.Title style={SiteStyles.cardTitle}>{item.title}</Card.Title>
						<Text>{item.message}</Text>
					</Card>
				))}
			</Card>
		</View>
	);
};

export default NoticeCard;
