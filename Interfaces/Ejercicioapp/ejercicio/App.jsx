/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Alert, ScrollView, StatusBar,StyleSheet,  View } from 'react-native';
import { Appearance } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Switch } from 'react-native-paper';
import { Provider as PaperProvider, Text } from 'react-native-paper';

const nom = (textAMostrar) => {
  return (<Text style={styles.sectionTitle} >Hola {textAMostrar}</Text>)
};

const App = () => {
  return (
    <PaperProvider>
      {nom('Sergio')}
    </PaperProvider>
  );
};
const styles = StyleSheet.create({
 
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  })
export default App;