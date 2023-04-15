import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListTypeFood from './FoodHomePage';

export default function App() {
  return (
    <View style = {styles.container}>
      <StatusBar style="auto" />
      
      <ListTypeFood></ListTypeFood>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.cu,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
