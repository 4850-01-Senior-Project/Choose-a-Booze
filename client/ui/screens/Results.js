import { useContext, useEffect, useState } from 'react';
import getAllDrinkDataByLiquorType from '../../controllers/getData';
import { getTags, getTagsWithDrinks } from '../../controllers/getData';
import { Text, View } from 'react-native';
import { styles, colors } from '../assets/Style';
import { Discovery, Reroll } from '../components/RandomizerComponents';

// --------------------------------------------------

export default function Results({title, tags, DATA}) {

  return (
    <View style={{ flex: 4, backgroundColor: colors.black }}>
      <Discovery
        title={title}
        tags={tags}
        DATA={DATA}
      />
    </View>
  );
}