import React from "react";
import { Tabs } from "expo-router";
import { home, counter } from "assets";
import { Image } from "expo-image";
import { settings } from "../../assets";

export default function TabLayout() {
	return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => <Image source={home} />,
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="count"
				options={{
					title: "Counter",
					tabBarIcon: ({ color }) => <Image source={counter} />,
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title: "Settings",
					tabBarIcon: ({ color }) => <Image source={settings} />,
					headerShown: false,
				}}
			/>
		</Tabs>
	);
}
