// import { useCallback, useEffect, useState } from "react";
import { ScrollView, View, Pressable, Text } from "react-native";

import { styles, colors } from '../assets/Style';
import { Category, Discovery, Selector } from '../components/MyComponents'

// --------------------------------------------------

export default function Home({ navigation }) {
  return (
    <ScrollView style={{ height: '100%', borderWidth: 3 }}>
      { /* Change the Discovery Component to use a python script which is held inside the server folder. */}
      <Discovery item='This is a discovery component' />
      {/* ScrollView for the Alcohol Base */}
      <ScrollView  horizontal={true} style={styles.scrollview}>
        {/* Pass an onPress function to the Category Component to lead it to the correct page */}
        <Category item='Base 1' />
        <Category item='Base 2' />
        <Category item='Base 3' />
        <Category item='Base 4' />
        <Category item='Base 5' />
        <Category item='Base 6' />
      </ScrollView>
      {/* ScrollView for the Tags */}
      <ScrollView  horizontal={true} style={styles.scrollview}>
        <Category item='Fruity' />
        <Category item='Sweet' />
        <Category item='Creamy' />
        <Category item='Light' />
        <Category item='Refreshing' />
        <Category item='Spicy' />
        <Category item='Spiced' />
        <Category item='Seasonal' />
        <Category item='Fizzy' />
        <Category item='Botanical' />
        <Category item='Strong' />
      </ScrollView>
      <Selector
        onPress={() => navigation.navigate('DrinkSelector')}
        item='Drink Selector' />
    </ScrollView>
  );
}