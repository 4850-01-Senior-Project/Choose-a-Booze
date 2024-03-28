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
  const [tags, setTags] = useState('Fruity???');
  const [DATA, setDATA] = useState([{ ing: 'Scotch', meas: '1 1/2 oz' }, { ing: 'Drambuie', meas: '3/4 oz' }, { ing: 'Lemon Peel Twist', meas: '1 twist' }]);
  const [drink, setDrink] = useState(null);

  const reroll = () => {
    setTitle('Bee\'s Knees');
    setTags('Not Fruity???');
    setDATA([{ ing: 'Gin', meas: '2 oz' }, { ing: 'Lemon Juice', meas: '3/4 oz' }, { ing: 'Honey Syrup', meas: '1/2 oz' }]);
  }

  // --------------------------------------------------

  useEffect(() => {
    let tagsJSON;
    const formatTags = async () => {
      return await getTags();
    }
    formatTags().then((result) => setTags(result))
  }, [])

  // --------------------------------------------------

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