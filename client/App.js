import { useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as Font from "expo-font";

import Home from "./ui/screens/Home";
import DrinkSelector from "./ui/screens/DrinkSelector";
import { styles, colors } from "./ui/assets/Style";

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

  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.fullSize} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name="DrinkSelector"
            component={DrinkSelector}
            options={{ title: 'Drink Selector' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
