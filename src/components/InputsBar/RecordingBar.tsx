import React, {memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import StopRecording from '../../assets/icons/stopRecording.svg';
import {RecordingAnimation} from './RecordingAnimation';
import {CountdownCircleTimer} from './CountDownCircleTimer/CountDownCircleTimer';

const RecordinBar = ({onStopRecording = () => {}}) => {
  return (
    <View style={styles.recordingBarContainer}>
      <RecordingAnimation />
      <View style={styles.recordingChatContainer}>
        <View
          style={{
            marginRight: 15,
            marginLeft: 15,
          }}>
          <CountdownCircleTimer
            isPlaying={true}
            duration={60}
            colors={'#000000'}
            size={40}
            strokeWidth={2}>
            {({remainingTime}) => <Text>{remainingTime}</Text>}
          </CountdownCircleTimer>
        </View>

        <TouchableOpacity onPress={onStopRecording}>
          <StopRecording style={styles.menuItemImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(RecordinBar);
