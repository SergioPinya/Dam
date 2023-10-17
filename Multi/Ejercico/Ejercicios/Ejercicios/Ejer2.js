import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Alert,
    Button,
    TextInput,
} from "react-native";
import { useState } from 'react';

const Ejer2 = () => {
    const [text, setText] = useState("");
    return (<SafeAreaView>
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
    </SafeAreaView>);
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginTop: 80,
    },
    buto: {
        height: 20,


    },
});
export default Ejer2;