import { StyleSheet } from 'react-native';
import {  vh } from "react-native-expo-viewport-units";

const stylesPlantsList = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        height: 0.2 * vh(100),
    },
    title: {
        marginLeft: 0.1 * vh(10),
    }
});

export default stylesPlantsList;