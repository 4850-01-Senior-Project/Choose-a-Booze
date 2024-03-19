// import { useCallback, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import { styles, colors } from '../assets/Style';
import { ListItem, Category, Discovery, Selector } from '../components/MyComponents'

// --------------------------------------------------

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.black}}>
      { /* Change the Discovery Component to use a python script which is held inside the server folder. */}
      <Selector
        onPress={() => navigation.navigate('Randomizer')}
        item='This is a Selector for Randomizer' />
      <Selector
        onPress={() => navigation.navigate('SurveyScreen')}
        item='This is a Selector For Survey Questions' />
      <Selector
        onPress={() => navigation.navigate('Home')}
        item='This is a Selector For Liked Drinks' />
    </View>
  );
}