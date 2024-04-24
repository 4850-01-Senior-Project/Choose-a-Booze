import {  useState } from 'react';
import { View } from 'react-native';
import { filterDrinkList, filterDrinksByTagForSurveyResults } from '../../helperFunctions/SurveyQuestionFunctions';
import { Context } from './SurveyScreen';
import { colors } from '../assets/Style';
import { Discovery } from '../components/RandomizerComponents';

export default function Results({ title }) {
  const { usual, liquorMood, tags, tagLists, tagDrinkLists, drinkList }  = Context;
  const [tagDrinkIds] = useState(tagDrinkLists);
  const [drinks] = useState(drinkList);
  const [cravings] = useState(tags);
  const [theUsual, setTheUsual] = useState(usual);
  const [tagList] = useState(tagLists)
  
 
  const tagResultDrinkIDs = filterDrinksByTagForSurveyResults(cravings, tagList, tagDrinkIds)
  const result = filterDrinkList(drinks, tagResultDrinkIDs)
 
 
  const fiveRandomDrinks = [0,0,0,0,0]
  if (result.length > 5) {
    for (let i = 0; i < 5; i++) {
      let num = Math.floor(Math.random(0,result.length))
      fiveRandomDrinks.forEach((number) => {     
        while (number == num) {
          num = Math.floor(Math.random(0,result.length))
        }
        fiveRandomDrinks[i] = num
      })
    }
  }
 
  const DrinksRandom = fiveRandomDrinks.length > 0 ? fiveRandomDrinks.map((number) => result[number]) : result
  console.log(DrinksRandom);

  return (
    <View style={{ flex: 4, backgroundColor: colors.black }}>
      <Discovery
        title={title}
        tags={tags}
        DATA={DrinksRandom}
      />
    </View>
  );
}