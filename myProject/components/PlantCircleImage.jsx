import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from "react";
import stylesPlantCircleImage from '../style/PlantCircleImageStyle';

export default function PlantCircleImage({ imageId, plantName, addPlantOrRemove, changeIcon }) {
    const imageSrc = changeIcon === 'delete' ?  require('../assets/delete.png') : require('../assets/plus.png')
    const imageRemoteUri = `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${imageId}@3x.jpg`

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => addPlantOrRemove(imageId)}
        >
            <View style={stylesPlantCircleImage.container}>
                {changeIcon !== undefined ? <Image source={imageSrc} style={stylesPlantCircleImage.iconStyle} /> : <></>}
                <Image source={{ uri: imageRemoteUri }} style={stylesPlantCircleImage.circleImage} />
                <Text style={stylesPlantCircleImage.plantNameStyle}>
                    {plantName}
                </Text>
            </View>
        </TouchableOpacity>
    );
}



