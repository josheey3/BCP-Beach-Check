import React from "react";
import { ScrollView, Text, View, Linking } from "react-native";
import { Button, Card } from "react-native-elements";
import { Title } from "react-native-paper";
import SiteStyles from "../assets/styles/site";
import DataFunctions from "../functions/data-functions";
import SiteFunctions from "../functions/site-functions";

const FAQ = () => {
	let faqData = DataFunctions.getFAQs();
	let siteColours: any = SiteFunctions.getSiteColours();

	return (
		<ScrollView>
			<Card>
				<Title>Can't find your question?</Title>
				<View style={SiteStyles.row}>
					<Button
						type="clear"
						icon={{ name: "email", color: siteColours.primary }}
						title="Contact us"
						titleStyle={{ color: siteColours.primary }}
						onPress={() => {
							Linking.openURL("mailto:help@bcpbeach.co.uk"); // Use Linking to go straight to device's default email app
						}}></Button>
					<Button
						type="clear"
						icon={{ name: "open-in-new", color: siteColours.primary }}
						title="Visit website"
						titleStyle={{ color: siteColours.primary }}
						onPress={() => {
							Linking.openURL("https://www.bcpcouncil.gov.uk/Home.aspx"); // Use Linking to go straight to device's default web browser app
						}}></Button>
				</View>
			</Card>
			{faqData.map((item: any, key: number) => (
				<Card
					key={key}
					containerStyle={{
						borderColor: "#AAA",
						backgroundColor: "#EEE",
					}}>
					<Title>{item.question}</Title>
					<Text>{item.answer}</Text>
				</Card>
			))}
		</ScrollView>
	);
};

export default FAQ;
