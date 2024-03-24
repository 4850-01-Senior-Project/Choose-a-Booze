import { useContext, useEffect, useState } from 'react';
import getAllDrinkDataByLiquorType from '../../controllers/getData';
import { getTags, getTagsWithDrinks } from '../../controllers/getData';
import { Text, View } from 'react-native';
import { styles, colors } from '../assets/Style';
import { Discovery, Reroll } from '../components/RandomizerComponents';

// --------------------------------------------------

export default function Randomizer() {
  //console.log(getAllDrinkDataByLiquorType('Bourbon'));
  const [drink, setDrink] = useState(null);
  const [tags, setTags] = useState([])

  useEffect(() => {
    let tagsJSON;
    const formatTags = async () => {
      return await getTags();
    }
    formatTags().then((result) => setTags(result))
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      <Discovery
        drink={'Pineapple Margarita'}
        description={'This classic margarita is one of the most famous cocktails of all time, invented back in the 1930’s.'}
        measurement={['Pineapple Juice', 'Tequila', 'Cointreau', 'Fresh Lime Juice']}
      />
      <Reroll />
    </View>
  );
}