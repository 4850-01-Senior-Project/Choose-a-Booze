import React, { useState } from 'react'
import { Text, Pressable, View, FlatList } from 'react-native'
import { styles, colors } from '../assets/Style.js';


// --------------------------------------------------

export const Discovery = ({ title, tags, DATA }) => {

  console.log(DATA);
  return (
    <View style={styles.discovery}>
      <Text style={styles.h1}>{title}</Text>
      <FlatList
        style={{ borderStyle: 'dotted', borderWidth: 1, margin: 25, padding: 20 }}
        data={tags}
        renderItem={({ item }) => <Text style={styles.p}>{item}</Text>}
      />
      <FlatList
        style={{ borderStyle: 'dotted', borderWidth: 1, margin: 25, padding: 20 }}
        data={DATA[0].drink}
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