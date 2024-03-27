import { ScrollView, Text, View } from 'react-native';
import { styles, colors } from '../assets/Style';

// --------------------------------------------------

export default function Results() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      <ScrollView>
        <Text style={styles.h1}>Result</Text>
      </ScrollView>
    </View>
  );
}