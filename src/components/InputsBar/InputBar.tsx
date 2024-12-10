import React, {useEffect, useRef, useState} from 'react';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {startRecording, stopRecording} from '../../utils/audio';
import {PrimaryInputBar} from './PrimaryInputBar';
import RecordinBar from './RecordingBar';

export const InputBar = ({handleCameraClick = () => {}}) => {
  const [isRecording, setIsRecording] = useState(true);
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
    // stopAudioRecording();
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

  if (!isRecording) {
    return (
      <PrimaryInputBar
        handleCameraClick={handleCameraClick}
        startRecording={recordAudio}
      />
    );
  }

  return <RecordinBar onStopRecording={stopAudioRecording} />;
};

// const ChatIcon = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   return (
//     <>
//       <TouchableOpacity
//         style={styles.iconRight}
//         onPress={() => {
//           setIsVisible(state => {
//             return !state;
//           });
//         }}>
//         <Microphone style={styles.menuItemImage} />
//       </TouchableOpacity>
//       <Modal
//         visible={isVisible}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={() => setIsVisible(false)}>
//         <TouchableWithoutFeedback onPress={() => setIsVisible(false)}>
//           <View style={styles.modalOverlay}>
//             <TouchableWithoutFeedback>
//               <View style={styles.modalContent}/>
//             </TouchableWithoutFeedback>
//           </View>
//         </TouchableWithoutFeedback>
//       </Modal>
//     </>
//   );
// };
