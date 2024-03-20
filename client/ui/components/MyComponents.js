import { useContext } from 'react'
import { Text, Pressable, AntDesign } from 'react-native'
import { styles, colors } from '../assets/Style.js';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

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
      ]}>
        <Text style={styles.p}>{item}</Text>
    </Pressable>
  )
}

// --------------------------------------------------

export const Discovery = ({ drink }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.orange : colors.purple
        },
        styles.discovery
      ]}>
        <Text style={styles.h1}>{drink}</Text>
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

export const Question = () => {
  return (<Text>Question Component</Text>)
}

// --------------------------------------------------
