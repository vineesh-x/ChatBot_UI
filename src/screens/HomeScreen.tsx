import { Image, SafeAreaView, ScrollView, TouchableOpacity, View, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ModalMenu from "../components/ModalMenu";
import { useState } from "react";
import { styles } from "../styles/styles";

const HomeScreen: React.FC = ({navigation}: any) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter };
    const [modalVisible, setModalVisible] = useState(false);
   
  
    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);
  
    return (
      <SafeAreaView style={backgroundStyle}>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
          <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
            <TouchableOpacity onPress={showModal}>
              <Image source={require('../assets/chatpot.png')} style={styles.chatpotImage} />
            </TouchableOpacity>
  
            <ModalMenu modalVisible={modalVisible} hideModal={hideModal} navigation={navigation} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default HomeScreen;