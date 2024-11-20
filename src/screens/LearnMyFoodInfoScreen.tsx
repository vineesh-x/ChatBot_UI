import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LearnMyFoodInfoScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learn About Your Foods Screen</Text>
      <Text>This is where you can learn more about your foods.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default LearnMyFoodInfoScreen;
