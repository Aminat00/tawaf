import React from "react";
import { useNavigationContainerRef, Stack } from "expo-router";
import { useReactNavigationDevTools } from "@dev-plugins/react-navigation";

export default function RootLayout() {
	const navigationRef = useNavigationContainerRef();
	useReactNavigationDevTools(navigationRef);
	return <RootLayoutNav />;
}

function RootLayoutNav() {
	return (
		<Stack>
			<Stack.Screen name="(app)" />
			<Stack.Screen name="home" />
			<Stack.Screen name="details" />
		</Stack>
	);
}
