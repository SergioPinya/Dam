import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Alert,
  Button,
  TextInput,
  Text,
} from "react-native";
import { useState } from 'react';


const Ejer1 = () => {
  const [text, setText] = useState("");
  const [numeros, setNumeros]=useState([]);
    function alerta() {

      if (isNaN(text)) {
        setText('');
        alert('Has introducido texto');
      } else if (text == "") {
        alert('No has introducido nada');
      } else if (!isNaN(text)) {
        alert('Has introducido un número');
        let newArray = [...numeros];
        numeros.push(numero);
        setNumeros(newArray);
        setText('');
       
      }
       
    }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={newText => setText(newText)}
        placeholder="Pon un numero"
        value={numeros}
      />
        <Button 
        style={styles}
        title="Press me"
        onPress={() => alerta()}
      />
      <Text>{numeros}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
  textAlign:"center",
  },
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

export default Ejer1;
