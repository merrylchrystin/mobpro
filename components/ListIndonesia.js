import React,{ Component } from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView } from 'react-native';

class ListIndonesia extends Component{
  constructor(){
    super();
    this.state={
        DataIndo: [],
        refreshing: false
    }
}
renderItem=({item})=>
  <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.box1}><Text>{item.provinsi}</Text></View>
      <View style={styles.box2}><Text>{item.kasusPosi}</Text></View>
      <View style={styles.box3}><Text>{item.kasusSemb}</Text></View>
      <View style={styles.box4}><Text>{item.kasusMeni}</Text></View>
    </View>
  </SafeAreaView>
  
  
onRefresh= () =>{
    this.getDataGlobal();
}

componentDidMount = () =>{
    this.getDataGlobal();
}

getDataGlobal = async () => {
  const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
  const DataIndo = await response.json()
  const { data } = await DataIndo
  this.setState({
      DataIndo: {
          Data: await data,
      }
  })
}

render(){
    if (!this.state.DataIndo) {
        return <Text>Loading...</Text>
    }
    return (
        <View>
          <View style={styles.indoContainer}>
              <Text styles={styles.textIndonesia}> Positif :</Text>
              <View style={styles.box2}></View>
              <Text styles={styles.textIndonesia}> Sembuh :</Text>
              <View style={styles.box3}></View>
              <Text styles={styles.textIndonesia}> Meninggal :</Text>
              <View style={styles.box4}></View>
          </View>
          <View>
            <FlatList 
                data={this.state.DataIndo.Data}
                keyExtractor={item => item.fid.toString()}
                renderItem={this.renderItem}
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
            />
          </View>
        </View>
        
    )
}
};
export default ListIndonesia;

const styles = StyleSheet.create({
  returnContainer: {
    flex: 1,
    flexDirection:'row',
    padding:5,
    borderWidth:1,
    backgroundColor: '#EBEBEB',
  },
  container: {
    flex: 1,
    flexDirection:'row',
    padding:5,
    borderWidth:1,
    backgroundColor: '#EBEBEB',
  },
  indoContainer:{
    flexDirection:'row',
    marginTop:20,
    marginBottom:15
  },
  textIndonesia:{
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize:28,
    marginTop:50,
    fontFamily:'sans-serif-light'
  },

  box1:{
    width:160,
    marginBottom:7,
    height:20
  },
  box2:{
    width:50,
    marginLeft:10,
    alignSelf: 'center',
    marginBottom:7,
    height:20,
    backgroundColor:'powderblue'
  },
  box3:{
    alignSelf: 'center',
    width:50,
    marginLeft:10,
    height:20,
    marginBottom:7,
    backgroundColor:'skyblue'
  },
  box4:{
    marginLeft:10,
    alignSelf: 'center',
    width:50,
    height:20,
    marginBottom:7,
    backgroundColor:'steelblue'
  },

  name:{
    fontSize:20,
    fontWeight: 'bold',
    color: "#000000",
    alignSelf: 'center',
    margin:25
},
})

 