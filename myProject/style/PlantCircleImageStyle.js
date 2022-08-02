import { StyleSheet } from 'react-native';
import {  vh } from "react-native-expo-viewport-units";

const stylesPlantCircleImage = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 1.1 * vh(10)
    },
    circleImage: {
        backgroundColor: '#f1f1f1',
        borderRadius: 0.4 * vh(10),
        justifyContent: "center",
        alignItems: "center",
        width: 0.8 * vh(10),
        height: 0.8 * vh(10),
        margin: 0.1 * vh(10)
    },
    plantNameStyle: {
        width: 0.8 * vh(10),
        textAlign: 'center',
        fontSize: 0.1 * vh(10)
    },
    iconStyle: {
        position: 'absolute',
        top: 0.05 * vh(10),
        right: 0.65 * vh(10),
        zIndex: 2
    }
});

export default stylesPlantCircleImage;