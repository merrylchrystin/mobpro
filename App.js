import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './Greeting';
import Input from './components/Input';
import Layout from './components/Layout';
import List from './components/List';

class App extends Component {
  constructor(){
    super();
    this.state = {
      greeting: 'Welcome'
    }
  }

  componentDidMount(){

  }

render() {
  return (
    // <View style={styles.container}>
    //   <Greeting text={this.state.greeting}/>
    //   <Text>{this.state.greeting}</Text>
    // </View>
    <Greeting/>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;