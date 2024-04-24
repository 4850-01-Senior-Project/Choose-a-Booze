import React from 'react'
import { Text, Pressable, View, ScrollView } from 'react-native'
import { styles, colors } from '../assets/Style.js';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

import { filterDrinksByTagForSurveyResults } from '../../helperFunctions/SurveyQuestionFunctions.js';
import { filterDrinkList } from '../../helperFunctions/SurveyQuestionFunctions.js';
import { useState, useEffect } from 'react';

// --------------------------------------------------

export const SurveyQuestion = ({ item }) => {
  return (
    <View
      style={
        {
          backgroundColor: colors.purple,
          minHeight: '15%',
          marginHorizontal: '5%',
          marginVertical: '2.5%',
          flex: 1,
          borderRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
      <Text
        style={{
          fontSize: 20,
          color: '#CCC',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>{item}</Text>
    </View>
  );
}

// --------------------------------------------------

export const Dropdown = ({ value, setValue, items, id }) => {
  return (
    <SectionedMultiSelect
      items={items}
      IconRenderer={Icon}
      uniqueKey={'name'}
      onSelectedItemsChange={setValue}
      selectedItems={value}

      expandDropDowns={true}
      styles={[
        styles.green,
        {
          searchBar: styles.dropdown,
          itemText: { fontSize: 18 },
          selectedItemText: { backgroundColor: 'lightgray', color: 'purple' },
          selectToggleText: { fontSize: 18 },
          selectToggle: {
            borderRadius: 25,
            padding: 12,
            fontSize: 18,
            color: styles.green,
            backgroundColor: 'gray',
          }
        }
      ]}
    />
  );
}

// --------------------------------------------------

export const Submit = ({ press }) => {
  return (
    <Pressable
      onPress={press}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.green : colors.orange
        },
        styles.submit
      ]}><Text style={styles.h2}>Submit</Text>
    </Pressable>
  )
}

// --------------------------------------------------

export const DisplayResult = ({ tagList, tags, usualDrinkChoice, drinks, tagDrinkIds }) => {
  const [drinkSelection, setDrinks] = useState([])

  let tagResultDrinkIDs
  if (tagList.length > 0) { tagResultDrinkIDs = filterDrinksByTagForSurveyResults(tagList, tags, tagDrinkIds) }
  console.log(tagResultDrinkIDs);

  setDrinks(filterDrinkList(drinks, tagResultDrinkIDs))

  const fiveRandomDrinks = []
  if (drinks.length > 4) {
    for (let i = 0; i < 5; i++) {
      let num = Math.floor(Math.random() * 10)
      fiveRandomDrinks.forEach((number) => {
        num = Math.floor(Math.random() * 10)
        while (number == num) {
          num = Math.floor(Math.random() * 10)
        }
        fiveRandomDrinks[i] = num
      })
    }
  }
  const DrinksRandom = fiveRandomDrinks.length > 0 ? fiveRandomDrinks.map((number) => drinkSelection[number]) : drinks



  return (
    <ScrollView style={{ zIndex: 100, padding: '5%' }} key={"surveyscreenscroll"} contentContainerStyle={{ flexGrow: 1 }} horizontal={true}>
      {DrinksRandom && DrinksRandom.map((drink) => {
        return (
          <View style={{ flex: 4, minHeight: 120, minWidth: 120, backgroundColor: styles.green }}>
            <Image />
            <Text style={styles.h1}>{drink}</Text>
          </View >
        )
      })}
    </ScrollView>

  );
}