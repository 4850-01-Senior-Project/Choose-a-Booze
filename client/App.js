import { useCallback, useEffect, useState } from "react";
import { ScrollView, View, Image, SectionList, Text, RefreshControl } from "react-native";
import * as SplashScreen from 'expo-splash-screen';

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as Font from "expo-font";

import { Button, CheckBox } from "react-native-elements";
import {getAllDrinkDataByLiquorType} from './controllers/getData'
import { styles, colors } from './ui/assets/Style';
import { MyButton } from './ui/components/MyButton';

// --------------------------------------------------

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [checked, setChecked] = useState(false);
  const [getData, setData] = useState([])
  useEffect(() => {
    const fetchData =  async () => {
      try {
        const data = await getAllDrinkDataByLiquorType('Bourbon');
        setData(data);

      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);
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
      title: 'Beer',
      data: ['Beer 1', 'Beer 2', 'Beer 3'],
    },
    {
      title: 'Wine',
      data: ['Wine 1', 'Wine 2', 'Wine 3'],
    },
    {
      title: 'Mixed Drinks - Bourbon',
      data: getData.map((drink) => String(drink.drink.Name)),
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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Image
        source={{
          width: "100%",
          height: "35%",
          uri: 'https://picsum.photos/1920/1080',
        }}
      />
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.title}>
            <MyButton style={styles.item} title={item} onPress={console.log("Pressed.")}/>
          </View>
        )}
      />
    </View>
  );
}
