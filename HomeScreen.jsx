import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../componants/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Catgory from '../../componants/Catgory';
import ProductCard from '../../componants/ProductCard';
import data from '../../Data/data.json';


const categories = ['Trending Now', 'All', 'New', 'Cold coffee', 'Hot coffee']

const HomeScreen = () => {

  const [products, setProducts] = useState(data.Products);

  const [selectedCatgory, setselectedCatgory] = useState("Cold coffee");


  const handleLiked = (item) => {

    const newProducts = products.map((prod) => {
      if (prod.id === item.id) {
        return {
          ...prod,
          isLiked: true,

        };

      }

      return prod;

    });

    setProducts(newProducts);

  };


  return (
    <LinearGradient colors={['#aa998f','#f9eae1']} style={styles.container}>
      <Header />
      <FlatList

        numColumns={2}
        ListHeaderComponent={

          <>

            <Text style={styles.text}> Brewing Joy One Cup </Text>

            <View style={styles.inputcontainer}>
              <View style={styles.iconcontainer}>

                <FontAwesome5Icon name={"search"} size={26} color={"#c9ada7"} />

              </View>
              <TextInput style={styles.inputtext2} placeholder="Search" />

            </View>

            <FlatList data={categories}
              renderItem={({ item }) => (

                <Catgory item={item} selectedCatgory={selectedCatgory}
                  setselectedCatgory={setselectedCatgory} />

              )}

              keyExtractor={(items) => items}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </>


        }
        data={products}
        renderItem={({ item, index }) => (<ProductCard item={item} handleLiked={handleLiked} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 150,
        }}

      />

      {/*<View style={{ flexDirection: "row", flex: 15, justifyContent: "space-between" }}>

        <ProductCard />
        <ProductCard />

      </View>*/}

    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

  },
  iconcontainer: {
    marginHorizontal: 22,

  },

  text: {
    fontSize: 28,
    color: "#0a0908",
    marginTop: 20,

  },

  inputcontainer: {
    backgroundColor: "#f2f4f3",
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    marginVertical: 17,
  },

  inputtext2: {
    flex: 1,
    borderWidth: 1,
    borderColor: "white",

  },

});