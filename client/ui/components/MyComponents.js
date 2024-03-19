import React from 'react'
import { Text, Pressable, AntDesign } from 'react-native'
import { styles, colors } from '../assets/Style.js';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

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

export const Dropdown = ({ list }) => {
  const values = []
  const onSelectedItemsChange = (selectedItems) => {
    setValues(selectedItems)
  }
  let multiref;
  return (
    <View style={{ flex: 1 }}>
      <SectionedMultiSelect
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
  );
}