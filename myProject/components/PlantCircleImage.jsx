import { Button, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from "react";
import { vw, vh } from "react-native-expo-viewport-units";

export default function PlantCircleImage({ imageId, plantName }) {
    const imageRemoteUri = `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${imageId}@3x.jpg`
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageRemoteUri }} style={styles.circleImage} />
            <Text>
                {plantName}
            </Text>
        </View>
    );
}
//

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    circleImage: {
        backgroundColor: 'red',
        borderRadius: 0.4 * vh(10),
        justifyContent: "center",
        alignItems: "center",
        width: 0.8 * vh(10),
        height: 0.8 * vh(10),
    }
});
