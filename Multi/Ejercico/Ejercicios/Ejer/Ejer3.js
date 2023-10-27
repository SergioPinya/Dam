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


const Ejer3 = () => {
    const [text, setText] = useState("");
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
          placeholder="Pon un numero"
         value={text}
        />
          <Button 
          style={styles}
          title="Press me"
          onPress={() => alerta()}
        />
        
      {numeros.map((element,index)=>(
        <Text key={index.toString()}>{element}</Text>
      ))}
      {letras.map((element,index)=>(
        <Text key={index.toString()}>{element}</Text>
      ))}
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

export default Ejer3;
