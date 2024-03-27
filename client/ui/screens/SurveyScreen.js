import { useEffect, useState } from 'react';
import { Pressable, View, ScrollView, Text, ImageBackground, ImageBackgroundBase } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

import { filterDrinksByIngredientsOR, getAllDrinkData, getTags, getTagsWithDrinks } from '../../controllers/getData';
import { DisplayResult } from '../components/SurveyComponents';
import { colors, styles } from '../assets/Style';
import { SurveyQuestion, Dropdown, Submit } from '../components/SurveyComponents';


// --------------------------------------------------

const surveyQuestions = [
  "What kind of drink do you typically go for?",
  "What kind of liquor are you in the mood for?",
  "What are you feeling?",
  "What are you not feeling?"
]

// --------------------------------------------------




const dontwants = [{ name: "lime juice", id: 1 }, { name: "orange juice", id: 2 }, { name: "cream", id: 3 }, { name: "simple syrup", id: 4 }, { name: "Coca-cola", id: 5 }]
const usualDrink = [
  { name: "Old Fashioned", id: 1 },
  { name: "Gin and Tonic", id: 2 },
  { name: "Straight Liquor", id: 3 },
  { name: "Cosmopolitan", id: 4 },
  { name: "Jalapeno Margarita", id: 5 },
  { name: "Whiskey and Coke", id: 6 },

]

const liquor = [
  { name: "Vodka", id: 1 },
  { name: "Gin", id: 2 },
  { name: "Tequila", id: 3 },
  { name: "Whiskey", id: 4 },
  { name: "Rum", id: 5 },
  { name: "Mezcal", id: 6 },

]

// --------------------------------------------------

export default function SurveyScreen() {
  const [cravings, setCravings] = useState([]);
  const [liquorMood, setLiquorMood] = useState([]);
  const [dontwantFilters, setDontWants] = useState([]);
  const [theUsual, setTheUsual] = useState([]);
  const [tags, setTags] = useState([])
  const [tagDrinkIds, setTagDrinkIds] = useState([])
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    try {
      let tagsJSON;
      const formatTags = async () => {
        return await getTags();
      }
      formatTags().then((result) => setTags(result))
    }
    catch (e) {
      console.log(e);
    }
  }, [])

  useEffect(() => {
    try {
      let tagsJSON;
      const formatTags = async () => {
        return await getTagsWithDrinks();
      }
      formatTags().then((result) => setTagDrinkIds(result))
    }
    catch (e) {
      console.log(e);
    }
  }, [])

  useEffect(() => {
    try {
      let tagsJSON;
      const formatTags = async () => {
        console.log(liquorMood);
        return await filterDrinksByIngredientsOR(liquorMood, dontwantFilters);
      }
      formatTags().then((result) => setDrinks(result))
    }
    catch (e) {
      console.log(e);
    }
  }, [liquorMood, dontwantFilters])


  //first filter drinks based on liquor choice and dont wants
  //then grab tag-drink data and find the drinks in that selection that match those ids
  //display five drinks
  console.log(tagDrinkIds);
  console.log(drinks);

  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      <ImageBackground style={{ flex: 1, backgroundColor: colors.black }} source={require('../assets/logo.jpg')} imageStyle={{ opacity: 0.1 }} >
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 400 }} key={"surveyscreenscroll"} >
          <DisplayResult tagList={cravings} usualDrinkChoice={theUsual} liquorChoice={liquorMood} dontwants={dontwantFilters} />
          <SurveyQuestion key={"theusualquestion"} item={`Question 1: ${surveyQuestions[0]}`} />
          <Dropdown key={"theusualdropdown"} items={usualDrink} setValue={setTheUsual} value={theUsual} id={"theusualdrink"} />
          <SurveyQuestion key={"liquormoodquestion"} item={`Question 2: ${surveyQuestions[1]}`} />
          <Dropdown key={"liquormooddropdown"} items={liquor} setValue={setLiquorMood} value={liquorMood} id={"liquormood"} />
          <SurveyQuestion key={"cravingsquestion"} item={`Question 3: ${surveyQuestions[2]}`} />
          <Dropdown key={"cravingsdropdown"} items={tags} setValue={setCravings} value={cravings} id={"cravings"} />
          <SurveyQuestion key={"dontwantsquestion"} item={`Question 4: ${surveyQuestions[3]}`} />
          <Dropdown key={"dontwantsdropdown"} items={dontwants} setValue={setDontWants} value={dontwantFilters} id={"dontwants"} />
          <Submit />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
