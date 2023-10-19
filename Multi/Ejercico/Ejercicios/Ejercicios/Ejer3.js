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
    const [bulo,setBulo]=useState(false);
    function calcula() {
       
      setText(parseFloat((text/1.609)));
      setBulo(true);
    
    }
    return (<SafeAreaView>
        <Text
        style={styles.te}>Comvertidor de kilometros a millas</Text>
        <TextInput
            style={styles.input}
            onChangeText={newText => setText(newText)}
            placeholder="Introduce los kilometros"
            value={text}
        />
          <Text>{bulo==true?text+" millas":""}</Text>
        <Button
            style={styles.buto}
            title="Press me"
            onPress={() => calcula()}
        />
    </SafeAreaView>);
}
const styles = StyleSheet.create({
    te:{
        marginTop: 80,
        textAlign:'center',
        fontSize:20,
    },
    input: {
        height: 40,
        margin: 12,
        textAlign:'center',
        padding: 10,
       
    },
    buto: {
        justifyContent: 'center',
        marginHorizontal: 16,
        


    },
});
export default Ejer3;