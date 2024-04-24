import { useEffect, useState, useMemo, useCallback } from 'react';
import { Text, View } from 'react-native';
import { Discovery, Reroll } from '../components/RandomizerComponents';
import { findRandomDrink, formatIngredients } from '../../helperFunctions/RandomizerFunctions.js';
import { drinkList } from './Home';

export default function Randomizer() {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [DATA, setDATA] = useState([]);
  //const [randomDrink, setRandomDrink] = useState(() => findRandomDrink(drinkList))

  let randomDrink = findRandomDrink(drinkList)
  // useEffect(() => {
    if (randomDrink){
      setTitle(useMemo(() => {
        return randomDrink.drink.name;
      }, [randomDrink]))
      setDATA(useMemo(() => {
        return formatIngredients(randomDrink);
      }, [randomDrink]))
    }
  // }, [randomDrink]); 



  console.log(randomDrink);
  
  const reroll = useCallback(() => {
    //setRandomDrink(findRandomDrink(drinkList));
    randomDrink = findRandomDrink(drinkList)

  }, [findRandomDrink, drinkList]);

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
