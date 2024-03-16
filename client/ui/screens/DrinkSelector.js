import { useCallback, useEffect, useState } from "react";
import { View, SectionList } from "react-native";
import { styles } from '../assets/Style';
import { SectionHeader, SectionItem } from '../components/MyComponents';
import { getAllDrinkDataByLiquorType } from '../../controllers/getData';

// --------------------------------------------------

export default function DrinkSelector({ navigation }) {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Retrieving Data...')
        const data = await getAllDrinkDataByLiquorType( Data );
        setData(data);
        console.log('Data Retrieved.')
      }
      catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // --------------------------------------------------

  const DATA = [
    {
      title: 'Bourbon',
      data: Data.map((drink) => String(drink.drink.Name)),
    },
  ];

  // --------------------------------------------------

  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader title={title} />
        )}
        renderItem={({ item }) => (
          <SectionItem text={item} />
        )}
      />
    </View>
  );
}