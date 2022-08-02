import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import PlantsList from '../components/PlantsList';

export default function OrderPage({ navigation }) {
  const [allPlants, setAllPlants] = useState([])
  const [orderedPlants, setOrderedPlants] = useState([])
  const currentDate = new Date()

  useEffect(() => getCategories(), [])

  const getCategories = async () => {
    const { data } = await axios.get('https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/agwafarm.json')
    setAllPlants(data.categories)
  }

  const addPlantToOrder = (plantId, categoryName) => {
    let selectedPlant;

    setAllPlants((categories) => {
      categories.map((prevCategory) => {
        if (prevCategory.name === categoryName) {
          prevCategory.plants.map((plantInfo) => {
            if (plantInfo.id === plantId) {
              selectedPlant = { ...plantInfo }
              plantInfo.selected = true
            }
            return plantInfo
          })
        }
        return prevCategory
      })
    })

    setOrderedPlants((prevPlants) => [...prevPlants, selectedPlant])
  }

  const removePlantToOrder = (plantId, categoryName) => {

    setAllPlants((categories) => {
      categories.map((prevCategory) => {
        prevCategory.plants.map((plantInfo) => {
          if (plantInfo.id === plantId) {
            plantInfo.selected = false
          }
          return plantInfo
        })
        return prevCategory
      })
    })

    setOrderedPlants((prevPlants) => prevPlants.filter((plantInfo)=>{
      return plantInfo.id !== plantId
    }))
  }

  return (
    <View style={styles.container}>
      <Text>Your next order</Text>
      <Text>The monthly plants order consists {orderedPlants.length} plants.</Text>
      <Text>
        Changes to your next order can be made until the end of {currentDate.getMonth()}.
        This order will be shipped on the beginning of {currentDate.getMonth() + 1}.
      </Text>
      <PlantsList plantsListInfo={orderedPlants} title={'Your selected plants'} addPlantOrRemove={removePlantToOrder} />
      {allPlants.map((categoryInfo) => (
        <PlantsList key={categoryInfo.id} plantsListInfo={categoryInfo.plants} addPlantOrRemove={addPlantToOrder} title={categoryInfo.name} />
      ))}

      <Button
        title="save changes"
        onPress={() => console.log('mkmk nkjjn')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
