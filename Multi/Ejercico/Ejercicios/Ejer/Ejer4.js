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


const Ejer4 = () => {
    const [text, setText] = useState("");
    const [texto, setTexto] = useState("");
    const [numeros, setNumeros]=useState([]);
    const [letras, setLetras]=useState([]);
      function alerta() {
  
        if (isNaN(text)) {
          let newArray = [...letras];
          newArray.push(text);
          setLetras(newArray);
          
          setText("")
        } else if (text == "") {
          alert('No has introducido nada');
        } else if (!isNaN(text)) {
         
          let newArray = [...numeros];
          newArray.push(text);
          setNumeros(newArray);
          
          setText("")
        }
         
      }


    return (
        <SafeAreaView style={styles.container}>
          <TextInput
          style={styles.input}
          onChangeText={newText => setText(newText)}
          placeholder="Pon una letra"
         value={text}
        />
          <Button 
          style={styles}
          title="Press me"
          onPress={() => alerta()}
        />
        <TextInput
          style={styles.input}
          onChangeText={newText => setTexto(newText)}
          placeholder="Pon un numero"
         value={texto}
        />
          <Button 
          style={styles}
          title="Press me"
          onPress={() => alerta()}
        />
        <Text>{letras[texto]}</Text>
     
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

export default Ejer4;
