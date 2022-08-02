import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useState } from "react";
import { vw, vh } from "react-native-expo-viewport-units";
import PlantCircleImage from './PlantCircleImage';

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

const stylesPlantsList = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        height: 0.2 * vh(100),
    },
    title: {
        marginLeft: 0.1 * vh(10),
    }
});
