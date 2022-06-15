import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const Tarea = ({tareas}) => {
  return (
    <>
        <FlatList
            inverted={true}
            data={tareas}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <View style={styles.tarea}>
                    <Text style={[styles.tareaTitle]}>{item.titulo}</Text>
                    <Text style={styles.tareaText}>{item.descripcion}</Text>
                </View>
            )}
        />
        
    </>
  )
}

const styles = StyleSheet.create({
    tarea:{
        backgroundColor: '#3A4F50',
        marginVertical: 15,
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 10,
        height: 150,
        justifyContent: 'center',
    },
    tareaText:{
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        marginVertical: 3,
        color: '#f4fefd',
    },
    tareaTitle:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
        marginVertical: 3,
        color: '#f4fefd',
    }
});

export default Tarea