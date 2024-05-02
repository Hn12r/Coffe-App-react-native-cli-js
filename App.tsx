import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import CategoryScreen from './src/screens/CategoryScreen';
import HomeScreen from './src/screens/HomeScreen';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import CartScreen from './src/screens/CartScreen';
import LogIn from './src/screens/LogIn';
import Checkout from './src/screens/Checkout';
import { CartContext, CartProvider } from './context/CartContext';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function Home() {
  return (
    <Text>
      Home
    </Text>

  );
}

const MyHomeStack = () => {
  return (
    <Stack.Navigator screenOptions= {{headerShown: false, }} 
    initialRouteName="" >

      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAIL" component={ProductDetailScreen} />

    </Stack.Navigator>

  );
};



const App = () => {
  return (
    <CartProvider>
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#e5989b",
      }}
      >
        <Tab.Screen
          name="Home_page"
          component={LogIn}
        
          options={{
            tabBarIcon: ({ size, color, focused }) => {
              return <MaterialCommunityIcons name={"home-circle-outline"} size={35} color={color} />
            },
          }
          } />

        <Tab.Screen
          name="HOME_STACK"
          component={MyHomeStack}
          options={{
            tabBarIcon: ({ size, color, focused }) => {
              return <FontAwesome5 name={"store-alt"} size={size} color={color} />
            },
          }
          } />


        <Tab.Screen
        name="cart"
        component={CartScreen}
         
          options={{
            tabBarIcon: ({ size, color, focused }) => {
              const { carts } =  useContext(CartContext);
              
              return (
                <View style={{position:"relative"}}>
              <FontAwesome5 
              name={"coffee"}
              size={size}
              color={color} />
              <View style={{
                height:15,
                width:15,
                borderRadius:7,
                backgroundColor:"#e07a5f",
                justifyContent:"center",
                alignItems:"center",
                position:"absolute",
                top:-12,
                right:-4,
              }}>
                <Text style={{ fontSize:10, color:"#ffffff", fontWeight:"500"}}>{carts?.length}</Text>

              </View>
              </View>
              );
            },
          }
          } />


        <Tab.Screen
        name="Check_out"
        component={Checkout}
          
          options={{
            tabBarIcon: ({ size, color, focused }) => {
              return <FontAwesome5 name={"shopping-bag"} size={size} color={color} />
            },
          }
          } />


      </Tab.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
};

export default App

const styles = StyleSheet.create({})





