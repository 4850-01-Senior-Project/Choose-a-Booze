import { StyleSheet } from "react-native";

export const colors = {
  black: "#2C272E",
  purple: "#753188",
  green: "#9AE66E",
  orange: "#E59934"
}

export const styles = StyleSheet.create({
  // Colors
  black: { color: "#2C272E" },
  purple: { color: "#753188" },
  green: { color: "#9AE66E" },
  orange: { color: "#E59934" },

  // --------------------------------------------------
  // Headings and Paragraphs Styling
  h1: {
    fontSize: 32,
    padding: 16,
  },
  p: {
    fontSize: 16,
    textAlign: 'center',
  },

  // --------------------------------------------------
  // Navigation-Type Components

  category: {
    fontSize: 32,
    padding: 16,
    flex: 1,
  },
  discovery: {
    fontSize: 32,
    padding: 16,
    width: '90%',
    margin: '5%',
    textAlign: 'center',
    //height: width / 2,
    borderWidth: 2,
    borderRadius: 25,
    color: colors.orange,
  },
  section: {
    fontSize: 32,
    padding: 16,
    borderRadius: 25,
  },

  // --------------------------------------------------
  // Misc. Components

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

  item: {
    backgroundColor: colors.purple,
    color: colors.orange,
    padding: 30,
  },
  title: {
    fontSize: 24,
  },
});
