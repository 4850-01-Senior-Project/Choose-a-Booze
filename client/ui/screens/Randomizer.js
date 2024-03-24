import { useContext, useEffect, useState } from 'react';
import getAllDrinkDataByLiquorType from '../../controllers/getData';
import { getTags, getTagsWithDrinks } from '../../controllers/getData';
import { Text, View } from 'react-native';
import { styles, colors } from '../assets/Style';
import { Discovery, Reroll } from '../components/RandomizerComponents';

// --------------------------------------------------

export default function Randomizer() {
  //console.log(getAllDrinkDataByLiquorType('Bourbon'));
  const [title, setTitle] = useState('Rusty Nail');
  const [description, setDesc] = useState('Lore has it that the Rat Pack was enamored with the drink, which may have been responsible for the wide appeal in those years.');
  const [DATA, setDATA] = useState([{ ing: 'Scotch', meas: '1 1/2 oz' }, { ing: 'Drambuie', meas: '3/4 oz' }, { ing: 'Lemon Peel Twist', meas: '1 twist' }]);

  const reroll = () => {
    setTitle('Bee\'s Knees');
    setDesc('A classic Prohibition-era cocktail made with gin, lemon and honey. It\'s brightly flavored, lightly sweet, and just an overall delightful drink.');
    setDATA([{ ing: 'Gin', meas: '2 oz' }, { ing: 'Lemon Juice', meas: '3/4 oz' }, { ing: 'Honey Syrup', meas: '1/2 oz' }]);
  }

  // --------------------------------------------------

  const [tags, setTags] = useState([]);

  useEffect(() => {
    let tagsJSON;
    const formatTags = async () => {
      return await getTags();
    }
    formatTags().then((result) => setTags(result))
  }, [])

  // --------------------------------------------------

  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      <Discovery
        title={title}
        description={description}
        DATA={DATA}
      />
      <Reroll press={reroll} />
    </View>
  );
}