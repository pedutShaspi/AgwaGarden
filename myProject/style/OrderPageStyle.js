import { StyleSheet } from 'react-native';
import {  vh } from "react-native-expo-viewport-units";

const stylesOrderPage = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    logoStyle: {
      height: 0.15 * vh(100),
    },
    orderTextExplanation: {
      marginLeft: 0.1 * vh(10),
      fontWeight: 'bold'
    }
  });

  export default stylesOrderPage;