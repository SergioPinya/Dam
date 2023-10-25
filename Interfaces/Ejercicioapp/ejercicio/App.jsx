
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  Button
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

    <View style={styles.contenidor}>
      
      <Header></Header>

     <Body>
      
     </Body>

      <View style={styles.seccio3}>
       
      </View>
    </View>
  );
};
const Body=()=>{
  return(
    <View style={styles.seccio2}>

        
    {images.map((foto, index) => {
        return(<Image key={index.toString()} source={{ uri: foto }}style={styles.imagen}></Image> );
    })}

    

  </View>
  );
}
const Header = () => {

  return (
    <View style={styles.seccio1}>
    <View style={styles.contHeaderImg}>
      <Image style={styles.headerImg} source={require("./assets/visual-studio-code-2019.png")}></Image>
    </View>
    <View style={styles.contenidor2}>
      <View style={styles.headerCont2}>
          <View style={styles.contHeader}>
            <Text>Posts</Text>
            <Text>20</Text>
          </View>
          <View style={styles.contHeader}>
            <Text>Followers</Text>
            <Text>110304</Text>
          </View>
          <View style={styles.contHeader}>
            <Text>following</Text>
            <Text>1103</Text>
          </View>
      </View>
        <View style={styles.contenidor4}>
          <Button title='Edit Profile' color={"grey"}></Button>
        </View>
    </View>

  </View>
  )
}

const styles = StyleSheet.create({
  contenidor: {
    flex: 1,
    flexDirection: 'column',
   
  },
  contenidor2: {
    flex: 1,
    flexDirection: 'column',
  },
  contHeaderImg: {
    flex: 0.5,
    flexDirection: 'column',
  },
  headerImg: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2
  },
  headerCont2: {
    flex: 1,
    flexDirection: 'row'
  },

  contHeader: {
    flex: 1,
  }, 
  contenidor4: {
    flex: 1
  },

  seccio1: {
    flex: 0.25,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'right',
    flexDirection: 'row',
  },
  seccio2: {
    flex: 1,
   
   
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: "wrap"

  },

  imagen: {
    width: 80,
    height: 80,
    marginTop: 10
  },
  seccio3: {
    flex: 0.25,
   
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'left',
  },
});

export default App;