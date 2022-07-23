import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from 'react-native-elements';

import HomeScreen from './screens/homeScreen';
import MapScreen from './screens/mapScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <View style={{ flex: 1 }}>
      

      <NavigationContainer>
        <Stack.Navigator
          intialRouteName="Home"
          screenOption={{ header: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="MapScreen" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
