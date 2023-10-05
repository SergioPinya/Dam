import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  //Provar a guardar la informacion en un array bidimensional
  const [mat, setMat] = useState({
    number: '',
    sec: '',
  });
  const [con, setCon] = useState(1);
  const [res, setRes] = useState('');
  const [sol, setSol] = useState(0);
  const [bul, setBul] = useState(true);
  //Hacerlo como una funcion

  function numero(ere) {

    for (let i = 0; i < con; i++) {
   
      if (bul==true) {
        setMat({
          number: mat.number + ere,
          sec: mat.sec,
        });
        setRes(mat.number)
      } else {
        setMat({
          number: mat.number,
          sec: mat.sec + ere,
        });
        setRes(mat.sec)
      }
      
      
    }
 
    setCon(con + 1);
  }
  function sum() {
    setBul(false)
  }
  
  function resultado() {
    alert('n' + mat.number);
    alert('s' + mat.sec);
    sol == 0 ? 0 : setRes(sol);
    setBul(true)
  }

  return (
    <View
      style={{
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 70,
      }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Calculadora</Text>

      <View style={{ marginTop: 5 }}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            height: 70,
            width: 340,
            borderRadius: 4,
            borderWidth: 1,
          }}>
          <Text style={{ fontSize: 50, textAlign: 'right', flex: 1 }}>
            {res}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>sen</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>cos</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>tan</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>deg</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>ln</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>log</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>&Pi;</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>rad</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>1/X</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>!</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>√</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>/</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}
              onPress={() => numero('7')}>
              <Text>7</Text>
            </TouchableOpacity>
          </View>

          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}
              onPress={() => numero('8')}>
              <Text>8</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}
              onPress={() => numero('9')}>
              <Text>9</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>x</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}
              onPress={() => numero('4')}>
              <Text>4</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}
              onPress={() => numero('5')}>
              <Text>5</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}
              onPress={() => numero('6')}>
              <Text>6</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}
              onPress={() => numero('1')}>
              <Text>1</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}
              onPress={() => numero('2')}>
              <Text>2</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}
              onPress={() => numero('3')}>
              <Text>3</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}
              onPress={() => sum()}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}
              onPress={() => {
                setMat({
                  number: '',
                  sec: '',
                });
                setRes('');
                setSol('');
              }}>
              <Text>C</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}
              onPress={() => numero('0')}>
              <Text>0</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>,</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}
              onPress={() => resultado()}>
              <Text>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}



/*

import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import Row from "./components/Row";
import calculator, { initialState } from "./util/calculator";

// create class component of App
export default class App extends Component {
  state = initialState;

  // handle tap method
  HandleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  // render method
  render() {
    return (
      <View style={styles.container}>
        
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>

          
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.HandleTap("clear")}
            />

            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.HandleTap("posneg")}
            />

            <Button
              text="%"
              theme="secondary"
              onPress={() => this.HandleTap("percentage")}
            />

            <Button
              text="/"
              theme="accent"
              onPress={() => this.HandleTap("operator", "/")}
            />
          </Row>

      
          <Row>
            <Button text="7" onPress={() => this.HandleTap("number", 7)} />
            <Button text="8" onPress={() => this.HandleTap("number", 8)} />
            <Button text="9" onPress={() => this.HandleTap("number", 9)} />
            <Button
              text="X"
              theme="accent"
              onPress={() => this.HandleTap("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="5" onPress={() => this.HandleTap("number", 5)} />
            <Button text="6" onPress={() => this.HandleTap("number", 6)} />
            <Button text="7" onPress={() => this.HandleTap("number", 7)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.HandleTap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.HandleTap("number", 1)} />
            <Button text="2" onPress={() => this.HandleTap("number", 2)} />
            <Button text="3" onPress={() => this.HandleTap("number", 3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.HandleTap("operator", "+")}
            />
          </Row>

          <Row>
            <Button text="0" onPress={() => this.HandleTap("number", 0)} />
            <Button text="." onPress={() => this.HandleTap("number", ".")} />
            <Button
              text="="
              theme="primary"
              onPress={() => this.HandleTap("equal", "=")}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}

// create styles of app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});

export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
};

export const handleNumber = (value, state) => {
  if (state.currentValue === "0") {
    return { currentValue: `${value}` };
  }

  return {
    currentValue: `${state.currentValue}${value}`,
  };
};

const handleEqual = (state) => {
  const { currentValue, previousValue, operator } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = { operator: null, previousValue: null };

  switch (operator) {
    case "+":
      return {
        currentValue: `${previous + current}`,
        ...resetState,
      };
    case "-":
      return {
        currentValue: `${previous - current}`,
        ...resetState,
      };
    case "*":
      return {
        currentValue: `${previous * current}`,
        ...resetState,
      };
    case "/":
      return {
        currentValue: `${previous / current}`,
        ...resetState,
      };

    default:
      return state;
  }
};

// calculator function
const calculator = (type, value, state) => {
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "clear":
      return initialState;
    case "posneg":
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`,
      };
    case "percentage":
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
      };
    case "operator":
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: "0",
      };
    case "equal":
      return handleEqual(state);
    default:
      return state;
  }
};

export default calculator;



*/
