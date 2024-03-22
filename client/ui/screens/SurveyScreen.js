import { useEffect, useState } from 'react';
import { Pressable, View, ScrollView, Text, ImageBackground, ImageBackgroundBase } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

import { DisplayResult } from '../components/SurveyComponents';
import { colors, styles } from '../assets/Style';
import { SurveyQuestion, Dropdown, Submit } from '../components/SurveyComponents';
import { getTags, getTagsWithDrinks } from '../../controllers/getData';

// --------------------------------------------------

const surveyQuestions = [
  "What kind of drink do you typically go for?",
  "What kind of liquor are you in the mood for?",
  "What are you feeling?",
  "What are you not feeling?"
]

// --------------------------------------------------

const tags = [
  { name: "sweet", id: 1 }, { name: "spicy", id: 2 }, { name: "refreshing", id: 3 }]
const dontwants = [{ name: "lime juice", id: 1 }, { name: "orange juice", id: 2 }, { name: "cream", id: 3 }, { name: "simple syrup", id: 4 }, { name: "Coca-cola", id: 5 }]
const usualDrink = [
  { name: "Old Fashioned", id: 1 },
  { name: "Gin and Tonic", id: 2 },
  { name: "Straight Liquor", id: 3 },
  { name: "Cosmopolitan", id: 4 },
  { name: "Jalapeno Margarita", id: 5 },
  { name: "Whiskey and Coke", id: 6 },

]

// --------------------------------------------------

export default function SurveyScreen() {
  const [cravings, setCravings] = useState([]);
  const [liquorMood, setLiquorMood] = useState([]);
  const [dontwantFilters, setDontWants] = useState([]);
  const [theUsual, setTheUsual] = useState([]);
  const [tags, setTags] = useState([])
  const [tagDrinkIds, setTagDrinkIds] = useState([])

  useEffect(() => {
    let tagsJSON;
    const formatTags = async () => {
      return await getTags();
    }
    formatTags().then((result) => setTags(result))
  }, [])

  useEffect(() => {
    let tagsJSON;
    const formatTags = async () => {
      return await getTagsWithDrinks();
    }
    formatTags().then((result) => setTagDrinkIds(result))
  }, [])

  //first filter drinks based on liquor choice and dont wants
  //then grab tag-drink data and find the drinks in that selection that match those ids
  //display five drinks
  console.log(tagDrinkIds);

  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      <ImageBackground style={{ flex: 1, backgroundColor: colors.black }} source={require('../assets/logo.jpg')} imageStyle={{ opacity: 0.1 }} >
        <DisplayResult tagList={cravings} usualDrinkChoice={theUsual} liquorChoice={liquorMood} dontwants={dontwantFilters} />
        <ScrollView style={{ zIndex: 100, padding: '5%' }} key={"surveyscreenscroll"} contentContainerStyle={{ flexGrow: 1 }} horizontal={false} >
          <SurveyQuestion key={"theusualquestion"} item={`Question 1: ${surveyQuestions[0]}`} />
          <Dropdown key={"theusualdropdown"} items={usualDrink} setValue={setTheUsual} value={theUsual} id={"theusualdrink"} />
          <SurveyQuestion key={"liquormoodquestion"} item={`Question 2: ${surveyQuestions[1]}`} />
          <Dropdown key={"liquormooddropdown"} items={usualDrink} setValue={setLiquorMood} value={liquorMood} id={"liquormood"} />
          <SurveyQuestion key={"cravingsquestion"} item={`Question 3: ${surveyQuestions[2]}`} />
          <Dropdown key={"cravingsdropdown"} items={tags} setValue={setCravings} value={cravings} id={"cravings"} />
          <SurveyQuestion key={"dontwantsquestion"} item={`Question 4: ${surveyQuestions[3]}`} />
          <Dropdown key={"dontwantsdropdown"} items={dontwants} setValue={setDontWants} value={dontwantFilters} id={"dontwants"} />
        </ScrollView>
        <Submit />
      </ImageBackground>
    </View>
  );
}
