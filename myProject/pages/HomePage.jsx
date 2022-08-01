import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";
import PlantCircleImage from '../components/PlantCircleImage';
import NotificationsPage from '../notifications/Notifications';

export default function HomePage({ navigation }) {
  const [orderedPlants, setOrderedPlants] = useState([])

  return (
    <View style={styles.container}>
      <Text>home page</Text>
      <PlantCircleImage imageId='basil_geronimo' plantName='basil_geronimo' />
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
