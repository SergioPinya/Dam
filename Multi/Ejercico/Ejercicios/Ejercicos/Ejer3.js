import { View, Button, Text, Image, StyleSheet } from 'react-native';
import { useState } from 'react';
 
export default function App() {
 
  const [color, setColor] = useState('green');
  const [texto, setTexto ]=useState("My Title")
  function colore() {
      if (color == 'yellow') {
      setColor('green');
       setTexto("My Title")
    } else {
      setColor('yellow');
      setTexto("My New Title");
    }
  }



  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.title}>{texto}</Text>
      <Image style={styles.image} source={require('../assets/snackicon.png')} />
      <Button title="Pulsame!" onPress={() => colore()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  image: {
    width: 200,
    height: 200,
  },
});
