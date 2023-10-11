/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
 
  
} from 'react-native';
import {Appearance} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Text } from 'react-native-paper';
import { Switch } from 'react-native-paper';


const App = () =>{



  const [text, setText] = React.useState("");
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
 

  return (
    <View>
      <Text style={{color: "white"}} variant="headlineSmall">TextImput (email)</Text>
      <StatusBar></StatusBar>
      <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    />
       <Text style={{color: "white"}} variant="headlineSmall">Botton(amb text i icona)</Text>
     
      <Button icon="cat" mode="text" onPress={() => console.log('Pressed')}>
    Press me
  </Button>

  <Button icon="cat" mode="outlined" onPress={() => console.log('Pressed')}>
    Press me
  </Button>

  <Button icon="cat" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
  
  <Button icon="cat" mode="elevated" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
  
  <Button icon="cat" mode="contained-tonal" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
  
  <Switch value={isSwitchOn} color='red' onValueChange={onToggleSwitch} />
  
    </View>
    
  );

};
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
