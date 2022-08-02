import { Button, StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import PlantsList from '../components/PlantsList';
import { useOrderedPlantsContext } from '../contexts/OrderedPlantsContext';

export default function HomePage({ route, navigation }) {
  const {orderedPlants} = useOrderedPlantsContext()
  const [showOrderMessage, setShowOrderMessage] = useState(false)

  useEffect(() => {
    if (route.params && route.params?.showOrderMessage) {
      setShowOrderMessage(route.params?.showOrderMessage)
    }
  }, [route.params])

  return (
    <View style={styles.container}>

      <Image source={require("../assets/agwaIcon.png")} />

      <PlantsList plantsListInfo={orderedPlants} title={'Your last order'} addPlantOrRemove={() => { }} />

      <Button
        title="To order click here"
        color='#5cb354'
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
