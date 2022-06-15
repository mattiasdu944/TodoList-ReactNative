import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const Tarea = ({tareas}) => {
  return (
    <>
        <FlatList
            data={tareas}

            renderItem={({item}) => (
                <View style={styles.tarea}>
                    <Text style={styles.tareaText}>{item.titulo}</Text>
                    <Text style={styles.tareaText}>{item.descripcion}</Text>
                </View>
            )}
            keyExtractor={item => item.id}
        />
        
    </>
  )
}

const styles = StyleSheet.create({
    tarea:{
        backgroundColor: '#3A4F50',
        marginVertical: 15,
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10,
        height: 70,
        justifyContent: 'center',
    },
    tareaText:{
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#f4fefd',
    }
});

export default Tarea