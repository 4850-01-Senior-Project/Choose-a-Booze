import React from 'react'
import { Text, Pressable, View } from 'react-native'
import { styles, colors } from '../assets/Style.js';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

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
      uniqueKey={'id'}
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

export const Submit = ({press}) => {
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

export const DisplayResult = ({ tagList, usualDrinkChoice, liquorChoice, liquorMood, dontwants }) => {

}