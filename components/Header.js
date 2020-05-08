import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const {textStyle} = styles;
    return (<View><Text style = {textStyle}>Data COVID-19 Global dan Indonesia</Text>
    </View>);
};

const styles  = {
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    // nextt: {
    //     fontSize: 25,
    //     fontWeight: 'bold'
    // },
}

export default Header;