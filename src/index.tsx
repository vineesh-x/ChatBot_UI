import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../src/screens/HomeScreen';
import MealScreen from '../src/screens/MealScreen';
import RecipeScreen from '../src/screens/RecipeScreen';
import VoiceChatScreen from '../src/screens/VoiceChatScreen';
import ScanFoodScreen from '../src/screens/ScanFoodScreen';
import LearnMyFoodInfoScreen from '../src/screens/LearnMyFoodInfoScreen';
import CameraGalleryScreen from './screens/CameraGalleryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Check My meal with AI"
          component={MealScreen}
          options={{
            headerBackTitle: '.',
          }}
        />
        <Stack.Screen name="Make a Recipe" component={RecipeScreen}  options={{
            headerBackTitle: '.',
          }}/>
        <Stack.Screen name="Voice Chat" component={VoiceChatScreen}  options={{
            headerBackTitle: '',
          }}/>
        <Stack.Screen name="Scan Food" component={ScanFoodScreen}  options={{
            headerBackTitle: '.',
          }}/>
        <Stack.Screen
          name="Learn about your foods"
          component={LearnMyFoodInfoScreen}
          options={{
            headerBackTitle: '.',
          }}
        />
         <Stack.Screen
          name="Camera-Gallery"
          component={CameraGalleryScreen}
          options={{
            headerShown: false,
            headerBackTitle: '.',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
