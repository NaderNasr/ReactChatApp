import React from 'react'


import {

  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity

} from 'react-native'

import {
  Actions,
} from 'react-native-router-flux'

class Home extends React.Component{

  state = {
    name: '',
  }

  render(){
    return(
      <View>
        <Text style={styles.title}>
          Enter Your Name:
        </Text>

        <TextInput
        style = {styles.nameInput}
        placeholder = 'Your Name'
        onChangeText={(text)=> {
          this.setState({
            name: text,
          })
        }}
        value = {this.state.name}
      />

      <TouchableOpacity
        onPress={()=>{
          //alert(this.state.name)
          // DEBUG:
          Actions.chat({
            name: this.state.name,
          })
        }}
        >
        <Text style={styles.buttonText}>
          Next
        </Text>
      </TouchableOpacity>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },

  nameInput: {
    height: 40,
    margin: 20
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 20,
  }

})

export default Home;
