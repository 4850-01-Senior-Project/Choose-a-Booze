import { Platform, StyleSheet } from 'react-native';

export const colors = {
  black: '#28232A',
  purple: '#753188',
  green: '#9AE66E',
  orange: '#E59934'
}

export const styles = StyleSheet.create({
  // Colors
  black: { color: '#28232A' },
  purple: { color: '#753188' },
  green: { color: '#9AE66E' },
  orange: { color: '#E59934' },

  // --------------------------------------------------
  // Headings and Paragraphs Styling
  h1: {
    fontSize: 32,
    textAlign: 'center',
    color: colors.green,
    padding: 15,
  },
  h2: {
    fontSize: 24,
    color: colors.black,
  },
  p: {
    fontSize: 16,
    textAlign: 'center',
    margin: 5,
    color: '#FFF',
  },

  // --------------------------------------------------
  // Navigation-Type Components

  category: {
    textAlign: 'center',
    verticalAlign: 'center',
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
    verticalAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginVertical: '2.5%',
    padding: '5%',
    flex: 4,
    backgroundColor: colors.purple,
    borderRadius: 25,
  },
  selector: {
    textAlign: 'center',
    verticalAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginVertical: '2.5%',
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 25,
  },
  reroll: {
    textAlign: 'center',
    verticalAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginVertical: '2.5%',
    width: '90%',
    height: '20%',
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 25,
  },
  submit: {
    textAlign: 'center',
    verticalAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginVertical: '2.5%',
    height: '20%',
    width: '90%',
    alignSelf: 'stretch',
    borderRadius: 25,
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
    width: '100%',
    justifyContent: 'center',
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
    alignSelf: 'center'
  },

  // --------------------------------------------------
  // Used in the Survey Screen

  question: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.purple,
    minHeight: '15%',
    marginHorizontal: '5%',
    marginVertical: '2.5%',
    borderRadius: 25,
  },
});
