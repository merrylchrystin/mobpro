import React, {Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import ListIndonesia from './components/ListIndonesia';
import Greeting from './components/Greeting';
import SecondHeader from './components/SecondHeader';
import GlobalArea from './components/GlobalArea';

const App = () => {
    return(
      <View style={styles.container}>
            <View style={styles.box1}><Header/></View>
            <View style={styles.box2}><SecondHeader/><GlobalArea/>
            </View>
            <View style={styles.box3}><Greeting/><ListIndonesia/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  box1: {
    flex: 1,
    //height: 110,
    //width: 110,
    backgroundColor: 'white'
},
box2: {
    flex: 4,
    //height: 110,
    //width: 110,
    backgroundColor: 'white'
},
box3: {
    flex : 10,
    //height: 110,
    //width: 110,
    backgroundColor: 'white'
},
// box4: {
//   flex : 12,
//   //height: 110,
//   //width: 110,
//   backgroundColor: 'white'
// },
});

export default App;