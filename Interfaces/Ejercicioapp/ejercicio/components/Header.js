import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  Button
} from 'react-native';
const Header = (Props) => {

    return (
      <View style={styles.seccio1}>
      <View style={styles.contHeaderImg}>
        <Image style={styles.headerImg} source={require("../assets/visual-studio-code-2019.png")}></Image>
      </View>
      <View style={styles.contenidor2}>
        <View style={styles.headerCont2}>
            <View style={styles.contHeader}>
              <Text>{Props.tit1}</Text>
              <Text>{Props.value1}</Text>
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
  export default Header;