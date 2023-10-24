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
  const [numeros, setNumeros]=useState("");
    function alerta() {

      if (isNaN(text)) {
        setText('');
        alert('Has introducido texto');
      } else if (text == "") {
        alert('No has introducido nada');
      } else if (!isNaN(text)) {
        alert('Has introducido un número');
        setNumeros(text)
        setText('');
       
      }
       
    }

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={newText => setText(newText)}
        placeholder="useless placeholder"
        value={text}
      />
        <Button 
        style={styles.buto}
        title="Press me"
        onPress={() => alerta()}
      />
      <Text>{numeros}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 80,
  },
  buto:{
    height: 20,


  },
});

export default Ejer1;
