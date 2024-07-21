import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React, {useRef} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import First from './src/screens/First';
import Second from './src/screens/Second';

const App = () => {
  const navigationRef = useRef<any>(null);
  const Stack = createNativeStackNavigator();
  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="First" component={First} />
              <Stack.Screen name="Second" component={Second} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </>
  );
};

export default App;
