import { StatusBar } from 'expo-status-bar';
import React from 'react';
import RadioForm from 'react-native-simple-radio-button';
import { StyleSheet, View,TextInput,Button,Text, TouchableOpacity} from 'react-native';

var radio_props = [
  {label: 'Male', value: 'male' },
  {label: 'Female', value: 'female' }
];

class Third extends React.Component{
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
            placeholder="Phone number"
            textContentType="telephoneNumber"
            />
            <TextInput 
            style={styles.input}
            placeholder="City"
            textContentType="name"
            />
            <View style={styles.gender}>
              <Text>Gender:</Text>
              <RadioForm
                radio_props={radio_props}
                formHorizontal={true}
                onPress={(value) => {this.setState({value:value})}}
              />
            </View>
            <View style={{flexDirection:'row', paddingTop:120}}>
            <TouchableOpacity style={styles.btn}>
            <Button title='Back' color='#5200cc'
              onPress={() => this.props.navigation.navigate('Second')}
            />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
            <Button title='Next' color='#5200cc'
              onPress={() => this.props.navigation.navigate('Final')}
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
  gender:{
    fontSize:20,
    alignSelf:'stretch',
    marginLeft:20,
    marginRight:20,
    paddingTop:50,
  },
  btn: {
    padding: 100,
    position: 'relative'
  },
});

export default Third;