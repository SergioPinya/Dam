import React from 'react';
import { Alert, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { Appearance } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Switch } from 'react-native-paper';
import { Provider as PaperProvider, Text } from 'react-native-paper';


const Resultat = (props) => {
    return (
        <View style={styles.articleres}>
            <Text>Tu IMC es {props.resultat}{props.imc}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    articleres: {
      borderColor: "brown",
      borderWidth: 2,
      flex: 2,
      padding: 1,
    }
  
})
export default Resultat;