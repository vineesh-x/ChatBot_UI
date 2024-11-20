import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../styles/styles';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const MealScreen = ({ navigation }: any) => {

  const [modalVisible, setModalVisible] = useState(false);
  
  const handleCameraClick = () => {
    setModalVisible(true);
  };

  const openCamera = () => {
    launchCamera(
      {
        mediaType: 'photo', 
        cameraType: 'back', 
        saveToPhotos: true,
      },
      (response) => {
        setModalVisible(false); 
        if (response.didCancel) {
          // ToDo - Handle the scenario if the user cancel
        } else if (response.errorCode) {
           // ToDo - Handle the scenario if it is error
        } else {
           // ToDo - Handle the scenario if it is success - response.assets[0].uri
        }
      }
    );
    setModalVisible(false); 
  };

  const openGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo', 
        selectionLimit: 1, 
      },
      (response) => {
        setModalVisible(false); 
        if (response.didCancel) {
          // ToDo - Handle the scenario if the user cancel
        } else if (response.errorCode) {
          // ToDo - Handle the scenario if it is error
        } else {
          const source = response.assets?.[0]?.uri;
          if(source){
            navigation.navigate('Camera-Gallery', {source} ); 
          }
        }
      }
    );
   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today</Text>
      <View style={styles.descriptionContainer}>
        <Text>
          “Enter the foods or recipes you’re enjoying Today to see how they align with your personalised Voice recommendations. Get
          Practical tips to enhance your meals and support your nutrition goals. You can snap or upload a photo, type it in, use voice input, scan a barcode, pick from a
          Restaurant menu, or share a recipe link!”
        </Text>
      </View>

      <View style={styles.chatContainer}>
        <TouchableOpacity style={styles.iconLeft} onPress={() => handleCameraClick()}>
        <Image source={require('../assets/camera-icon.png')} style={styles.cameraImage} />

        </TouchableOpacity>

        <TextInput
          editable
          style={styles.textInput}
          placeholder="Type a message"
          placeholderTextColor="#7E7E7F"
          multiline
          numberOfLines={10}
        />

        <TouchableOpacity style={styles.iconRight} onPress={() => Alert.alert('Voice clicked')}>
        <Image source={require('../assets/voice-icon.png')} style={styles.menuItemImage} />
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
        <TouchableWithoutFeedback>
          <View style={styles.modalContent}>
             <TouchableOpacity style={styles.option} onPress={openCamera}>
              <View style={styles.cameraOption}>
              <Image source={require('../assets/camera-outline.png')} style={styles.optionIcon} />
                </View>
              <Text style={styles.optionText}>Take a Photo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={openGallery}>
            <View style={styles.cameraOption}>
              <Image source={require('../assets/gallery.png')} style={styles.optionIcon} />
              </View>
              <Text style={styles.optionText}>Gallery</Text>
            </TouchableOpacity>
          </View>
          </TouchableWithoutFeedback>
        </View>
        </TouchableWithoutFeedback>
      </Modal>

    </View>
  );
};
export default MealScreen;
