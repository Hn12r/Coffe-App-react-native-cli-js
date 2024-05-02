import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native';

const LogIn = () => {
const navigation = useNavigation();   
    return (

        <LinearGradient colors={['#aa998f', '#f9eae1']} style={styles.container}>
            <View style={styles.containerlogo}>
                <Image source={require("../../assets/coffeelogo.png")} style={styles.logoImage} />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text}>Brewing up good ideas since 1887,The perfect place to get your caffeine fix.</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("HOME_STACK")} style={styles.checkoutcontainer}>
         
          <Text style={styles.checkouttext}>
            Let's Explore Flavors
          </Text>
    
      </TouchableOpacity>
        </LinearGradient>

    );
};

export default LogIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerlogo: {

        alignItems: "center",
        paddingBottom: 40,
        justifyContent: "center",

    },


    logoImage: {
        alignItems: "center",
        width: "60%",
        height: "60%",
        marginHorizontal: 20,
    },

    checkoutcontainer: {
        backgroundColor: "#4a4e69",
        width: "60%",
        marginVertical: 30,
        marginHorizontal: 80,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },

    checkouttext: {
        fontSize: 22,
        color: "#ffffff",
        textAlign: "center",
        padding: 10,
        fontWeight: "600",
    },

    containerText:{
        marginVertical: 30,
        marginHorizontal: 80,
    },

    text:{
        fontSize: 13,

    }

});