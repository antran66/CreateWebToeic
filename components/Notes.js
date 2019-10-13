//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , Image , FlatList, TouchableHighlight} from 'react-native';
import {getNotes, deleteNote} from '../actions';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux'
import _ from 'lodash';


class Notes extends Component {

 componentDidMount(){
     this.props.getNotes()
 }

    render() {
      
        return (
            <View style={styles.container}>

                {
                    <FlatList style={{width:'100%'}} 
                     data={this.props.listOfNotes}
                     keyExtractor={(item) => item.key}
                     showsVerticalScrollIndicator={false}
                     renderItem={({item}) => {
                         return (
                             <View style={{elevation:8, marginBottom:15,borderRadius:15, backgroundColor:'#C6C6C6', padding:15}}>
                                 <Text style={{fontSize:20,  fontWeight:'bold', marginBottom: 10,}} > {item.title}</Text>
                                 <Text style={{fontSize:16, lineHeight:20}}>{item.content}</Text>
                                  <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:15}}>
                                      <TouchableHighlight onPress={() => this.props.navigation.navigate('Edit',{...item})}>
                                              <View style={{marginRight:15}}>
                                                  <Icon size={30} color="yellow" name="edit" />
                                              </View>
                                      </TouchableHighlight>   
                                      <TouchableHighlight onPress={() =>this.props.deleteNote(item.key)} >
                                              <View>
                                                  <Icon size={30} color="red" name="trash" />
                                              </View>
                                      </TouchableHighlight>   
                                  </View>
                            </View>
                         )
                     }} />
                }
               
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding:10
    },
});

function mapStateToProps(state){

    const listOfNotes = _.map(state.notesList.notesList, (val, key) => {
        return {
            ...val,
            key:key
        }
    })

    return {
        listOfNotes
    }
}



export default connect(mapStateToProps, {getNotes,deleteNote})(Notes);
