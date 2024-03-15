import { Platform, StyleSheet } from "react-native";

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
    textAlign: 'center',
    color: colors.orange,
  },
  h2: {
    fontSize: 24,
    paddingLeft: 24,
    color: colors.black,
  },
  p: {
    fontSize: 16,
    textAlign: 'center',
  },

  // --------------------------------------------------
  // Navigation-Type Components

  category: {
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    aspectRatio: 1,
    fontSize: 32,
    margin: 5,
    borderRadius: 25,
  },
  discovery: {
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginVertical: '2.5%',
    flex: 2,
    borderRadius: 25,
  },
  selector: {
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginVertical: '2.5%',
    flex: 2,
    alignSelf: 'stretch',
    borderRadius: 25,
  },

  // --------------------------------------------------
  // Used in the Drink Selector screen

  sectionHeader: {
    backgroundColor: colors.black,
    color: colors.orange,
    padding: 24,
    fontSize: 32,
    minHeight: 130,
  },
  sectionItem: {
    padding: 20,
    fontSize: 24,
  },

  // --------------------------------------------------
  // Misc. Components

  fullSize: {
    height: Platform.OS === 'web' ? '100vh' : '100%',
    width: Platform.OS === 'web' ? '100vw' : '100%',
    flexDirection: 'column',
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
  scrollview: {
    paddingHorizontal: '5%',
    paddingVertical: 'auto',
    flex: 1,
  }
});
