import React, { memo } from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Ellipse from '../../assets/icons/ellipse.svg';
import StopRecording from '../../assets/icons/stopRecording.svg';
import { RecordingAnimation } from './RecordingAnimation';

const RecordinBar = ({onStopRecording = () => {}}) => {
  return (
    <View style={styles.recordingBarContainer}>
      <RecordingAnimation />
      <View style={styles.recordingChatContainer}>
        <Ellipse style={styles.menuItemImage} />
        <TouchableOpacity onPress={onStopRecording}>
          <StopRecording style={styles.menuItemImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(RecordinBar);
