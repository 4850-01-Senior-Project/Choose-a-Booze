import React from 'react'
import { Text, Pressable, View, FlatList } from 'react-native'
import { styles, colors } from '../assets/Style.js';

// --------------------------------------------------

export const Discovery = ({ title, description, DATA }) => {
  return (
    <View style={styles.discovery}>
      <Text style={styles.h2}>{title}</Text>
      <Text style={styles.p}>{description}</Text>
      <FlatList
        style={{ borderStyle: 'dotted', borderWidth: 1, margin: 25, padding: 20 }}
        data={DATA}
        renderItem={({ item }) => <Text style={styles.p}>{item.ing} -- {item.meas}</Text>}
      />
    </View >
  );
}

// --------------------------------------------------

export const Reroll = ({ press }) => {
  return (
    <Pressable
      onPress={press}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.orange : colors.purple
        },
        styles.reroll
      ]}><Text style={styles.h1}>Reroll</Text>
    </Pressable>
  )
}