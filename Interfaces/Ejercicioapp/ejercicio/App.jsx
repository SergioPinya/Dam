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
import { Drawer } from 'react-native-paper';
import { Provider as PaperProvider, Text } from 'react-native-paper';

import Titol from "./components/Titol";
import Calculadora from './components/Calculadora';

const App = () => {
 
  
  
  return (
    <PaperProvider>
      <View style={styles.contenidor}>
        <Titol></Titol>

        <Calculadora></Calculadora>
        
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
 
  articleres: {
    borderColor: "brown",
    borderWidth: 2,
    flex: 2,
    padding: 1,
  }
});

export default App;
