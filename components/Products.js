//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , Image , FlatList, TouchableHighlight} from 'react-native';
import {getBlogs, deleteBlog} from '../actions';
import {connect} from 'react-redux'
import _ from 'lodash';


class Blogs extends Component {

 componentDidMount(){
     this.props.getBlogs()
 }

    render() {
      
        return (
            <View style={styles.container}>
                <FlatList style={{width:'100%'}} 
                           data={this.props.listOfBlogs}
                           keyExtractor={(item) => item.key}
                           showsVerticalScrollIndicator={false}
                           renderItem={({item}) => {
                               return (
                                   <View style={{marginBottom:15,borderRadius:15, backgroundColor:'#CECECE', padding:20}}>
                                       <View style={{flexDirection:'row'}}>
                                            <View style={{marginRight: 20}}>
                                                    <Image  style={{ width:70, height: 70, flex: 2}}
                                                            source={require('./logo.png')}/>
                                            </View>
                                            <View>
                                                <Text style={{fontSize:20,  fontWeight:'bold', marginBottom: 10,}} > {item.title}</Text>
                                                <Text style={{fontSize:18, lineHeight:30}}>{item.content}</Text>
                                            </View>
                                       </View>
                                        <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:20}}>
                                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Edit',{...item})}>
                                                    <View style={{marginRight:15}}>
                                                        <Text>Edit</Text>
                                                    </View>
                                            </TouchableHighlight>   
                                            <TouchableHighlight onPress={() =>this.props.deleteBlog(item.key)} >
                                                    <View>
                                                    <Text>Delete</Text>
                                                    </View>
                                            </TouchableHighlight> 
                                        </View>
                                  </View>
                               )
                           }} />
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

    const listOfBlogs = _.map(state.blogsList.blogsList, (val, key) => {
        return {
            ...val,
            key:key
        }
    })

    return {
        listOfBlogs
    }
}



export default connect(mapStateToProps, {getBlogs,deleteBlog})(Blogs);
