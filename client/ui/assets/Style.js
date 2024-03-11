import { StyleSheet } from "react-native";
import colors from './Colors.js';

export default styles = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontFamily: 'monospace',
    color: colors.orange,
    padding: 16,
  },
  p: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'monospace',
  },

  // --------------------------------------------------

  category: {
  fontSize: 32,
  fontFamily: 'monospace',
  padding: 16,
  },
  discovery: {
    fontSize: 32,
    fontFamily: 'monospace',
    padding: 16,
    color: colors.orange,
  },
  section: {
    fontSize: 32,
    fontFamily: 'monospace',
    padding: 16,
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

  item: {
    backgroundColor: colors.purple,
    color: colors.orange,
    padding: 30,
  },
  title: {
    fontSize: 24,
  },
});
