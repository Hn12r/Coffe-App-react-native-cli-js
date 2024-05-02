import { FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../../componants/Header';
import CartCart from './componants/CartCart.1';
import { CartContext } from '../../context/CartContext';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const navigation = useNavigation();
  const { carts, totalPrice, deleteItemFromCart } = useContext(CartContext);
  return (
    <LinearGradient colors={['#aa998f', '#f9eae1',]} style={styles.container}>
      <View style={styles.containerHeader}>
        <Header iscart={true} />
      </View>
     
      <FlatList data={carts} ListHeaderComponent={
         <>
        </> }  
     
     renderItem={({ item })  => <CartCart item={item} deleteItemFromCart={deleteItemFromCart}/>    } 
     ListFooterComponent={
      <>
      <View style={styles.containerprice}>
        <View style={styles.priceandtitle}>

          <Text style={styles.text}>Total:</Text>
          <Text style={styles.text}>{totalPrice}</Text>

        </View>

        <View style={styles.shippingprice} >
          <Text style={styles.text}>Shipping:</Text>
          <Text style={styles.text}>$0.0</Text>

        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.shippingprice} >

        <Text style={styles.text}>Grand Total:</Text>
        <Text style={[styles.text, { color: "black", fontSize: 20, fontWeight: "700" }]}>${totalPrice}</Text>
      </View>
      
      </>

     }
     showsVerticalScrollIndicator={false}
     contentContainerStyle={{
      paddingBottom:100,
     }}

     />

      
        <TouchableOpacity onPress={() => navigation.navigate("Check_out")} style={styles.checkoutcontainer} >
          <Text style={styles.checkouttext}>
            Check Out
          </Text>
        </TouchableOpacity>

    </LinearGradient>

  );
};

export default CartScreen

const styles = StyleSheet.create({

  containerHeader: {
    marginBottom: 20,
  },

  container: {
    flex: 1,
    padding: 15,
  },
  shippingprice: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,

  },

  priceandtitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 18,
  },

  text: {
    fontSize: 18,
    color: "#023047",
  },

  containerprice: {
    marginTop: 40,

  },
  divider: {
    borderWidth: 1,
    borderColor: "#432818",
    marginVertical: 10,
  },

  checkoutcontainer:{
    backgroundColor:"#4a4e69",
    width:"100%",
    marginVertical:10,
    borderRadius:12,

  },
  checkouttext:{
  fontSize:22,
  color:"#ffffff",
  textAlign:"center",
  padding:10,

  }


});