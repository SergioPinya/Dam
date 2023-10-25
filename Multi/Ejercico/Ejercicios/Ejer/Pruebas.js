import { useState } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
export default function App() {
    const [myArray, setMyArray] = useState([]);
    const handleOnPress = () => {
        let newArray = [...myArray];
        newArray.push(22);
        setMyArray(newArray);
        console.log(newArray);
    }
    return (
        <View style={styles.container}>
            <Button title="Pulsa..." onPress={handleOnPress} />
            <Text>{myArray}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})