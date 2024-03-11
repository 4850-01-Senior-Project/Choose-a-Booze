import { StyleSheet } from "react-native";

export const colors = {
  black: "#2C272E",
  purple: "#753188",
  green: "#9AE66E",
  orange: "#E59934"
}

export default styles = StyleSheet.create({
  // Colors
  black: { color: "#2C272E" },
  purple: { color: "#753188" },
  green: { color: "#9AE66E" },
  orange: { color: "#E59934" },

  // --------------------------------------------------
  // Headings and Paragraphs Styling
  h1: {
    fontSize: 32,
    fontFamily: 'monospace',
    padding: 16,
  },
  p: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'monospace',
  },

  // --------------------------------------------------
  // Navigation-Type Components

  category: {
    fontSize: 32,
    fontFamily: 'monospace',
    padding: 16,
  },
  discovery: {
    fontSize: 32,
    fontFamily: 'monospace',
    padding: 16,
    width: '80%',
    marginHorizontal: '10%',
    height: width / 2,
    borderWidth: 2,
    color: colors.orange,
  },
  section: {
    fontSize: 32,
    fontFamily: 'monospace',
    padding: 16,
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
