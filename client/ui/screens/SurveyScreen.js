import React, { useState } from 'react';
import { Pressable, View, ScrollView, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import { styles } from '../assets/Style';
import { Category, Discovery, Dropdown } from '../components/MyComponents';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { MaterialIcons as Icon } from '@expo/vector-icons';


// --------------------------------------------------

const surveyQuestions = [
  "What kind of drink do you typically go for?",
  "What kind of liquor are you in the mood for?",
  "What are you feeling?",
  "What are you not feeling?"
]

// --------------------------------------------------

const tags = ["sweet", "spicy", "refreshing"]
const dontwants = ["lime juice", "orange juice", "cream", "simple syrup", "Coca-cola"]
const usualDrink = [
  "Old Fashioned",
  "Gin and Tonic",
  "Straight liquor",
  "Cosmopolitan",
  "White Russian",
  "Margarita",
  "Mojito",
  "Whiskey and Coke"
]

// --------------------------------------------------

export default function SurveyScreen() {
  const [cravings, setCravings] = useState([]);
  const [liquorMood, setLiquorMood] = useState([]);
  const [dontwantFilters, setDontWants] = useState([]);
  const [theUsual, setTheUsual] = useState([]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} horizontal={false} style={{ padding: '5%' }}>
      <Question/>
      <SectionedMultiSelect
        items={tags}
        IconRenderer={Icon}
        onSelectedItemsChange={setCravings}
        selectedItems={cravings}
      />
    </ScrollView>
  );
}

/*
<View style={{ backgroundColor: styles.black, borderWidth: 5 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} horizontal={false} style={{ padding: '5%' }}>
        <Discovery backgroundColor={'gray'} item={`Question 1: ${surveyQuestions[0]}`} />
        <Dropdown list={usualDrink} setValues={setTheUsual} />
        <Discovery item={`Question 2: ${surveyQuestions[1]}`} />
        <Dropdown list={usualDrink} setValues={setLiquorMood} />
        <Discovery item={`Question 3: ${surveyQuestions[2]}`} />
        <Dropdown list={tags} setValues={setCravings} />
        <Discovery item={`Question 3: ${surveyQuestions[3]}`} />
        <Dropdown list={dontwants} setValues={setDontWants} />
      </ScrollView>
      <Pressable>Find Me a Drink!</Pressable>
    </View>
*/