import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../componants/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CartContext } from '../../context/CartContext';

const size = ["Short", "Tall", "Grande", "Venti"];


const imageUrl = "https://i.pinimg.com/474x/3f/4e/40/3f4e40f7afd6a62b3d36ac201fef5c74.jpg";
const ProductDetailScreen = () => {
  const navigation = useNavigation();
  const {addToCart} = useContext(CartContext);
  console.log("item:",item);

  const route = useRoute();
  const item = route.params.item;
  //console.log =(route.params.item);

  const [selectedSize, setSelctedsize] = useState(null);
  const handleAddToCart=({item})=>{ size.item = selectedSize;
    addToCart(item);
    navigation.navigate("cart");
  };


  return (
    <LinearGradient colors={['#aa998f', '#f9eae1',]}
      style={styles.container}>
      <View style={styles.Headercontainer}>
        <Header />
        <Image source={{ uri: item.image }} style={styles.coverImage} />
        <View style={styles.contentcontainer}>
          <Text style={styles.title}> {item.title} </Text>
          <Text style={[styles.title, styles.price]}> {item.price}</Text>
        </View>
      </View>
      {/*size container*/}
      <View style={[styles.title, styles.sizeContainer]}>
        <Text style={styles.sizetext}>Size</Text>
        {

          size.map((size) => {
            return (
              <View>
                <TouchableOpacity style={styles.sizeValuecontainer} onPress={() => {
                  setSelctedsize(size);
                  console.log('size:', size);
                }}>
                  <Text style={[styles.sizetext2, selectedSize === size && { color: "#ffffff" }]}>
                    {size}

                  </Text>
                </TouchableOpacity>
              </View>
            );

          })}
      </View>

      {/*description container*/}
     {/* <View style={[styles.titleflavor, styles.flavorcontainer]} >
        <Text style={styles.flavortext} >Flavors</Text>
        {
          flavors.map((flavors) => {
            return (
              <View>
                <TouchableOpacity style={styles.flavorValuecontainer} onPress={() => {
                  setSelctedFlavor(flavors);
                  console.log('flavors:', flavors);
                }}>
                  <Text style={[styles.flavortext2, selectedFlavor === flavors && { color: "#ffffff" }]}>
                    {flavors}

                  </Text>

                </TouchableOpacity>

              </View>

            );

          })
        }
      </View> */}
      <View style={ styles.aboutcontainer}>
       <Text style={styles.textabout} > About </Text>
      </View>

      <View style={ styles.detailcontainer}>
      <Text  style={ styles.detailtext}>
      Espresso is a concentrated coffee brewed by forcing hot water through finely ground coffee beans under pressure. It’s intense, rich, and forms the base for various coffee drinks.
      </Text>
      </View>

       {/*add to cart button container*/}
       <TouchableOpacity style={styles.button} onPress={()=>{handleAddToCart(item);
      }}>
       <Text style={styles.buttontext}> Order Now </Text>

       </TouchableOpacity>

    </LinearGradient>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,

  },
  Headercontainer: {
    padding: 20,
  },

  coverImage: {
    marginVertical: 3,
    width: "100%",
    height: 420,
    borderColor: "#a98467",
  },
  contentcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",

  },
  price: {
    fontSize: 23,
    color: "#001524",
    fontWeight: "500",
  },
  title: {
    fontSize: 23,
    color: "#001524",
    fontWeight: "500",
  },
  sizeContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 5,

  },
  sizetext: {
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 21,
    color: "#4a4e69"

  },

  sizeValuecontainer: {
    height: 50,
    width: 50,
    borderRadius: 18,
    backgroundColor: "#c9ada7",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },

  sizetext2: {
    fontSize: 15,
    justifyContent: "center",
    fontWeight: "600",
  },

  button:{
   backgroundColor: "#4a4e69",
   padding : 10,
   margin: 10,
   borderRadius:20,
   marginVertical: 10,
  },

  buttontext: {
  fontSize:24,
  fontWeight:"600",
  color:"white",
  textAlign:"center",

  },

  aboutcontainer: {
   flexDirection: "row",
   marginHorizontal: 24,
  },
  
  textabout: {
   fontSize:20,
   fontWeight:"600",

  },
  detailcontainer:{
   marginHorizontal:24,

  },

  detailtext:{
    fontSize: 15,
  }


});