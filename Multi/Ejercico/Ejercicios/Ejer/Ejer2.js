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


const Ejer2 = () => {
    const [text, setText] = useState("");
    const [numeros, setNumeros] = useState([]);

    function al() {

        setNumeros(numeros + text + "\n")
        setText("");
    }
    function alerta() {

        if (isNaN(text)) {
            setText('');
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
        width: 5,

    },
    resul: {
        textAlign: "center",
    },
});

export default Ejer2;
