//import liraries
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './Style';

// create a component
interface BottonPorps {
    onPress: any
    btnTxt: string
    bg: object
}
const Button = ({ onPress, btnTxt, bg }: BottonPorps) => {
    return (
        <TouchableOpacity
            style={[styles.sortButton, bg]}
            onPress={() => onPress && onPress()}
        >
            <Text style={styles.buttonText}>{btnTxt}</Text>
        </TouchableOpacity>
    );
};



export default Button;
