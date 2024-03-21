import { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { styles, colors } from '../assets/Style';
import { Discovery, Reroll } from '../components/RandomizerComponents';

// --------------------------------------------------

export default function Randomizer() {
  const [drink, setDrink] = useState('Whiskey')

  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      <Discovery
        drink={drink}
      />
      <Reroll />
    </View>
  );
}