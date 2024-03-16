import { useState } from 'react';
import { View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

// const surveyQuestions = ["Question 1", "Question3", "Question4", "Question5", "Question6", "Question7"]

export default function SurveyScreen ({ list }) {
  /* 
  const [values, setValues] = useState();
  const onSelectedItemsChange = (selectedItems) => {
    setValues(selectedItems)
  }
  let multiref;
 */
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