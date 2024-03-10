import { useCallback, useEffect, useState } from "react";
import { ScrollView, View, Pressable, RefreshControl } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from "expo-font";

import { colors } from '../assets/Style';
import { Category, Discovery } from '../components/MyComponents'

// --------------------------------------------------

export default function Home({ navigation }) {
  return (
    <View>
      <Discovery item='This is a discovery component' />
      <ScrollView horizontal={true}>
        <Category item='Category 1' />
        <Category item='Category 2' />
        <Category item='Category 3' />
        <Category item='Category 4' />
        <Category item='Category 5' />
        <Category item='Category 6' />
      </ScrollView>
      <View style={{ height: 120, width: 120, borderWidth: 3 }}>
        <Pressable
          style={{
            backgroundColor: colors.orange,
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center'
          }}
          onPress={() => navigation.navigate('DrinkSelector')}
        />
      </View>
    </View>
  );
}