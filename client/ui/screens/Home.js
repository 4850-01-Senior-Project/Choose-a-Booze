import { createContext, useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { NavigationContext } from "@react-navigation/native";
import { styles, colors } from '../assets/Style';
import { ListItem, Category, Discovery, Selector } from '../components/MyComponents'
import { getAllDrinkData } from "../../controllers/getData";

// --------------------------------------------------
export let drinkList = []
export default function Home({ navigation }) {

  useEffect(() => {
    const fetchFilteredDrinks = () => {
      console.log("This is working");
      getAllDrinkData()
        .then(result => {
          console.log(result);
          drinkList = result
        })
        .catch(error => {
          console.log(error);
        });
    };
  
    fetchFilteredDrinks();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      <Selector
        onPress={() => navigation.navigate('Randomizer')}
        item='This is a Selector for Randomizer' />
      <Selector
        onPress={() => navigation.navigate('SurveyScreen')}
        item='This is a Selector For Survey Questions' />
      <Selector
        onPress={() => navigation.navigate('LikedDrinks')}
        item='This is a Selector For Liked Drinks' />
    </View>
  );
}