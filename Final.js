import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import { StyleSheet, View,TextInput,Button, TouchableOpacity} from 'react-native';

 class Final extends React.Component{
  state = {
    country: 'Country',
  };
  render(){
    return (
      <View style={{flex:1}}>
        <TouchableOpacity style={styles.logout}>
          <Button title='Logout' color='#5200cc'
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </TouchableOpacity>
        <View style={styles.container}>
            <TextInput 
            style={styles.input}
            placeholder="Organization"
            textContentType="name"
            />
            <TextInput 
            style={styles.input}
            placeholder="State"
            textContentType="name"
            />
            <View style={styles.picker}>
              <Picker 
                selectedValue={this.state.country}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({language: itemValue})
                }>
                <Picker.Item label="Country" value="null" />
                <Picker.Item label="India" value="ind" />
                <Picker.Item label="Australia" value="aus" />
                <Picker.Item label="Argentina" value="arg" />
                <Picker.Item label="Ireland" value="irl" />
              </Picker>
            </View>
            <View style={{flexDirection:'row', paddingTop:120}}>
            <TouchableOpacity style={styles.btn}>
            <Button title='Back' color='#5200cc'
              onPress={() => this.props.navigation.navigate('Third')}
            />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
            <Button title='Submit' color='#5200cc'
              onPress={() => this.props.navigation.navigate('Second')}
            />
            </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
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
  input: {
    fontSize:20,
    alignSelf:'stretch',
    marginLeft:20,
    marginRight:20,
    paddingTop:50,
    borderBottomWidth:1,
    borderBottomColor: 'black',
  },
  logout: {
    marginTop:40,
    paddingLeft:250,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#5200cc',
  },
  picker:{
    backgroundColor: '#bbb',
    paddingRight:240,
    marginTop:50,
  },
  btn: {
    padding: 100,
    position: 'relative'
  },
});

export default Final;