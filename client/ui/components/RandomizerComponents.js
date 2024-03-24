import React from 'react'
import { Text, Pressable, View, FlatList } from 'react-native'
import { styles, colors } from '../assets/Style.js';

// --------------------------------------------------

export const Discovery = ({ drink, description, measurement }) => {
  return (
    <View style={styles.discovery}>
      <Text style={styles.h2}>{drink}</Text>
      <Text style={styles.p}>{description}</Text>
      <FlatList
        style={{ borderStyle: 'dotted', borderWidth: 1, margin: 25, padding: 20 }}
        data={measurement}
        renderItem={({ item }) => <Text style={styles.p}>{item}</Text>}
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