import { useCallback, useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import * as SplashScreen from 'expo-splash-screen';

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as Font from "expo-font";

import { styles } from './ui/assets/Style';
import { Banner } from './ui/components/MyComponents.js'
import { ScreenHeight } from "react-native-elements/dist/helpers";

// --------------------------------------------------

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [checked, setChecked] = useState(false);

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

  const DATA = [
    {
      title: 'Mixed Drinks',
      data: ['MD 1', 'MD 2', 'MD 3'],
    },
    {
      title: 'Mocktails',
      data: ['MT 1', 'MT 2'],
    },
    {
      title: 'Third Category',
      data: ['Cat 1', 'Cat 2', 'Cat 3', 'Cat 4'],
    }
  ];

  // --------------------------------------------------

  return (
    <View style={styles.fullSize}>
      <Banner />
      <View style={styles.content} onLayout={onLayoutRootView}>
        <Text style={styles.p}>There is nothing in this View.</Text>
        <Text style={styles.p}>The View has been moved to 'DrinkSelector.js'.</Text>
        <Text style={styles.p}>Please navigate from 'App.js' using Python routing.</Text>
      </View >
    </View>
  );
}
