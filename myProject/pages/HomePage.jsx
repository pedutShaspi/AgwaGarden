import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";
import PlantCircleImage from '../components/PlantCircleImage';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>home page</Text>
      <Button
        title="Go to Order"
        onPress={() => navigation.navigate('Order')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
