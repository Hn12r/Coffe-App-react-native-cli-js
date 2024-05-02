
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ item, handleLiked }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("PRODUCT_DETAIL",{item});
      }}
      style={styles.container}
    >
      <Image source={{ uri: item.image }} style={styles.coverImage} />
      
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      
      <View style={styles.heartcontainer}>
        <TouchableOpacity onPress={() => handleLiked(item)}>
          {item?.isLiked ? (
            <FontAwesome name="heart" size={20} color="#c1121f" />
          ) : (
            <FontAwesome name="heart-o" size={20} color="#c1121f" />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

// Define your styles here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    marginTop: 20,
    position: "relative",
  },
  coverImage: {
    height: 190,
    borderRadius: 20,
    width: "92%",
    marginVertical: -1,
    marginRight: 20,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "600",
  },
  price: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "600",
  },
  content: {
    padding: 10,
  },
  heartcontainer: {
    height: 30,
    width: 32,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 17,
    position: "absolute",
    top: 5,
    right: 10,
  },
});

export default ProductCard;

