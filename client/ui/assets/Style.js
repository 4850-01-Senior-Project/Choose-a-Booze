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
    textAlign: 'center',
    color: colors.orange,
  },
  p: {
    fontSize: 16,
    textAlign: 'center',
  },

  // --------------------------------------------------
  // Navigation-Type Components

  category: {
    justifyContent: 'center',
    minWidth: 120,
    minHeight: 120,
    fontSize: 32,
    padding: '2.5%',
    margin: 5,
    flex: 1,
  },
  discovery: {
    width: '90%',
    margin: '5%',
  },
  section: {
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  sectionHeader: {
    padding: '7.5%',
    fontSize: 32,
  },
  sectionItem: {
    padding: '10%',
    fontSize: 24,
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
