import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Alert,
  Button,
  TextInput,
} from "react-native";

const TextInputExample = () => {
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="useless placeholder"
        value={text}
      />
        <Button 
        style={styles.buto}
        title="Press me"
        onPress={() => Alert.alert("si en un numero")}
      />
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

export default TextInputExample;
