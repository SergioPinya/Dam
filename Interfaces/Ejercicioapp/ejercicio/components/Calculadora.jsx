import React from 'react';
import { Alert, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { Appearance } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Switch } from 'react-native-paper';
import { Provider as PaperProvider, Text } from 'react-native-paper';

import Resultat from './Resultat';
const Calculadora = () => {
  const [peso, setPeso] = useState(0);
  const [alçada, setAlçada] = useState(0);
  const [resultat, setResultat] = useState(0);
  const [imc, setImc] = useState(0);
  const [error, setError] = useState({
    missatge1: "",
    missatge2: ""
  });
  const pesValid = /^(\d+)$|^(\d*\.\d+)$/;
  const calcular = () => {

    if (peso < 0 && alçada > 0) {

      setError({
        missatge1: "Escriu el pes en kg. i amb valors positius (ex: 50.5)",
        missatge2: ""
      });
    } else if (peso > 0 && alçada < 0) {
      setError({
        missatge1: "",
        missatge2: "Escriu l'alçada en m. i amb valors positius (ex:1.25)"
      });
    } else if (peso < 0 && alçada < 0) {
      setError({
        missatge1: "Escriu el pes en kg. i amb valors positius (ex: 50.5)",
        missatge2: "Escriu l'alçada en m. i amb valors positius (ex:1.25)"
      });
    } else if (pesValid.test(peso) == false || peso == 0 && alçada < 0) {
      setError({
        missatge1: "El pes ha de ser major de 0.0 kg",
        missatge2: "Escriu l'alçada en m. i amb valors positius (ex:1.25)"
      });
    } else if (pesValid.test(alçada) == false || alçada == 0 && peso < 0) {
      setError({
        missatge1: "Escriu el pes en kg. i amb valors positius (ex: 50.5)",
        missatge2: "L'alçada ha de ser major de 0.0 m."
      });
    } else if (pesValid.test(alçada) == false || alçada == 0 && pesValid.test(peso) == false || peso == 0) {
      setError({
        missatge1: "El pes ha de ser major de 0.0 kg",
        missatge2: "L'alçada ha de ser major de 0.0 m."
      });
    } else if (pesValid.test(alçada) == false || alçada == 0 && pesValid.test(peso) == true) {
      setError({
        missatge1: "",
        missatge2: "L'alçada ha de ser major de 0.0 m."
      });
    } else if (pesValid.test(alçada) == true && pesValid.test(peso) == false || peso == 0) {
      setError({
        missatge1: "El pes ha de ser major de 0.0 kg",
        missatge2: ""
      });
    } else if (pesValid.test(alçada) == true && pesValid.test(peso) == true && peso > 0 && alçada > 0) {
      setError({
        missatge1: "",
        missatge2: ""
      });
      let result = peso / Math.pow(alçada, 2)
      result = Number(result.toFixed(1))
      setResultat(result);
      if (result < 18.5) {

        setImc("  Pes insuficient");

      } else if ( result < 25) {

        setImc("  Normopés");
        
      } else if (result < 27) {

        setImc("  Sobrepés grau I");
       
      } else if ( result <30) {
        setImc("  Sobrepés grau II")

      } else if (result >= 30 || result <= 34.9) {
        setImc("  Obesitat de tipus I")
      } else if (result >= 35 || result <= 39.9) {
        setImc("  Obesitat de tipus II")
      } else if (result >= 40 || result <= 49.9) {
        setImc("  Obesitat de tipus III (mòrbida)")
      } else if (result <= 50) {
        setImc("  Obesitat de tipus IV (extrema)")
      }else{
        setImc(" Error")
      }

    }

  };


  return (<><View style={styles.articlepes}>
    <TextInput label="pes (kg)" placeholder='Kg' style={{ borderColor: "green", borderWidth: 2, width: '50%', }} keyboardType="numeric" onChangeText={text => setPeso(text)}></TextInput>
    <Text style={{ fontSize: 15, }}>{error.missatge1}</Text>
  </View>
    <View style={styles.articlealt}>
      <TextInput label="alçasa  (m)" style={{ borderColor: "orange", borderWidth: 2, width: '50%', }} keyboardType="numeric" onChangeText={text => setAlçada(text)}></TextInput>
      <Text style={{ fontSize: 15, }} >{error.missatge2}</Text>
    </View>
    <View style={styles.articlecal}>
      <Button icon="calculator" mode="contained" onPress={() => calcular()}>
        Calcular
      </Button>
    </View>
    <Resultat resultat={resultat} imc={imc} ></Resultat>
  </>)
}

const styles = StyleSheet.create({
  articlepes: {
    marginTop: 10,
    flexDirection: 'row',
  },
  articlealt: {
    marginTop: 10,
    flexDirection: 'row',

  },
  articlecal: {
    flex: 1,
    padding: 1,
    justifyContent: "center"
  },


});


export default Calculadora;