import React from 'react'
import { Text, Pressable, View } from 'react-native'
import { styles, colors } from '../assets/Style.js';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { MaterialIcons as Icon } from '@expo/vector-icons';
// --------------------------------------------------

export const ListItem = () => {
  return (
    <Text>ListItem</Text>
  )
}

// --------------------------------------------------

export const Category = ({ item, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.orange : colors.purple
        },
        styles.category
      ]}><Text style={styles.p}>{item}</Text>
    </Pressable>
  )
}

// --------------------------------------------------

export const Discovery = ({ item }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.orange : colors.purple
        },
        styles.discovery
      ]}><Text style={styles.h1}>{item}</Text>
    </Pressable>
  );
}

// --------------------------------------------------
export const SurveyQuestion = ({ item }) => {
  return (
    <View
      style={
        {
          backgroundColor: colors.purple,
          minHeight: "15%",
          maxWidth: '60%',
          marginHorizontal: '5%',
          marginVertical: '2.5%',
          flex: 2,
          borderRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',
        }}
    >
      <Text
        style={{
          fontSize: 20,
          color: '#CCC',
          fontWeight: 'bold',
          fontFamily: 'Arial',
          textAlign: 'center'
        }}
      > {item}</Text>
    </View>
  );
}

// --------------------------------------------------

export const Selector = ({ item, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.orange : colors.purple
        },
        styles.selector
      ]}><Text style={styles.h1}>{item}</Text>
    </Pressable>
  )
}

// --------------------------------------------------

export const SectionHeader = ({ title }) => {
  return (<Text style={styles.sectionHeader}>{title}</Text>);
}

// --------------------------------------------------

export const SectionItem = ({ text }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.sectionItem,
        {
          backgroundColor: pressed ? colors.purple : colors.orange
        },
      ]}>
      {
        <Text style={styles.h2}>{text}</Text>
      }
    </Pressable>
  );
}

// --------------------------------------------------

export const Dropdown = ({ value, setValue, items, id }) => {

  return (
    <View style={{ fontFamily:'Arial', fontSize: 18, minHeight: 10,  textAlign: "center"}}>
    <SectionedMultiSelect
      items={items}
      IconRenderer={Icon}
      onSelectedItemsChange={setValue}
      selectedItems={value}
      uniqueKey={"id"}
      colors={{primary: 'green'}}
      expandDropDowns={true}
      styles={{
        searchBar: styles.dropdown,
        itemText: {fontFamily: 'Arial', fontSize: 18},
        selectedItemText: {backgroundColor: 'lightgray', color: 'purple'},
        selectToggleText: {fontFamily: 'Arial', fontSize: 18},
        selectToggle: {
          borderWidth: 1,
          borderRadius: 8,
          borderColor: 'darkgray',
          padding: 12,
          marginBottom: 12,
          fontFamily: 'Arial',
          fontSize: 18,
          fontWeight: 2,
          color: 'white',
          backgroundColor:'gray',
          maxWidth: '60%'
        }
      }}
    /></View>
  );
}