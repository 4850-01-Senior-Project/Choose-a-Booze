import { useCallback, useEffect, useState } from "react";
import { View, Text, SectionList, Image } from "react-native";
import { styles } from '../assets/Style';
import { SectionHeader, SectionItem } from '../components/MyComponents';
import { getAllDrinkDataByLiquorType } from '../../controllers/getData';

// --------------------------------------------------

export default function DrinkSelector({ navigation }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllDrinkDataByLiquorType({ item });
        setData(data);
      }
      catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // --------------------------------------------------

  const [getData, setData] = useState([]);
  const DATA = [
    {
      title: 'Bourbon',
      data: ['B1', 'B2']
      //data: getData.map((drink) => String(drink.drink.Name)),
    },
  ];

  // --------------------------------------------------

  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title }}) => (
          <SectionHeader title={title}/>
        )}
        renderItem={({ item }) => (
          <SectionItem text={item}/>
        )}
      />  
    </View>
  );
}