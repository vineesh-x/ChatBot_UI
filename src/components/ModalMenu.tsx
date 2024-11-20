import React from 'react';
import {View, Modal} from 'react-native';
import MenuItem from './MenuItem';
import {styles} from '../styles/styles';

interface ModalMenuProps {
  modalVisible: boolean;
  hideModal: () => void;
  navigation: any;
}

const ModalMenu: React.FC<ModalMenuProps> = ({
  modalVisible,
  hideModal,
  navigation,
}) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={modalVisible}
    onRequestClose={hideModal}>
    <View style={styles.blurBackground}>
      <View style={styles.modalContainer}>
        <MenuItem
          title="Check my meal"
          image={require('../assets/chatpot.png')}
          onPress={() => {
            console.log('Check my meal clicked');
            navigation.navigate('Check My meal with AI');
            hideModal();
          }}
        />
        <View style={styles.divider} />
        <MenuItem
          title="Make a recipe"
          image={require('../assets/chatpot.png')}
          onPress={() => {
            console.log('Make a recipe clicked');
            navigation.navigate('Make a Recipe');
            hideModal();
          }}
        />
        <View style={styles.divider} />
        <MenuItem
          title="Voice Chat"
          image={require('../assets/chatpot.png')}
          onPress={() => {
            console.log('Voice Chat clicked');
            navigation.navigate('Voice Chat');
            hideModal();
          }}
        />
        <View style={styles.divider} />
        <MenuItem
          title="Scan food"
          image={require('../assets/chatpot.png')}
          onPress={() => {
            console.log('Scan food clicked');
            navigation.navigate('Scan Food');
            hideModal();
          }}
        />
        <View style={styles.divider} />
        <MenuItem
          title="Learn about your foods"
          image={require('../assets/chatpot.png')}
          onPress={() => {
            console.log('Learn about your foods clicked');
            navigation.navigate('Learn about your foods');
            hideModal();
          }}
        />
      </View>
    </View>
  </Modal>
);

export default ModalMenu;
