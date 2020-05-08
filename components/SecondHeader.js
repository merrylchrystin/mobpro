import React from 'react';
import { Text, View } from 'react-native';

const SecondHeader = (props) => {
    const {textStyle} = styles;
    return (<View><Text style = {textStyle}>    Data Global</Text>
    </View>);
};

const styles  = {
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    // second: {
    //     fontSize: 25,
    //     fontWeight: 'bold'
    // },
    // nextt: {
    //     fontSize: 25,
    //     fontWeight: 'bold'
    // },
}

export default SecondHeader;