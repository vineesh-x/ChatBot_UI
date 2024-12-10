import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '95%',
    height: 50,
    borderRadius: 15,
    marginVertical: 30,
    marginHorizontal: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center', // Align items vertically
    justifyContent: 'space-between', // Space between the items
  },
  recordingChatContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    paddingBottom: 30,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconLeft: {
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  cameraImage: {
    width: 20,
    height: 20,
    marginRight: 15,
    marginLeft: 15,
  },
  textInput: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 15,
    textAlign: 'left',
    fontSize: 16,
    borderColor: 'transparent',
    borderWidth: 1,
  },
  iconRight: {
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  menuItemImage: {
    width: 30,
    height: 30,
    marginRight: 15,
    marginLeft: 15,
  },
  recordingBarContainer: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
  },
  recordingAnimationContainer: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recordingAnimatedViewContainer: {
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  recordingAnimatedView: {
    flexDirection: 'row',
    height: 60,
    width: '80%',
    backgroundColor: 'white',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  animatedVerticalBar: {
    height: 0,
    width: 1,
    borderRadius: 200,
    backgroundColor: 'black',
  },
});
