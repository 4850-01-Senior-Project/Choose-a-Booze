import { useCallback, useEffect, useState } from "react";
import { ScrollView, View, Pressable, RefreshControl } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from "expo-font";

import { styles, colors } from '../assets/Style';
import { Category, Discovery } from '../components/MyComponents'

// --------------------------------------------------

export default function Home({ navigation }) {
  return (
    <View>
      <Discovery item='This is a discovery component' />
      <ScrollView horizontal={true} style={{ borderWidth: 3 }}>
        <Category item='Category 1' />
        <Category item='Category 2' />
        <Category item='Category 3' />
        <Category item='Category 4' />
        <Category item='Category 5' />
        <Category item='Category 6' />
      </ScrollView>
      <View style={{ width: '25%', height: 120, borderWidth: 3, alignSelf: 'center' }}>
        <Pressable
          style={[{
            backgroundColor: colors.orange,
            flex: 1,
            justifyContent: 'center'
          }, styles.p]}
          onPress={() => navigation.navigate('DrinkSelector')}
        >Drink Selector</Pressable>
      </View>
    </View>
  );
}