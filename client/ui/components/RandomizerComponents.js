import React from 'react'
import { Text, Pressable, View } from 'react-native'
import { styles, colors } from '../assets/Style.js';

// --------------------------------------------------

export const Discovery = ({ drink }) => {
	return (
		<View style={{ flex: 4 }}>
			<Text style={styles.h1}>{drink}</Text>
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