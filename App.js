import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Take a picture" onPress={takePicture} />
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
    </View>
  );
};

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

export default App;





























// import React, { useState } from 'react';
// import { View, Button, Image, StyleSheet } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// const App = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     // setSelectedImage(result.assets[0].uri);
//     // console.log(result.assets[0].uri);
//     if (!result.cancelled) {
//       setSelectedImage(result.assets[0].uri);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       </View>
//       {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginTop: 20,
//   },
// });

// export default App;
