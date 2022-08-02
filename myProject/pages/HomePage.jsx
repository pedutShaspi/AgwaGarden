import { Button, StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import PlantsList from '../components/PlantsList';
import { useOrderedPlantsContext } from '../contexts/OrderedPlantsContext';

export default function HomePage({ route, navigation }) {
  const { orderedPlants } = useOrderedPlantsContext()
  const [showOrderMessage, setShowOrderMessage] = useState(false)

  useEffect(() => {
    if (route.params && route.params?.showOrderMessage) {
      setShowOrderMessage(route.params?.showOrderMessage)
      setTimeout(() => setShowOrderMessage(false), 10000)
    }
  }, [route.params])

  return (
    <View style={styles.container}>

      <Image source={require("../assets/agwaIcon.png")} />

      <Button
        title="To order click here"
        color='#5cb354'
        onPress={() => navigation.navigate('Order')}
      />
        {showOrderMessage && <PlantsList plantsListInfo={orderedPlants} title={'Your last order'} addPlantOrRemove={() => { }} />}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },

});
