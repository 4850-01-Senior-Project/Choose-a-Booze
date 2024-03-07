import { useCallback, useEffect, useState } from "react";
import { ScrollView, View, Image, SectionList, Text, RefreshControl } from "react-native";
import * as SplashScreen from 'expo-splash-screen';

import { Category, Discovery } from '../components/MyComponents'

export default function Home() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        setTimeout(SplashScreen.hideAsync, 5000);
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(MaterialIcons.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
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

  return (
    <View>
      <Discovery/>
      <ScrollView horizontal={true}>
        <Category/>
        <Category/>
      </ScrollView>
    </View>
  );
}