import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [mat, setMat] = useState({
    number: '',
    sec: '',
  });
  const [fun, setFun] = useState("");
  const [con, setCon] = useState(1);
  const [res, setRes] = useState('');
  const [sol, setSol] = useState(0);
  const [bul, setBul] = useState(true);
  //Hacerlo como una funcion

  function numero(ere) {

    for (let i = 0; i < con; i++) {


      if (bul == true) {
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
    setFun("+")
  }
  function rest() {
    setBul(false)
    setFun("-")
  }
  function mult() {
    setBul(false)
    setFun("x")
  }
  function div() {
    setBul(false)
    setFun("/")
  }
  function sen() {
    setMat({
      number: Math.sin(mat.number),
      sec: mat.sec,
    });

  }
  function raiz() {
    setMat({
      number: Math.sqrt(mat.number),
      sec: mat.sec,
    });
  }
  function cos() {
    setMat({
      number: Math.cos(mat.number),
      sec: mat.sec,
    });
  }
  function tan() {
    setMat({
      number: Math.tan(mat.number).toFixed(5),
      sec: mat.sec,
    });
  }
  function deg() {
    setMat({
      number: mat.number * 180 / Math.PI,
      sec: mat.sec,
    });
  }
  function rad() {
    setMat({
      number: mat.number * Math.PI / 180,
      sec: mat.sec,
    });
  }
  function ln() {
    setMat({
      number: Math.log(mat.number),
      sec: mat.sec,
    });
  }
  function log() {
    setMat({
      number: Math.log10(mat.number),
      sec: mat.sec,
    });
  }
  function pi() {
    setMat({
      number: Math.PI,
      sec: mat.sec,
    });
  }
  function unox() {

    setMat({
      number: 1 / (mat.number),
      sec: mat.sec,
    });
  }
  function fact() {
    var total = 1;

    for (i = 1; i <= mat.number; i++) {
      setMat({
        number: total *= i,

        sec: mat.sec,
      });
    }
  }

  function resultado() {
    switch (fun) {
      case '+':
        setMat({
          number: parseFloat(mat.number) + parseFloat(mat.sec),

          sec: "",
        });
        break;
      case '-':

        setMat({
          number: parseFloat(mat.number) - parseFloat(mat.sec),

          sec: "",
        });
        break;
      case 'x':

        setMat({
          number: parseFloat(mat.number) * parseFloat(mat.sec),

          sec: "",
        });
        break;
      case '/':

        setMat({
          number: parseFloat(mat.number) / parseFloat(mat.sec),

          sec: "",
        });
        break;
      default:
        setMat({
          number: mat.number,

          sec: mat.sec,
        });
        break;
    }



    setBul(true)
  }
  function reinicio() {
    setBul(true)
    setMat({
      number: '',
      sec: '',
    });
    setRes('');
    setSol('');

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
          <Text style={{ fontSize: 50, textAlign: 'right', flex: 1 }} >

            {/*  {res} */ mat.number != 0 ? bul == true ? mat.number : mat.sec : 0}
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
              }} onPress={() => sen()}>
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
              }} onPress={() => cos()}>
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
              }} onPress={() => tan()}>
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
              }} onPress={() => deg()}>
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
              }} onPress={() => ln()}>
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
              }} onPress={() => log()}>
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
              }} onPress={() => pi()}>
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
              }} onPress={() => rad()}>
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
              }} onPress={() => unox()}>
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
              }} onPress={() => fact()}>
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
              }} onPress={() => raiz()}>
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
              }} onPress={() => div()}>
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
              }} onPress={() => mult()}>
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
              }} onPress={() => rest()}>
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
                reinicio()
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
              }} onPress={() => numero('.')}>
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



