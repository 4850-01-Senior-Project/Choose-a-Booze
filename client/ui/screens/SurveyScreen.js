import { useEffect, useState } from 'react';
import { View, ScrollView, ImageBackground } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

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

const dontwants = [
  { name: "lime juice" },
  { name: "orange juice" },
  { name: "cream" },
  { name: "simple syrup" },
  { name: "Coca-cola" }
]

const usualDrink = [
  { name: "Old Fashioned" },
  { name: "Gin and Tonic" },
  { name: "Straight Liquor" },
  { name: "Cosmopolitan" },
  { name: "Jalapeno Margarita" },
  { name: "Whiskey and Coke" },
]

const liquor = [
  { name: "Vodka" },
  { name: "Gin" },
  { name: "Tequila", },
  { name: "Whiskey" },
  { name: "Rum" },
  { name: "Mezcal" },
]

// --------------------------------------------------

export default function SurveyScreen({ navigation }) {
  const [cravings, setCravings] = useState([]);
  const [liquorMood, setLiquorMood] = useState([]);
  const [dontwantFilters, setDontWants] = useState([]);
  const [theUsual, setTheUsual] = useState([]);
  const [tags, setTags] = useState([])
  const [tagDrinkIds, setTagDrinkIds] = useState([])
  const [drinks, setDrinks] = useState([])
  const [isVisible, setIsVisible] = useState([])

  useEffect(() => {
    try {
      let tagsJSON;
      const formatTags = async () => { return await getTags(); }
      formatTags().then((result) => setTags(result))
      console.log("tags: " + tags + ".");
    }
    catch (e) {
      console.log(e);
    }
  }, [])

  useEffect(() => {
    try {
      let tagsJSON;
      const formatTags = async () => { return await getTagsWithDrinks(); }
      formatTags().then((result) => setTagDrinkIds(result))
      console.log("tag-drink ID: " + tagDrinkIds + ".");
    }
    catch (e) {
      console.log(e);
    }
  }, [])

  useEffect(() => {
    try {
      let tagsJSON;
      const formatTags = async () => { return await filterDrinksByIngredientsOR(liquorMood, dontwantFilters); }
      formatTags().then((result) => setDrinks(result))
      console.log("drinks: " + drinks + ".");
    }
    catch (e) {
      console.log(e);
    }
  }, [liquorMood, dontwantFilters])


  //first filter drinks based on liquor choice and dont wants
  //then grab tag-drink data and find the drinks in that selection that match those ids
  //display five drinks

  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      <ImageBackground style={{ flex: 1, backgroundColor: colors.black }} source={require('../assets/logo.jpg')} imageStyle={{ opacity: 0.1 }} >
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 400 }} key={"surveyscreenscroll"} >
          {/* <DisplayResult tagList={cravings} usualDrinkChoice={theUsual} liquorChoice={liquorMood} dontwants={dontwantFilters} /> */}

          <SurveyQuestion key={"theusualquestion"} item={`Question 1: ${surveyQuestions[0]}`} />
          <Dropdown key={"theusualdropdown"} items={usualDrink} setValue={setTheUsual} value={theUsual} id={"theusualdrink"} />

          <SurveyQuestion key={"liquormoodquestion"} item={`Question 2: ${surveyQuestions[1]}`} />
          <Dropdown key={"liquormooddropdown"} items={liquor} setValue={setLiquorMood} value={liquorMood} id={"liquormood"} />

          <SurveyQuestion key={"cravingsquestion"} item={`Question 3: ${surveyQuestions[2]}`} />
          <Dropdown key={"cravingsdropdown"} items={tags} setValue={setCravings} value={cravings} id={"cravings"} />

          <SurveyQuestion key={"dontwantsquestion"} item={`Question 4: ${surveyQuestions[3]}`} />
          <Dropdown key={"dontwantsdropdown"} items={dontwants} setValue={setDontWants} value={dontwantFilters} id={"dontwants"} />

          <Submit press={() => navigation.navigate('Results')} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
