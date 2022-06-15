import React, {useState} from 'react';

import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native';

// COMPONENTES
import Formulario from './components/Formulario';
import Tarea from './components/Tarea';

const App = () => {
  const [tareas, setTareas] = useState([]);

  return (
    console.log('tareas'),
    <ScrollView
      style={{
        backgroundColor: '#1B2223',
        flex: 1,
      }}>
      <View style={styles.body}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcole to TodoList!</Text>
          <Text style={styles.text}>Desing for Mattias :D!</Text>
          
          <Formulario
            setTareas={setTareas}
            tareas={tareas}
          />

          <Tarea 
            tareas={tareas} 
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },

  container: {
    width: '90%',
  },

  title: {
    alignSelf: 'flex-start',
    fontSize: 26,
    color: '#f4fefd',
    fontFamily: 'Poppins-Bold',
  },
  text: {
    alignSelf: 'flex-start',
    fontSize: 26,
    color: '#00c8e0',
    fontFamily: 'Poppins-Light',
  },
});

export default App;
