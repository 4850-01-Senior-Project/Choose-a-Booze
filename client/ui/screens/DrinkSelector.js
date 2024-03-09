import { styles, colors } from '../assets/Style';
import { Category } from '../components/MyComponents';

// --------------------------------------------------

export default function DrinkSelector() {
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Image
        source={{
          width: "100%",
          height: "35%",
          uri: './assets/logo.png'
        }}
      />
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => (
          <Category item={title} />
        )}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Category item={item} onPress={console.log("Category pressed")} />
          </View>
        )}
      />
    </View>
  );
}