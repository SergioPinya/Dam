import { View, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [color, setColor] = useState('green');
  const [forma, setForma] = useState(200);
  const [color1, setColor1] = useState('yellow');
  
  function retandulo() {
    
    if(forma==0){
  
     setForma(200)
    }else{
       if (color == 'green') {
      setColor('yellow');
      setColor1('green');
      setForma(forma-10);
     
    } else {
      setColor('green');
      setColor1('yellow');
      setForma(forma-10);
     
    }
    }
   
  }
  

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View
        style={[styles.square, { height: forma },{ width: forma }, { backgroundColor: color1 }]}
      />
      <Button title="Pulsame!" onPress={() => retandulo()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    size: '100',
    mt: '-2',
    marginTop: -6,
    width: 200,
    height: 200,
    backgroundColor: 'yellow',
  },
});
