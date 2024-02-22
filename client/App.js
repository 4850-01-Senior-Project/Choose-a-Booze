import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Image, SectionList, Text } from "react-native";
import { Button, CheckBox } from "react-native-elements";

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

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

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
      title: 'Mixed Drinks',
      data: ['MD 1', 'MD 2', 'MD 3'],
    },
  ];

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Image
        style={styles.cow}
        source={{
          uri: 'https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHgxMzMwNzgxLWltYWdlXzEucG5n.png',
        }}
      />
      <SectionList 
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#808D8E",
    alignItems: "right",
    justifyContent: "center",
  },
  cow: {
    width: 256,
    height: 128,
  },
  item: {
    backgroundColor: '#A9D2D5',
    padding: 30,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#766C7F',
    color: '#eee',
    padding: 16,
  },
  title: {
    fontSize: 24,
  },
});
