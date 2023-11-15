import { Image, Button, View, StyleSheet } from 'react-native';
import { useState,useEffect } from 'react';

export default function Ejer1() {
  const [data, setData] = useState();

  
  useEffect( () => {
    name()
   
       
    
    },[]);
    
    async function name() {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?size=full');
            if (response.ok) {
              const resp = await response.json();
              setData(resp[0].url);
            }
          } catch (error) {
            console.error(error);
          }    
   
    }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data }} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  image: {
    width: 375,
    height: 300,
  }
});