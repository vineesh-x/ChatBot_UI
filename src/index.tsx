import React, { useState } from 'react';
import { SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Image, View, useColorScheme } from 'react-native';
import ModalMenu from './components/ModalMenu';
import { styles } from './styles/styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter };
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
          <TouchableOpacity onPress={showModal}>
            <Image source={require('./assets/chatpot.png')} style={styles.chatpotImage} />
          </TouchableOpacity>

          <ModalMenu modalVisible={modalVisible} hideModal={hideModal} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
