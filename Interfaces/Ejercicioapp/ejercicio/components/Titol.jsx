import React from 'react';
import { Alert, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { Appearance } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Switch } from 'react-native-paper';
import { Provider as PaperProvider, Text } from 'react-native-paper';


const Titol = () => {
    return (<>
        <View style={styles.header}>
            <Text style={{ fontSize: 30 }}>Calculadora </Text>
        </View>
        <View style={styles.header2}>
            <Text style={{ color: "red", fontSize: 30, fontWeight:"bold" }}>I</Text>
            <Text style={{ color: "green", fontSize: 30, fontWeight:"bold" }}>M</Text>
            <Text style={{ color: "blue", fontSize: 30, fontWeight:"bold" }}>C</Text>
        </View>
    </>
    );
}
const styles = StyleSheet.create({
  
    header: {
      borderColor: "red",
      flexDirection: 'row',
      justifyContent: 'center',
        
    },
    header2: {
        
      flexDirection: 'row',
      justifyContent: 'center',
      flex:1,
  
    },  });
export default Titol;


