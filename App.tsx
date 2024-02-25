import React from 'react';

import DetailScreen from './src/pages/Detail/DetailScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Constants} from './src/constants';
import ProductScreen from './src/pages/Products/ProductScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Product: undefined;
  Detail: {id: number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
