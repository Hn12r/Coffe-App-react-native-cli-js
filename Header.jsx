import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { Touchable } from 'react-native';

const Header = ({ iscart }) => {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={()=>navigation.navigate("HOME_STACK")} style={styles.appiconcontainer}>

                {iscart ? (<Ionicons name={"arrow-back"} color={"#6c584c"} size={25} />) : (

                    <Image source={require("../assets/icon2.png")} style={styles.icon2} />
                )}
            </TouchableOpacity>


            {iscart && <Text style={styles.Myorder}> My Order </Text>}

            <Image source={require("../assets/girl.png")} style={styles.girl2} />

        </View>
    );
};

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    icon2: {
        height: 40,
        width: 40,
    },
    appiconcontainer: {
        backgroundColor: "#ccb7ae",
        backgroundColor: "#d5bdaf",
        width: 44,
        height: 44,
        borderRadius: 26,
        justifyContent: "center",
        alignItems: "center",
    },
    girl2: {
        height: 50,
        width: 50,
        borderRadius: 24,
        alignItems: "center",
    },

    Myorder: {
        fontSize: 28,
        color: "#432818",


    }




});