import React, {useEffect, useRef, useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from '../../styles/styles';
import Microphone from '../../assets/icons/microphone.svg';
import Camera from '../../assets/icons/camera.svg';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {startRecording, stopRecording} from '../../utils/audio';

export const InputBar = ({handleCameraClick = () => {}}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTimeOut, setRecordingTimeOut] = useState<NodeJS.Timeout>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [recordedAudioUri, setRecordedAudioUri] = useState<string>();
  const audioRecorderRef = useRef<AudioRecorderPlayer>(
    new AudioRecorderPlayer(),
  );

  useEffect(() => {
    audioRecorderRef.current.removeRecordBackListener();
    audioRecorderRef.current.addRecordBackListener(
      ({isRecording: isRec, currentMetering, currentPosition}) => {
        console.log(
          'currentMetering',
          currentMetering,
          currentPosition,
          Boolean(isRec),
        );
      },
    );
  }, []);

  const stopAudioRecording = () => {
    clearTimeout(recordingTimeOut);
    stopRecording(audioRecorderRef).then(uri => {
      console.log('stopRecording uri', uri, isRecording);
      if (isRecording) {
        setRecordedAudioUri(uri);
      }
      setIsRecording(false);
    });
  };

  const recordAudio = () => {
    stopAudioRecording();
    //Todo: rename variable
    const recording = setTimeout(() => {
      stopAudioRecording();
    }, 10000);

    setRecordingTimeOut(recording);
    setIsRecording(true);
    startRecording(audioRecorderRef).then(out => {
      console.log('uri', out);
    });
  };

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

      <TouchableOpacity style={styles.iconRight} onPress={recordAudio}>
        <Microphone style={styles.menuItemImage} />
      </TouchableOpacity>
    </View>
  );
};
