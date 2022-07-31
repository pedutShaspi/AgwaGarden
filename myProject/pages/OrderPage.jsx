import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";

export default function OrderPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>order page</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
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
});
