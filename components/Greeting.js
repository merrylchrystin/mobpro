import React from 'react';
import { View, Text } from 'react-native';

const Greeting = (props) => {
    const {textStyle} = styles;
    return (<View><Text style = {textStyle}>            Data Indonesia</Text>
    <Text style = {textStyle}>         #StaySafe #dirumahaja</Text>
    </View>);
}

const styles  = {
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    }
}

export default Greeting;