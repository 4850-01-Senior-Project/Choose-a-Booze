import { StyleSheet } from "react-native";

export const colors =
{
	black: "#2C272E",
	purple: "#753188",
	green: "#9AE66E",
	orange: "#E59934"
}

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black,
		alignItems: "right",
		justifyContent: "center",
	},
	item: {
		backgroundColor: colors.purple,
		color: colors.orange,
		padding: 30,
	},
	header: {
		fontSize: 32,
		backgroundColor: colors.black,
		color: colors.orange,
		padding: 16,
	},
	title: {
		fontSize: 24,
	},
});
