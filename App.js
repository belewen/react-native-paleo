import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListTypeFood from './Components/ListTypeFood';

export default function App() {
  return (
    <View style = {styles.container}>
      <StatusBar style="auto" />
      <Text style = {styles.searchBar}>Barre de recherche à implémenter</Text>
      
      <ListTypeFood></ListTypeFood>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    
    backgroundColor: 'white',

    
    
    
  },
  searchBar : {
    paddingVertical : 20,
    paddingHorizontal:10,
    
    marginLeft:10,
    marginRight : 10,
    backgroundColor : "lightgreen"


  }
});
