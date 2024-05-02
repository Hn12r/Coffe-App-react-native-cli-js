import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HeaderCheck = () => {
    const navigation = useNavigation();
  
    const handlePress = () => {
      console.log('Button pressed'); // Debugging line
      navigation.navigate('cart');
    };
  
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
            
          <Ionicons name={"arrow-back-outline"} color={"#6c584c"} size={30} />
    
        </TouchableOpacity>
        <Text style={styles.checkOut}>Checkout</Text>
      </View>
    );
  };
  

export default HeaderCheck;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12, // Add padding for better spacing
  },
  buttonContainer: {
    backgroundColor: '#d5bdaf',
    width: 44,
    height: 44,
    borderRadius: 22, // Half of width/height to make it perfectly round
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkOut: {
    fontSize: 28,
    color: '#432818',
    position: 'absolute', // Position text absolutely
    top: 0, // Align to the top
    left: 0, // Align to the left
    right: 0, // Align to the right
    textAlign: 'center', // Center the text horizontally
    marginVertical: 17,
    fontWeight: "600",
    

  },
});
