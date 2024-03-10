import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ImageInputComponent from '../takeIMG';

export default function Home() {

    const [selectedImage, setSelectedImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setSelectedImage(result.uri);
        }
    };


    return (
        <View>
            <Text>Home</Text>
            <View style={styles.container}>
                <Button title="Pick an image from camera roll" onPress={pickImage} />
                {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
            </View>
            <ImageInputComponent></ImageInputComponent>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 200,
      height: 200,
      marginTop: 20,
    },
  });

