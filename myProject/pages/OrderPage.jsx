import { Button, StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import PlantsList from '../components/PlantsList';
import { MONTH_OF_THE_YEAR } from '../consts/MonthOfTheYear'
import { useOrderedPlantsContext } from '../contexts/OrderedPlantsContext';
import { vw, vh } from "react-native-expo-viewport-units";

export default function OrderPage({ navigation }) {
  const [allPlants, setAllPlants] = useState([])
  console.log('allPlants: ', allPlants);
  const { orderedPlants, setOrderedPlants } = useOrderedPlantsContext()
  const [selectedPlants, setSelectedPlants] = useState(orderedPlants)
  const currentDate = new Date()

  useEffect(() => getCategories(), [])

  const getCategories = async () => {
    const { data } = await axios.get('https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/agwafarm.json')
    setAllPlants(data.categories.map((prevCategory) => {
      prevCategory.plants.map((plantInfo) => {
        if (selectedPlants.filter((selectPlant) => selectPlant.id === plantInfo.id).length)
          plantInfo.selected = true
        return plantInfo
      })
      return prevCategory
    }))
  }

  const addPlantToOrder = (plantId, categoryName) => {
    let selectedPlantInfo;
    setAllPlants((categories) => {
      return categories.map((prevCategory) => {
        if (prevCategory.name === categoryName) {
          prevCategory.plants.map((plantInfo) => {
            if (plantInfo.id === plantId) {
              selectedPlantInfo = { ...plantInfo }
              plantInfo.selected = true
            }
            return plantInfo
          })
        }
        return prevCategory
      })
    })
    setSelectedPlants((prevSelectedPlants) => [...prevSelectedPlants, selectedPlantInfo])
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

    setSelectedPlants((prevPlants) => prevPlants.filter((plantInfo) => {
      return plantInfo.id !== plantId
    }))
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logoStyle} source={require("../assets/agwaIcon.png")} />

      <Text style={styles.orderTextExplanation}>Your next order</Text>
      <Text style={styles.orderTextExplanation}>The monthly plants order consists of {selectedPlants.length} plants.</Text>
      <Text style={{ ...styles.orderTextExplanation, marginBottom: 0.1 * vh(10) }}>
        Changes to your next order can be made until the end of {MONTH_OF_THE_YEAR[currentDate.getMonth()]}.
        This order will be shipped on the beginning of {MONTH_OF_THE_YEAR[(currentDate.getMonth() + 1) % 12]}.
      </Text>
      <PlantsList plantsListInfo={selectedPlants} changeIcon={"delete"} key={0} title={'Your selected plants'} addPlantOrRemove={removePlantToOrder} />
      {allPlants.map((categoryInfo) => (
        <PlantsList key={categoryInfo.id} changeIcon={"plus"} plantsListInfo={categoryInfo.plants} addPlantOrRemove={addPlantToOrder} title={categoryInfo.name} />
      ))}

      <Button
        title="save changes"
        color='#5cb354'
        disabled={selectedPlants.length !== 5}

        onPress={() => {
          setOrderedPlants(selectedPlants)
          navigation.navigate('Home', { showOrderMessage: true })
        }
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  saveButton: {
    backgroundColor: '#5cb354'
  },
  logoStyle: {
    // width: vw(100),
    height: 0.15 * vh(100),
  },
  orderTextExplanation: {
    marginLeft: 0.1 * vh(10),
    fontWeight: 'bold'
  }
});
