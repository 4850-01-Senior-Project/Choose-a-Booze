import { useCallback, useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as Font from "expo-font";

import { getAllDrinkDataByLiquorType } from './controllers/getData'
import { styles } from './ui/assets/Style';
import { Banner } from './ui/components/MyComponents.js'
import { ScreenHeight } from "react-native-elements/dist/helpers";
import { MyButton } from "./ui/components/MyButton";
import Home from "./ui/screens/Home";
import DrinkSelector from "./ui/screens/DrinkSelector";

// --------------------------------------------------

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [checked, setChecked] = useState(false);

  // --------------------------------------------------

  const [getData, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllDrinkDataByLiquorType('Bourbon');
        setData(data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // --------------------------------------------------

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(MaterialIcons.font);
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  // --------------------------------------------------

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  // --------------------------------------------------

  /*
  const DATA = [
    {
      title: 'Mixed Drinks - Bourbon',
      data: getData.map((drink) => String(drink.drink.Name)),
    },
  ];
  */

  // --------------------------------------------------

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
