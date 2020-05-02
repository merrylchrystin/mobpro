import React from 'react';
import { View, Text, FlatList } from 'react-native';

class List extends React.Component{
    constructor(){
        super();
        this.state = {
            students: [
                {
                    id: 1,
                    name: 'Kookie',
                    faculty: 'Computer Science'
                },
                {
                    id: 2,
                    name: 'Hoshi',
                    faculty: 'Nurse'
                },
                {
                    id: 3,
                    name: 'Moci',
                    faculty: 'Bussiness'
                },
                {
                    id: 4,
                    name: 'Nana',
                    faculty: 'Computer Science'
                },
            ],
            refreshing: false
        }
    }

    renderItem = (item) => (
    <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: 'black'}}>
        <Text>Name : {item.name}</Text>;
        <Text>Faculty : {item.faculty}</Text>;
    </View>
    )

    onRefresh = () => {
        this.setState({ refreshing: true})
        const data = this.state.students.concat({id: 5, name: 'Tata', faculty: 'Nurse'})
        this.setState({
            refreshing: true,
            students : data,
        })
    }
    render(){
        //const listStudents = this.state.students.map(this.renderItem)
        //const listStudents = this.state.students.map{students => <Text key={student.id}>{student.name}</Text>}
        return(
            <View>
                <FlatList
                    data={this.state.students}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderItem}
                    refreshing={true}
                    onRefresh= {this.onRefresh}
                />
            </View>
        )
    }
}

export default List;