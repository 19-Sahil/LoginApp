import React from 'react';
import Login from './Login';
import Second from './Second';
import Third from './Third';
import Final from './Final';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import { StyleSheet} from 'react-native';

const Stack = createStackNavigator();

 class App extends React.Component{
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name='Login'
            component={Login}
          />
          <Stack.Screen
            name='Second'
            component={Second}
          />
          <Stack.Screen
            name='Third'
            component={Third}
          />
          <Stack.Screen
            name='Final'
            component={Final}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;