import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Button, TouchableOpacity} from 'react-native';

 class Login extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome To React Native</Text>
        <TextInput 
          style={styles.input}
          placeholder="Email"
          textContentType="emailAddress"
        />
        <TextInput 
          style={styles.input}
          placeholder="Password"
          textContentType="password"
        />
        <TouchableOpacity style={styles.btn}>
          <Button title='Login' color='#5200cc'
            onPress={() => this.props.navigation.navigate('Second')}
          />
        </TouchableOpacity>
      
        <StatusBar style="auto" />
      </View>
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
  text: {
    fontSize: 25, 
    fontWeight: 'bold',
    padding:20
  },
  input: {
    fontSize:20,
    alignSelf:'stretch',
    marginLeft:20,
    marginRight:20,
    paddingTop:30,
    borderBottomWidth:1,
    borderBottomColor: 'black',
  },
  btn: {
    padding: 20,
  },
});

export default Login;