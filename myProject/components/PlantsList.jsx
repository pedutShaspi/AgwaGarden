import { Text, View, ScrollView } from 'react-native';
import React from "react";
import PlantCircleImage from './PlantCircleImage';
import stylesPlantsList from '../style/PlantsListStyle'

export default function PlantsList({ plantsListInfo, title, addPlantOrRemove, changeIcon }) {

    const changeOrder = (plantId) => {
        addPlantOrRemove(plantId, title)
    }

    return (
        <View style={stylesPlantsList.container}>
            <Text style={stylesPlantsList.title}>
                {title}:
            </Text>
            <ScrollView style={stylesPlantsList.scrollContainer} horizontal={true}>
                {plantsListInfo.map((plantInfo) => (
                    plantInfo?.selected ? <></> :
                    <PlantCircleImage key={plantInfo.id} changeIcon={changeIcon} imageId={plantInfo.id} addPlantOrRemove={changeOrder} plantName={plantInfo.name} />
                ))}
            </ScrollView>
        </View>
    );
}


