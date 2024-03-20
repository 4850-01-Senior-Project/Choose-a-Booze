import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { styles, colors } from '../assets/Style';
import { Discovery } from "../components/MyComponents";

// --------------------------------------------------

export default function Randomizer() {
  const [drink, setDrink] = useState('Whiskey')

  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      <Text style={styles.h1}>Randomizer</Text>
      {console.log(drink)}
      <Text style={styles.h1}>{drink}</Text>
    </View>
  );
}