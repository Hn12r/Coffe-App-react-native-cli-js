import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import HeaderCheck from '../../componants/HeaderCheck'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Checkout = () => {
  return (
    <LinearGradient colors={['#aa998f', '#f9eae1']} style={styles.container}>
    <View>
      <HeaderCheck />
      <View style={styles.container2}>
        <Image source= { require ("../../assets/Vis.png") } />
      </View>
    </View>
    
    
    <View style={styles.containerCard}>
    <Text style={styles.Cardname}> Card Name </Text> 
    </View>
    <View style={styles.container3}>
      <TextInput style={styles.input} placeholder="card name">
      </TextInput>
    </View>

     
    <View style={styles.containerCard}>
    <Text style={styles.Cardname}> Card Number </Text> 
    </View>
    <View style={styles.container3}>
      <TextInput style={styles.input} placeholder="0000 0000 0000 0000">
      </TextInput>
    </View>


    <View style={styles.containerCard}>
    <Text style={styles.Cardname}> Expiry date </Text> 
    </View>
    <View style={styles.container3}>
      <TextInput style={styles.input} placeholder="MM/YY">
      </TextInput>
    </View>

    
    <View style={styles.containerCard}>
    <Text style={styles.Cardname}> CVC </Text> 
    </View>
    <View style={styles.container3}>
      <TextInput style={styles.input} placeholder="xxx">
      </TextInput>
    </View>

    <View style={styles.containerbutton}>
   <TouchableOpacity style={styles.button}  >
    <FontAwesome name={"lock"} color={"#ffffff"} size={20} style={styles.icon} />
    <Text style={styles.buttonText}>
      Make Payment
    </Text>
  </TouchableOpacity>
</View>




    </LinearGradient>
  );
};

export default Checkout

const styles = StyleSheet.create({
  Cardname:{
    fontSize:20,
    fontWeight:"500",
    marginHorizontal:20,
    marginVertical:10,
  },

   container:{
    flex:1,
   },
  container2:{
    marginHorizontal:10,
    marginVertical:40,
  },
  container3:{
    backgroundColor:"#ffffff",
    height:45,
    width:300,
    marginHorizontal:50,
  },

  containerbutton:{
    backgroundColor: "#4a4e69",
    width: "80%",
    height:50,
    marginVertical: 50,
    marginHorizontal: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"row",
},

buttonText:{
    fontSize:20,
    color:"#ffffff",
    flexDirection:"row",

},

icon: {
  marginRight: 10,
},

button:{
  flexDirection: 'row', 
  alignItems: 'center',

}

});