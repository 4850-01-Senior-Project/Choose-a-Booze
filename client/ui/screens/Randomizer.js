import { useEffect, useState, useMemo, useCallback } from 'react';
import { Text, View } from 'react-native';
import { Discovery, Reroll } from '../components/RandomizerComponents';
import { findRandomDrink, formatIngredients } from '../../helperFunctions/RandomizerFunctions.js';
import { drinkList } from './Home';

export default function Randomizer() {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [DATA, setDATA] = useState([]);
  const [randomDrink, setRandomDrink] = useState(findRandomDrink(drinkList))
  useEffect(() => {
    if (randomDrink){
      setTitle(randomDrink.drink.Name);
      setDATA(formatIngredients(randomDrink.drink))
    }
  }, [randomDrink]); 
 const reroll = () => {
    setRandomDrink(findRandomDrink(drinkList));
  }
  console.log(randomDrink);
  return (
    <View style={{ flex: 5, backgroundColor: 'black' }}>
      <Discovery
        title={title}
        tags={tags}  // Assuming you'll set tags later
        DATA={DATA}
      />
      <Reroll press={reroll} />
    </View>
  );
}
