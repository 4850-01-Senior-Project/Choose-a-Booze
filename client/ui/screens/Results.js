import {  useState } from 'react';
import { View } from 'react-native';
import { filterDrinkList, filterDrinksByTagForSurveyResults } from '../../helperFunctions/SurveyQuestionFunctions';
import { Context } from './SurveyScreen';
import { colors } from '../assets/Style';
import { Discovery } from '../components/RandomizerComponents';
import { formatIngredients } from '../../helperFunctions/RandomizerFunctions';

export default function Results({ title }) {
  const { usual, liquorMood, tags, tagLists, tagDrinkLists, drinkList }  = Context;
  const [tagDrinkIds] = useState(tagDrinkLists);
  const [drinks] = useState(drinkList);
  const [cravings] = useState(tags);
  const [theUsual, setTheUsual] = useState(usual);
  const [tagList] = useState(tagLists)
  
 
  const tagResultDrinkIDs = filterDrinksByTagForSurveyResults(cravings, tagList, tagDrinkIds)
  const result = filterDrinkList(drinks, tagResultDrinkIDs)
 
 
  const fiveRandomDrinks = []
  if (result.length > 5) {
    while (fiveRandomDrinks.length < 5) {
      let num = Math.floor(Math.random() * result.length);
      if (fiveRandomDrinks.indexOf(num) === -1) {
          fiveRandomDrinks.push(num);
      }
  }
  }
  console.log(fiveRandomDrinks);
  const DrinksRandom = fiveRandomDrinks.length > 0 ? fiveRandomDrinks.map((number) => result[number]) : result
  console.log(DrinksRandom);

  return (
    <View style={{ flex: 4, backgroundColor: colors.black }}>
      <Discovery
        title={DrinksRandom[0].Name}
        tags={tags}
        DATA={formatIngredients(DrinksRandom[0])}
      />
    </View>
  );
}