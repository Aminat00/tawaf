import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

const HomeScreen: React.FC = () => {
	const router = useRouter();

	return (
		<View>
			<Text>Home Screen</Text>
			<Button title="Go to Details" onPress={() => router.push("/details")} />
		</View>
	);
};

export default HomeScreen;
