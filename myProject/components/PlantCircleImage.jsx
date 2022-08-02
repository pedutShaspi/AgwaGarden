import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import { vw, vh } from "react-native-expo-viewport-units";

export default function PlantCircleImage({ imageId, plantName, addPlantOrRemove, changeIcon }) {
    const imageSrc = changeIcon === 'delete' ?  require('../assets/delete.png') : require('../assets/plus.png')
    const imageRemoteUri = `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${imageId}@3x.jpg`

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => addPlantOrRemove(imageId)}
        >
            <View style={styles.container}>
                {changeIcon !== undefined ? <Image source={imageSrc} style={styles.iconStyle} /> : <></>}
                <Image source={{ uri: imageRemoteUri }} style={styles.circleImage} />
                <Text style={styles.plantNameStyle}>
                    {plantName}
                </Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // width: 'fit-content'

    },
    circleImage: {
        backgroundColor: '#f1f1f1',
        borderRadius: 0.4 * vh(10),
        justifyContent: "center",
        alignItems: "center",
        width: 0.8 * vh(10),
        height: 0.8 * vh(10),
        margin: 0.1 * vh(10)
    },
    plantNameStyle: {
        width: 0.8 * vh(10),
        textAlign: 'center',
        fontSize: 0.1 * vh(10)
    },
    iconStyle: {
        position: 'absolute',
        top: 0.15 * vh(10),
        right: 0.65 * vh(10),
        zIndex: 2
    }
});
