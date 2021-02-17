import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,TextInput,Button,TouchableOpacity} from 'react-native';

 class Second extends React.Component{
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
            placeholder="Email"
            textContentType="emailAddress"
            />
            <TextInput 
            style={styles.input}
            placeholder="Name"
            textContentType="name"
            />
            <TextInput 
            style={styles.input}
            placeholder="Age"
            textContentType="none"
            />
            <View style={{flexDirection:'row', paddingTop:120}}>
            <TouchableOpacity style={styles.btn} disabled={true}>
            <Button color='grey' title='Back'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
            <Button title='Next' color='#5200cc'
                onPress={() => this.props.navigation.navigate('Third')}
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
  logout: {
    marginTop:40,
    paddingLeft:250,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#5200cc',
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
  btn: {
    padding: 100,
    position: 'relative'
  },
});

export default Second;