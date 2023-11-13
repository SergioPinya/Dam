import React from 'react';
import { Alert, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { Appearance } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Switch } from 'react-native-paper';
import { Provider as PaperProvider, Text } from 'react-native-paper';


const Calculadora =()=>{
    const [peso, setPeso] = useState(0);
    const [alçada, setAlçada] = useState(0);
    const [resultat, setResultat] = useState(0);
    const [imc, setImc] = useState(0);
    const [error, setError]=useState({
       missatge1:"",
       missatge2:""
    });
    const pesValid = /^(\d+)$|^(\d*\.\d+)$/;
    const calcular = () => {
        setResultat(peso / Math.pow(alçada, 2));
        if (resultat < 18.5) {
          setImc("pu")
          
        }
        
        /* pesValid.test(peso) devuelve true or false */
        
        if (peso<0&&alçada>0) {
            setError({
                missatge1: "Escriu el pes en kg. i amb valors positius (ex: 50.5)",
                missatge2:""
            });
        }else if (peso>0&&alçada<0) {
            setError({
                missatge1: "",
                missatge2:"Escriu el pes en kg. i amb valors positius (ex: 50.5)"
            }); 
        }else if (peso<0&&alçada<0){
            setError({
                missatge1: "Escriu el pes en kg. i amb valors positius (ex: 50.5)",
                missatge2:"Escriu el pes en kg. i amb valors positius (ex: 50.5)"
            }); 
        }else if (pesValid.test(peso)==false&&alçada<0) {
            setError({
                missatge1: "ha de ser un valor permitit",
                missatge2:"Escriu el pes en kg. i amb valors positius (ex: 50.5)"
            });   
        }
    
      };

    
return( <><View style={styles.articlepes}>
    <TextInput label="pes (kg)" placeholder='Kg' style={{ borderColor: "green",borderWidth: 2, width:'50%', }} keyboardType="numeric" onChangeText={text => setPeso(text)}></TextInput>
    <Text style={{fontSize:15,}}>{error.missatge1}</Text>
  </View>
  <View style={styles.articlealt}>
    <TextInput label="alçasa  (m)"  style={{ borderColor: "orange",borderWidth: 2, width:'50%', }} keyboardType="numeric" onChangeText={text => setAlçada(text)}></TextInput>
    <Text style={{fontSize:15,}} >{error.missatge2}</Text>
  </View>
  <View style={styles.articlecal}>
    <Button icon="calculator" mode="contained" onPress={() => calcular()}>
      Calcular
    </Button>
  </View>
  <View style={styles.articleres}>
          <Text>Tu IMC es {resultat}{imc}</Text>
        </View>
  </>)
}

const styles = StyleSheet.create({
     articlepes: {
      marginTop:10,
      flexDirection: 'row',
    },
    articlealt: {
      marginTop:10,
      flexDirection: 'row',
     
    },
    articlecal: {
    flex:1,
      padding: 1,
      justifyContent: "center"
    },
    articleres: {
        borderColor: "brown",
        borderWidth: 2,
        flex: 2,
        padding: 1,
    }
   
  });
  

export default Calculadora