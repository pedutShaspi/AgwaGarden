import { Button, View, Image } from 'react-native';
import React, { useEffect, useState } from "react";
import PlantsList from '../components/PlantsList';
import { useOrderedPlantsContext } from '../contexts/OrderedPlantsContext';
import stylesHomePage from '../style/HonePageStyle';

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
    <View style={stylesHomePage.container}>

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


