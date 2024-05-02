import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Catgory = ({ item, selectedCatgory, setselectedCatgory }) => {
  console.log('selectedCatgory:', selectedCatgory);
  return (
    <TouchableOpacity onPress={() => setselectedCatgory(item)}>
      <Text
        style={[styles.trend, selectedCatgory === item && {
          color: "#f2e9e4",
          backgroundColor: "#4a4e69",
        },]} >{item}
      </Text>
    </TouchableOpacity>

  );
};

export default Catgory;

const styles = StyleSheet.create({

  trend: {

    fontSize: 22,

    color: "#ffffff",
    fontWeight: "600",
    backgroundColor: "#9a8c98",

    textAlign: "center",
    borderRadius: 20,
    marginHorizontal: 8,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },


});