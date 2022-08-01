import { Button, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from "react";

export default function PlantCircleImage({ imageId }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.circleImage}
                source={{ uri: `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${imageId}@3x.jpg` }}
            />
        </View>
    );
}
//

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleImage: {
        width: 10,
        height: 10,
        borderRadius: 90
    }
});
