import { createContext, useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { NavigationContext } from "@react-navigation/native";

import { styles, colors } from '../assets/Style';
import { ListItem, Category, Discovery, Selector } from '../components/MyComponents'

// --------------------------------------------------

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      <Selector
        onPress={() => navigation.navigate('Randomizer')}
        item='This is a Selector for Randomizer' />
      <Selector
        onPress={() => navigation.navigate('SurveyScreen')}
        item='This is a Selector For Survey Questions' />
      <Selector
        onPress={() => navigation.navigate('Home')} // Needs to be changed to Liked Drinks
        item='This is a Selector For Liked Drinks' />
    </View>
  );
}