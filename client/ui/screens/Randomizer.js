import { useContext, useEffect, useState } from 'react';
import getAllDrinkDataByLiquorType, { getAllDrinkData, getDrinkbyID } from '../../controllers/getData';
import { getTags, getTagsWithDrinks } from '../../controllers/getData';
import { Text, View } from 'react-native';
import { styles, colors } from '../assets/Style';
import { Discovery, Reroll } from '../components/RandomizerComponents';

// --------------------------------------------------

export default function Randomizer() {
  //const [title, setTitle] = useState('Rusty Nail');
  //const [tags, setTags] = useState(['Fruity???']);
  //const [DATA, setDATA] = useState([{ ing: 'Scotch', meas: '1 1/2 oz' }, { ing: 'Drambuie', meas: '3/4 oz' }, { ing: 'Lemon Peel Twist', meas: '1 twist' }]);
  //const [drink, setDrink] = useState(null);

  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [DATA, setDATA] = useState([]);
  const [drink, setDrink] = useState(getDrinkbyID('01001'));

  useEffect(() => {
    setTitle(drink.Name)
    //setTags()
    //setDATA()
  });

  const reroll = () => {
    setDrink(getDrinkbyID(Math.random(267)))
  }

  // drink => title, tags, DATA

  return (
    <View style={{ flex: 5, backgroundColor: colors.black }}>
      <Discovery
        title={title}
        tags={tags}
        DATA={DATA}
      />
      <Reroll press={reroll} />
    </View>
  );
}