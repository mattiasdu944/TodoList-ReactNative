import React, {useState} from 'react';

import { View, Text, TextInput, Alert, StyleSheet } from 'react-native';
import { ButtonPrimary } from './Buttons';

const Formulario = ({setTareas, tareas}) => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const agregarTarea = () => {
        if(titulo.trim() === '' || descripcion.trim() === '' ){
            alert('Todos los campos son obligatorios');
            return;
        }

        const tarea = {
            titulo,
            descripcion,
        }
        
        setTareas([...tareas, tarea]);

        setTitulo('');
        setDescripcion('');
    };

    return (
        <>
            <View style={styles.form}>
                <TextInput  
                    style={styles.input}
                    placeholder="Ingresa el titulo" 
                    placeholderTextColor={'#608385'}
                    value={titulo}
                    onChangeText={(titulo) => setTitulo(titulo)}
                />
                <TextInput  
                    style={styles.input}
                    placeholder="Angresa una descripcion" 
                    placeholderTextColor={'#608385'}
                    value={descripcion}
                    onChangeText={(descripcion) => setDescripcion(descripcion)}
                />
            </View>
            
            <ButtonPrimary 
                title="Agregar Tarea" 
                onPress={agregarTarea} 
            />
        </>
    );
};
const styles = StyleSheet.create({
    form:{
        borderRadius: 5,
        paddingVertical: 20,
        backgroundColor: '#F4FEFD',
        marginVertical: 10,
    },
    input:{
        paddingHorizontal: 25,
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        height: 70,
        color: '#1B2223',
    }
});


export default Formulario;
