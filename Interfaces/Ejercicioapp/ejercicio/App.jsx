/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Alert, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { Appearance } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Switch } from 'react-native-paper';
import { Provider as PaperProvider, Text } from 'react-native-paper';



const App = () => {
  const [peso, setPeso]=useState(0);
  const [alçada, setAlçada]=useState(0);
  const [resultat, setResultat]=useState(0);
  const [imc, setImc]=useState(0);
const calcular= () => {
  setResultat(peso/Math.pow(alçada,2));
  if (resultat<18.5) {
    setImc("pu")
  }
  
};
  return (
    <PaperProvider>
      <View style={styles.contenidor}>
        <View style={styles.header}>
          <Text style={{fontSize:30}}>Calculadora </Text>
          </View>
          <View style={styles.header2}>
          <Text style={{color: "red", fontSize:30}}>I</Text>
          <Text style={{color: "green",fontSize:30}}>M</Text>
          <Text style={{color: "blue",fontSize:30}}>C</Text>
          </View>
        
        <View style={styles.articlepes}>
          <Text>Pes</Text><TextInput placeholder='Kg' style={{borderColor: "green"}} keyboardType="numeric" onChangeText={text=>setPeso(text)}></TextInput>
        </View>
        <View style={styles.articlealt}>
          <Text>Alçada</Text><TextInput keyboardType="numeric" onChangeText={text=>setAlçada(text)}></TextInput>
        </View>
        <View style={styles.articlecal}>
          <Button mode="contained" onPress={() => calcular()}>
            Calcular
          </Button>
        </View>
        <View style={styles.articleres}>
          <Text>Tu IMC es {resultat}{imc}</Text>
        </View>
      </View>
    </PaperProvider>
  );
};
const styles = StyleSheet.create({
  contenidor: {
    flex: 1,
    padding: 1,
   
    flexDirection: 'column',
   
  },
  header: {
    borderColor: "red",
    flexDirection: 'row',
    justifyContent:'center',

  }, 
  header2: {
    
    flexDirection: 'row',
    justifyContent:'center',

  },
  articlepes: {
    borderColor: "blue",
    borderWidth: 2,
    flex: 2,
    padding: 1,
  },
  articlealt: {
    borderColor: "green",
    borderWidth: 2,
    flex: 2,
    padding: 1,
  },
  articlecal: {
    borderColor: "orange",
    borderWidth: 1,
    flex: 1,
    padding: 1,
    justifyContent:"center"
  },
  articleres: {
    borderColor: "brown",
    borderWidth: 2,
    flex: 2,
    padding: 1,
  }
});

export default App;
