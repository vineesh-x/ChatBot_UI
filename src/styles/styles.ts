import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  blurBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Light transparency
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    backgroundColor: '#000000',
    borderRadius: 15,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    borderRadius: 15,
  },
  closeButtonText: {
    margin: 50,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'flex-start'
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
  },
  chatpotImage: {
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 5,
    backgroundColor: '#00000',
    width: '100%',
  },
  menuItemImage: {
    width: 30,
    height: 30,
    marginRight: 15,
    marginLeft: 15,
  },
  cameraImage: {
    width: 20,
    height: 20,
    marginRight: 15,
    marginLeft: 15,
  },
  menuItemText: {
    fontSize: 14,
    color: 'white',
  },
  divider: {
    height: 0.3,
    backgroundColor: '#ddd',
    width: '100%',
  },
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },

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

  blackChatContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '95%',
    height: 50,
    borderRadius: 15,
    marginVertical: 30,
    marginHorizontal: 10,
    alignItems: 'center', 
  },

  descriptionContainer: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 15,
  },

  textInput: {
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 15,
    textAlign: 'center',
    fontSize: 16,
    borderColor: 'transparent',
    borderWidth: 1,
  },

  blackTextInput: {
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 15,
    textAlign: 'left',
    fontSize: 16,
    borderColor: 'grey',
    borderWidth: 1,
    color: '#ffffff',
  },

  title: {
    fontSize: 20,
    marginBottom: 10,
    color: '#7E7E7F',
  },

  description: {
    fontSize: 15,
    color: '#5E5E5F',
    fontWeight: '500',
  },
  iconLeft: {
    paddingHorizontal: 10,
  },

  iconRight: {
    paddingHorizontal: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    flexDirection:'row',
    backgroundColor: 'black',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: height * 0.3,
    alignItems: 'center',
  },
  option: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  cameraOption: {
    padding: 15,
    marginHorizontal: 40,
    marginBottom: 20,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius:10,
  },
  optionIcon: {
    width: 25,
    height: 25,
  },
  optionText: {
    fontSize: 15,
    color: '#ffffff'
  },
  galleryContainer: {
    flex: 1,
    backgroundColor: 'black'
  },

  imageContainer: {
      backgroundColor: 'black',
      justifyContent: 'center',
  },
  sendIcon: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
  },
  sendIconImage: {
   width: 25,
   height: 25,
   padding: 5,
  },
  selectedImage: {
    width: '100%',
    height: '50%',
  },
});
