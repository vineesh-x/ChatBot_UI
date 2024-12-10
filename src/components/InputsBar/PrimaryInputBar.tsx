import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Microphone from '../../assets/icons/microphone.svg';
import Camera from '../../assets/icons/camera.svg';

export const PrimaryInputBar = ({handleCameraClick = () => {}, startRecording = () => {}}) => {

  return (
    <View style={styles.chatContainer}>
      <TouchableOpacity
        style={styles.iconLeft}
        onPress={() => handleCameraClick()}>
        <Camera style={styles.cameraImage} />
      </TouchableOpacity>
      <TextInput
        editable
        style={styles.textInput}
        placeholder="Type a message"
        placeholderTextColor="#7E7E7F"
        multiline
        numberOfLines={10}
      />
      <TouchableOpacity style={styles.iconRight} onPress={startRecording}>
        <Microphone style={styles.menuItemImage} />
      </TouchableOpacity>
    </View>
  );
};
