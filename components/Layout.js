import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Layout = () => {
    return (
            <View style={styles.container}>
            <Text style={styles.box1}></Text>
            <Text style={styles.box2}></Text>
            <Text>style={styles.box3}</Text>
            //<Text style ={styles.textStyle}>Layout Component</Text>
            //<Text style ={styles.blueTextStyle}>This text is blue</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    box1: {
        flex: 1,
        //height: 25,
        //width: 25,
        backgroundColor: 'coral'
    },
    box2: {
        flex: 1,
        //height: 50,
        //width: 50,
        backgroundColor: 'darkgrey'
    },
    box3: {
        flex : 1,
        //height: 75,
        //width: 75,
        backgroundColor: 'aquamarine'
    },
    // textStyle: {
    //     fontSize: 20,
    //     fontWeight: 'bold'
    // }
    // blueTextStyle: {
    //     color: 'blue'
    // }
})

export default Layout;