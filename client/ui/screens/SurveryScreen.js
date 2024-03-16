import React, { Component, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import MultiSelect from 'react-native-multiple-select';
import AntDesign from '@expo/vector-icons/AntDesign';

const surveryQuestions = ["Question 1", "Question3", "Question4", "Question5", "Question6","Question7"]

const dropDownComponent = ({list}) => {
    const [value, setValue] = useState(null);

    return (
        <Dropdown
        style = {styles.dropdown}
        placeholderStyle = {styles.placeholderStyle}
        selectedTextStyle = {styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={list}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderLeftIcon = {() => (
            <AntDesign style={styles.icon} color="black" name="Saftey" size={20} />

        )}
        />
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
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
  });


  const MultiSelectTags = ({list}) => {
      const [values, setValues] = useState();
      const onSelectedItemsChange = (selectedItems) => {
        setValues(selectedItems)
      }
      let multiref;
      return (
        <View style = {{flex: 1}}>
          <MultiSelect
          hideTags
          items = {list}
          uniqueKey='multiselecttag'
          ref = {(component) => multiref = component}
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