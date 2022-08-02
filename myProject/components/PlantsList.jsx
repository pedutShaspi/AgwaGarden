import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useState } from "react";
import { vw, vh } from "react-native-expo-viewport-units";
import PlantCircleImage from './PlantCircleImage';

export default function PlantsList({ plantsListInfo, title, addPlantOrRemove }) {

    const changeOrder = (plantId) => {
        addPlantOrRemove(plantId, title)
    }

    return (
        <View style={styles.container}>
            <Text>
                {title}:
            </Text>
            <ScrollView style={styles.scrollContainer} horizontal={true}>
                {plantsListInfo.map((plantInfo) => (
                    plantInfo?.selected ? <></> :
                    <PlantCircleImage key={plantInfo.id} imageId={plantInfo.id} addPlantOrRemove={changeOrder} plantName={plantInfo.name} />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        height: 0.2 * vh(100),
    },
});
