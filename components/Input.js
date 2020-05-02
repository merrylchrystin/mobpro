import React, { component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            count: 0
        }
    }
    onPressButton = () => {
        this.setState({ count: this.state.count + 1});
    }
    render() {
        console.log(this.state.name);
        return (
            <View>
            <TextInput
            style={{ height: 40 }}
            placeholder= "Enter your name"
            onChangeText={text => this.setState({ name: text})}
            defaultValue={this.state.name}/>
        }
        <Text>Your name is : {this.state.name}</Text>
            <Button
            onPress={this.onPressButton}
            title="Press Me"
            color="blue"/>
            <Text>Count: {this.state.count}</Text>
            </View>
        )
    }

}
export default Input;