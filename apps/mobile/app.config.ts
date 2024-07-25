export default {
	expo: {
		name: "tawaf",
		slug: "tawaf",
		scheme: "tawaf",
		version: "1.0.0",
		orientation: "portrait",
		icon: "./assets/logo.png",
		splash: {
			image: "./assets/splash.png",
			resizeMode: "contain",
			backgroundColor: "#009797",
		},
		updates: {
			fallbackToCacheTimeout: 0,
		},
		assetBundlePatterns: ["**/*"],
		ios: {
			supportsTablet: true,
			bundleIdentifier: "com.tawaf",
		},
		android: {
			adaptiveIcon: {
				foregroundImage: "./assets/logo.png",
				backgroundColor: "#009797",
			},
			package: "com.tawaf",
		},
		web: {
			favicon: "./assets/logo.png",
		},
		plugins: ["expo-router"],
		extra: {
			eas: {
				projectId: "8268753a-36fd-4d79-bd10-f116de6ec55b",
			},
		},
	},
};
