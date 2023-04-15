import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const data = [
  { id: '1', title: 'Texte 1' },
  { id: '2', title: 'Texte 2' },
  { id: '3', title: 'Texte 3' },
  { id: '4', title: 'Texte 4' },
  { id: '5', title: 'Texte 5' },
  { id: '6', title: 'Texte 6' },
  { id: '7', title: 'Texte 7' },
  { id: '8', title: 'Texte 8' },
];

export default function ListTypeFood() {
  return (
    <View style={styles.container}>
      <FlatList
        style = {{backgroundColor:"green"}}
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View >
            <Text >{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    padding: 10,
    backgroundColor:"red",
    marginTop :30
   
    
  },
  item: {
    flex: 1,
    margin: 10,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3e3e3',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});