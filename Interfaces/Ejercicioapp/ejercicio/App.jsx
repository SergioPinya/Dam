
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';
const screenWidth = Dimensions.get('window').width;
//Array que conté un llistat d'urls d'imatges a mostrar.
const images = [
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
];
//Guardeu la imatge del logo de VS Code en la següent ubicació
const localImg = require('./imatges/visualstudio_code-card.png')
const App = () => {
  return (
//Hola esto es un puto lio
    <View style={styles.contenidor}>
      <View style={styles.seccio1}>

        <View style={styles.contenidor2}>
          <Text>imagen</Text>
        </View>
        <View style={styles.contenidor2}>
          <View style={styles.contenidor3}>

          </View>
          <View style={styles.contenidor3}>

          </View>
          <View style={styles.contenidor3}>

          </View>
          <View style={styles.contenidor4}>

          </View>
        </View>

      </View>
      <View style={styles.seccio2}>
        <Text>Secció 2</Text>


      </View>
      <View style={styles.seccio3}>
        <Text>Secció 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenidor: {
    flex: 1,
    flexDirection: 'column',
    borderColor: 'purple',
    borderWidth: 5,

  },
  contenidor2: {
    flex: 1,
    borderColor: 'purple',
    borderWidth: 5,
    flexDirection: 'row',
    

  },
  contenidor3: {
    flex: 1,
    borderColor: 'green',
    borderWidth: 5,
    

  }, contenidor4: {
    flex: 3,
    borderColor: 'green',
    borderWidth: 5,
   
  },
  
  seccio1: {
    flex: 0.25,
    borderColor: 'red',
    borderWidth: 3,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'right',
    flexDirection: 'row',
  },
  seccio2: {
    flex: 1,
    borderColor: 'green',
    borderWidth: 3,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'center',

  },
  seccio3: {
    flex: 0.25,
    borderColor: 'blue',
    borderWidth: 3,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'left',
  },
});

export default App;