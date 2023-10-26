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
  export default Header;