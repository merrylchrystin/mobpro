import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

class GlobalArea extends React.Component{
    constructor(){
        super();
        this.state = {
            dataGlobal: [],
            positive: '',
            recovered: '',
            death: '', 
        }
    }
    
    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = () => {
        const response = fetch('https://covid19.mathdro.id/api')
        .then(response => response.json())
        .then(json => (this.setState({positive: json.confirmed.value}),
        this.setState({recovered: json.recovered.value}),
        this.setState({death: json.deaths.value}))
        )
    }

    render = () => {
        return(
            <View style={styles.container}>
                <View style={styles.box1}>
                    <Text styles={styles.textGlobal}> Positive   : {this.state.positive}</Text></View>
                    <View style={styles.box2}>
                        <Text styles={styles.textGlobal}> Recovered : {this.state.recovered}</Text></View>
                        <View style={styles.box3}>
                          <Text styles={styles.textGlobal}> Death     : {this.state.death}</Text></View>
          </View>
          
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      padding: 5,
      borderWidth: 2,
      justifyContent: "space-between",
      position: 'relative'
    },
    textGlobal:{
      fontWeight: 'bold',
      fontSize: 28,
      fontFamily: 'sans-serif-light'
    },
  
    box1:{
      flex:1,
      width: 160,
      height: 20,
      borderRadius: 20,
      justifyContent: 'center',
      marginHorizontal: 10,
      backgroundColor: 'powderblue' 
    },
    box2:{
      flex:1,
      width: 160,
      height: 20,
      borderRadius: 20,
      justifyContent: 'center',
      marginHorizontal: 10,
      backgroundColor: 'skyblue'
    },
    box3:{
      flex:1,
      width: 160,
      height: 20,
      borderRadius: 20,
      justifyContent: 'center',
      marginHorizontal: 10,
      backgroundColor: 'steelblue'
    },
  })

export default GlobalArea;