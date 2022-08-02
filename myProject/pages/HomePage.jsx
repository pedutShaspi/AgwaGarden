import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function HomePage({ navigation }) {
  const [orderedPlants, setOrderedPlants] = useState([])

  return (
    <View style={styles.container}>
      <Button
        title="To order click here"
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
