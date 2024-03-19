// import { useCallback, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import { styles, colors } from '../assets/Style';
import { ListItem, Category, Discovery, Selector } from '../components/MyComponents'

// --------------------------------------------------

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.black}}>
      { /* Change the Discovery Component to use a python script which is held inside the server folder. */}
      <Discovery item='This is a Randomizer component. Renamed.' />
      <Selector
        onPress={() => navigation.navigate('DrinkSelector')}
        item='This is a Selector component. (For Survey Questions)' />
      <Selector
        onPress={() => navigation.navigate('SurveyScreen')}
        item='This is also a Selector. (For Liked Drinks)' />
    </View>
  );
}