import { StyleSheet } from "react-native";

export const colors =
{
	black: "#2C272E",
	purple: "#753188",
	green: "#9AE66E",
	orange: "#E59934"
}

export const styles = StyleSheet.create({
	h1: {
		fontSize: 32,
		fontFamily: 'monospace',
		color: colors.orange,
		padding: 16,
	},
	h2: {

	},
	p: {
		fontSize: 16,
    textAlign: 'center',
		fontFamily: 'monospace',
	},

	// --------------------------------------------------

	fullSize: {
		height: "100%",
		width: "100%",
	},
	banner: {
		height: '20%',
		width: '100%',
	},
	content: {
		height: '80%',
		width: "100%",
		justifyContent: "center",
	},
	category: {
		fontSize: 32,
		fontFamily: 'monospace',
		padding: 16,
	},
	discovery: {
		fontSize: 16,
		fontFamily: 'monospace',
		color: colors.orange,
		padding: 16,
	},
	item: {
		backgroundColor: colors.purple,
		color: colors.orange,
		padding: 30,
	},
	title: {
		fontSize: 24,
	},
});
