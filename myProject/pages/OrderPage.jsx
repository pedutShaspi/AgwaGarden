import { Button, StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import PlantsList from '../components/PlantsList';
import { MONTH_OF_THE_YEAR } from '../consts/MonthOfTheYear'
import { useOrderedPlantsContext } from '../contexts/OrderedPlantsContext';

export default function OrderPage({ navigation }) {
  const [allPlants, setAllPlants] = useState([])
  const { orderedPlants, setOrderedPlants } = useOrderedPlantsContext()
  console.log('orderedPlants: ', orderedPlants);
  const currentDate = new Date()

  useEffect(() => getCategories(), [])

  const getCategories = async () => {
    const { data } = await axios.get('https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/agwafarm.json')
    setAllPlants(data.categories)
  }

  const addPlantToOrder = (plantId, categoryName) => {

    setAllPlants((categories) => {
      return categories.map((prevCategory) => {
        if (prevCategory.name === categoryName) {
          prevCategory.plants.map((plantInfo) => {
            if (plantInfo.id === plantId) {
              setOrderedPlants([...orderedPlants, {...plantInfo}])
              plantInfo.selected = true
            }
            return plantInfo
          })
        }
        return prevCategory
      })
    })
  }

  const removePlantToOrder = (plantId, categoryName) => {

    setAllPlants((categories) => {
      return categories.map((prevCategory) => {
        prevCategory.plants.map((plantInfo) => {
          if (plantInfo.id === plantId) {
            plantInfo.selected = false
          }
          return plantInfo
        })
        return prevCategory
      })
    })

    setOrderedPlants((prevPlants) => prevPlants.filter((plantInfo) => {
      return plantInfo.id !== plantId
    }))
  }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/agwaIcon.png")} />

      <Text>Your next order</Text>
      <Text>The monthly plants order consists {orderedPlants.length} plants.</Text>
      <Text>
        Changes to your next order can be made until the end of {MONTH_OF_THE_YEAR[currentDate.getMonth()]}.
        This order will be shipped on the beginning of {MONTH_OF_THE_YEAR[(currentDate.getMonth() + 1) % 12]}.
      </Text>
      <PlantsList plantsListInfo={orderedPlants} key={0} title={'Your selected plants'} addPlantOrRemove={removePlantToOrder} />
      {allPlants.map((categoryInfo) => (
        <PlantsList key={categoryInfo.id} plantsListInfo={categoryInfo.plants} addPlantOrRemove={addPlantToOrder} title={categoryInfo.name} />
      ))}

      <Button
        title="save changes"
        color='#5cb354'
        disabled={orderedPlants.length !== 5}
        onPress={() => navigation.navigate('Home', { showOrderMessage: true })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  saveButton: {
    backgroundColor: '#5cb354'
  }

});
