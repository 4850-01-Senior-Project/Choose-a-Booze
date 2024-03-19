import React, { useState } from 'react';
import { Pressable, StyleSheet, View, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Category } from '../components/MyComponents';
import { Dropdown } from 'react-native-element-dropdown';
import MultiSelect from 'react-native-multiple-select';



const surveyQuestions = [
  "What kind of drink do you typically go for?",
  "What kind of liquor are you in the mood for?",
  "What are you feeling?",
  "What are you not feeling?"
]


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

export default function SurveyScreen({ navigation }) {
  const [cravings, setCravings] = useState(null);
  const [liquorMood, setLiquorMood] = useState(null);
  const [dontwantFilters, setDontWants] = useState(null);
  const [theUsual, setTheUsual] = useState(null);

  return (
    <View style={{ backgroundColor: styles.black, borderWidth: 5 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} horizontal={false} style={{ padding: '5%' }}>
        <Category backgroundColor={'gray'} item={`Question 1: ${surveyQuestions[0]}`} />
        <DropDownComponent list={usualDrink} setValues={setTheUsual} />
        <Category item={`Question 2: ${surveyQuestions[1]}`} />
        <DropDownComponent list={usualDrink} setValues={setLiquorMood} />
        <Category item={`Question 3: ${surveyQuestions[2]}`} />
        <MultiSelectTags list={tags} setValues={setCravings} />
        <Category item={`Question 3: ${surveyQuestions[3]}`} />
        <MultiSelectTags list={dontwants} setValues={setDontWants} />
      </ScrollView>
      <Pressable>Find Me a Drink!</Pressable>
    </View>

  );
}

export const DropDownComponent = ({ list, setValues }) => {
  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={list}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        onChange={item => {
          setValues(item.value);
        }} />
    </View>
  )
}

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});


export const MultiSelectTags = ({ list, setValues }) => {
  const values = []
  const onSelectedItemsChange = (selectedItems) => {
    setValues(selectedItems)
  }
  let multiref;
  return (
    <View style={{ flex: 1 }}>
      <MultiSelect
        hideTags
        items={list}
        uniqueKey='multiselecttag'
        ref={(component) => multiref = component}
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={values}
        selectText='Select preference'
        searchInputPlaceholderText='Search preference'
        tagRemoveIconColor='#CCC'
        tagBorderColor='#CCC'
        tagTextColor='#CCC'
        selectedItemTextColor='#CCC'
        selectedItemIconColor='#CCC'
        itemTextColor='#000'
        displayKey="name"
        searchInputStyle={{ color: '#CCC' }}
        submitButtonColor="#CCC"
        submitButtonText="Submit"
      />
    </View>
  )


}