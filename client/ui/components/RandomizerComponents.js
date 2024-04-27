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
        style={{ borderStyle: 'dotted', borderWidth: 0, margin: 25, padding: 2 }}
        data={DATA}
        renderItem={({ item }) => <Text style={styles.p}>{item}</Text>}
      />
      <FlatList
        style={{ borderStyle: 'dotted', borderWidth: 0, margin: 15, padding: 2}}
        data={tags}
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