import React, { Component, useState } from 'react';
import { Button, Pressable, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { dropDownComponent } from '../components/dropdowns';
import { MultiSelectTags } from '../components/dropdowns';

const [cravings, setCravings] = useState(null);
const [liquorMood, setLiquorMood] = useState(null);
const [dontwantFilters, setDontWants] = useState(null);
const [theUsual, setTheUsual] = useState(null);

const surveryQuestions = [
  "What kind of drink do you typically go for?", 
  "What kind of liquor are you in the mood for?", 
  "What are you feeling?",
  "What are you not feeling?"
]


const tags = ["sweet", "spicy", "refreshing"]
const dontwants = ["lime juice", "orange juice", "cream", "simple syrup", "Coca-cola" ]
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

export default function SurveryQuestions({ navigation }) {
  return (
    <View style={{ backgroundColor: styles.black, borderWidth: 5 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} horizontal={true} style={{ padding: '5%' }}>
        <Text>{`Question 1: ${surveryQuestions[0]}`}</Text>
        <dropDownComponent list={usualDrink}  setValues={setTheUsual}/>
        <Text>{`Question 2: ${surveryQuestions[1]}`}</Text>
        <dropDownComponent list={usualDrink} setValues={setLiquorMood} />
        <Text>{`Question 3: ${surveryQuestions[2]}`}</Text>
        <MultiSelectTags list={tags} setValues ={setCravings}/>
        <Text>{`Question 3: ${surveryQuestions[3]}`}</Text>
        <MultiSelectTags list={dontwants} setValues={setDontWants}/>
        
      </ScrollView>
      <Pressable>Find Me a Drink!</Pressable>
      <View style={{ width: '25%', height: 120, borderWidth: 3, alignSelf: 'center' }}>
        <Pressable
          style={[{
            backgroundColor: colors.orange,
            flex: 1,
            justifyContent: 'center'
          }, styles.p]}
          onPress={() => navigation.navigate('Home')}>
          {
            <Text style={styles.p}>Home</Text>
          }</Pressable>
      </View>
    </View>
  );
}

export const dropDownComponent = ({list, setValue}) => {
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


  export const MultiSelectTags = ({list,setValues}) => {
      const values = []
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