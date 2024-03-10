import { useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { styles } from '../assets/Style';
import { Category } from '../components/MyComponents';
import { getAllDrinkDataByLiquorType } from '../../controllers/getData';

// --------------------------------------------------

export default function DrinkSelector() {

const [getData, setData] = useState([]);
const DATA = [
  {
    title: 'Mixed Drinks - Bourbon',
    data: getData.map((drink) => String(drink.drink.Name)),
  },
];

// --------------------------------------------------

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await getAllDrinkDataByLiquorType('Bourbon');
      setData(data);
    }
    catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);

// --------------------------------------------------

  return (
    <View style={styles.container}>
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