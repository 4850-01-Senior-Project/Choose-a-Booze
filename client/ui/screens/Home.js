// import { useCallback, useEffect, useState } from "react";
import { ScrollView, View, Pressable, Text } from "react-native";

import { styles, colors } from '../assets/Style';
import { Category, Discovery } from '../components/MyComponents'

// --------------------------------------------------

export default function Home({ navigation }) {
  return (
    <View style={{ backgroundColor: styles.black, borderWidth: 5 }}>
      <Discovery item='This is a discovery component' />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} horizontal={true} style={{ padding: '5%' }}>
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
          onPress={() => navigation.navigate('DrinkSelector')}>
          {
            <Text style={styles.p}>Drink Selector</Text>
          }</Pressable>
      </View>
    </View>
  );
}