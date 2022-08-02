import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import schedulePushNotification from './notifications/Notifications';
import { OrderedPlantsProvider } from './contexts/OrderedPlantsContext';

export default function App() {
  const Stack = createNativeStackNavigator();

  useEffect(schedulePushNotification,[])

  return (
    <OrderedPlantsProvider >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
              {(props) => <HomePage {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Order" component={OrderPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </OrderedPlantsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
