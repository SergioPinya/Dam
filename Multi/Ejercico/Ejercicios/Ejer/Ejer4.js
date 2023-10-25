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
    const [numeros, setNumeros] = useState([]);
    

    function al() {

        setNumeros(numeros + text + "\n")
        setText("");
    console.log(JSON.stringify(numeros))
    }
    function alerta() {

        if (isNaN(text)) {
           al()
            alert('Has introducido texto');
        } else if (text == "") {
            alert('No has introducido nada');
        } else if (!isNaN(text)) {
            alert('Has introducido un número');

            al()


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
            <Text style={styles.resul}>{numeros}</Text>
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
            <Text style={styles.resul}>{numeros[0]}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,

        padding: 10,
        marginTop: 80,
        textAlign: "center",
    },
    buto: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    resul: {
        textAlign: "center",
    },
});

export default Ejer4;
