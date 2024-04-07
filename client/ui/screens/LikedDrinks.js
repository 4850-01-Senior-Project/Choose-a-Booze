import { ScrollView, Text, View } from 'react-native';
import { styles, colors } from '../assets/Style';

// --------------------------------------------------

export default function LikedDrinks() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      <ScrollView>
        <Text style={styles.h1}>Liked Drink Number 1</Text>
      </ScrollView>
    </View>
  );
}