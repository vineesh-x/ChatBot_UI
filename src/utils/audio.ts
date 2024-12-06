import {MutableRefObject} from 'react';
import AudioRecorderPlayer, {
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AVModeIOSOption,
} from 'react-native-audio-recorder-player';

export const startRecording: (
  audioRecorderPlayer: MutableRefObject<AudioRecorderPlayer>,
) => Promise<string> = async audioRecorderPlayer => {
  // Let's get creative and generate a unique audio name!
  const generateAudioName = () => {
    // Come up with a funky way to generate a name here!
    const date = new Date();
    return date.valueOf().toString();
  };
  const path = `${generateAudioName()}.aac`;
  // Set up the audio settings for our recording adventure
  const audioSet = {
    AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
    AudioSourceAndroid: AudioSourceAndroidType.MIC,
    AVModeIOS: AVModeIOSOption.measurement,
    AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
    AVNumberOfChannelsKeyIOS: 2,
    AVFormatIDKeyIOS: AVEncodingOption.aac,
  };
  const meteringEnabled = false;
  // Let the countdown begin…or not!
  // await setCountdown(0);
  // await setSeconds(0);
  // await setMinutes(0);
  // setStartCountdown(true);
  try {

    // Start the recording and get the audio URI
    const uri = await audioRecorderPlayer?.current?.startRecorder(
      path,
      audioSet,
      meteringEnabled,
    );
    // setIsRecording(true);
    // setAudio;
    // setAudioPath(uri);
    return uri;
  } catch (error) {
    console.log('Recording start failed with error:', error);
  } finally {
    return '';
  }
};

export const stopRecording: (
  audioRecorderPlayer: MutableRefObject<AudioRecorderPlayer>,
) => Promise<string> = async audioRecorderPlayer => {
  //   setStartCountdown(false);
  try {
    // Stop the recording and see what we've got
    const result = await audioRecorderPlayer?.current?.stopRecorder();
    // setIsRecording(false);
    return result;
  } catch (error) {
    console.log('Recording end failed with error:', error);
    return '';
  }
};
