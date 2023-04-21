import React from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';

const data = [
  { title: 'Fruits', icon: require("../assets/icones/fruits.png") },
  { title: 'Légumes', icon: require("../assets/icones/legumes.png") },
  { title: 'Céréales', icon: require("../assets/icones/fruits.png") },
  { title: 'Féculents', icon: require("../assets/icones/fruits.png") },
  { title: 'Produits laitiers', icon: require("../assets/icones/fruits.png") },
  { title: 'Texte 6', icon: require("../assets/icones/fruits.png") },
  { title: 'Texte 7', icon: require("../assets/icones/fruits.png") },
  { title: 'Texte 8', icon: require("../assets/icones/fruits.png") },
];

export default function ListTypeFood() {

  const renderItem = ({ item}) => {
    console.log(item)
    return (
      <View style={styles.item} >
        <Text>{item.title}</Text>
        <Image source={item.icon} style={{ height: 50, width: 50 }}></Image>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item,index) => index.toString()}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "lightyellow"
  },
  item: {
    flex: 1,
    backgroundColor: "lightblue",
    height: 100,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 300



  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});