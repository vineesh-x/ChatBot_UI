import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {styles} from '../styles/styles';
import {RootStackParamList} from '../types';

type CameraGalleryScreenRouteProp = RouteProp<
  RootStackParamList,
  'Camera-Gallery'
>;

const CameraGalleryScreen = ({navigation}: any) => {
  const route = useRoute<CameraGalleryScreenRouteProp>();
  const {source} = route.params;
  return (
    <View style={styles.galleryContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image source={{uri: source}} style={styles.selectedImage} />
      </View>

      <View style={styles.blackChatContainer}>
        <TextInput
          editable
          style={styles.blackTextInput}
          placeholder="Type a message"
          placeholderTextColor="#7E7E7F"
          multiline
          numberOfLines={10}
          
        />
        <TouchableOpacity
          style={styles.sendIcon}
          onPress={() => {
            Alert.alert('Send Clicked');
            navigation.goBack()
          }}>
          <Image
            source={require('../assets/send-icon.png')}
            style={styles.sendIconImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraGalleryScreen;
