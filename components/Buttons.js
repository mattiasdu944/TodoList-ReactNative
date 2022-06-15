import React from 'react'
import {SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native'

export function ButtonPrimary ({title, onPress}){
  return (
    <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={onPress}
    >
        <Text
            style={styles.Text}
        >
            {title}
            
        </Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    buttonPrimary: {
        height: 50,
        borderRadius: 10,
        backgroundColor: '#00c8e0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text:{
        color: '#f4fefd',
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
    }
});

export default ButtonPrimary