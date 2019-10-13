//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, Button } from 'react-native';
import {editNote} from '../actions'
import {connect} from 'react-redux'


// create a component
class Edit extends Component {
  state={
      title:this.props.navigation.state.params.title,
      content:this.props.navigation.state.params.content,
      key:this.props.navigation.state.params.key
  }

  submit = () =>{
    
    this.props.editNote(this.state.title, this.state.content, this.state.key);

    this.setState({
        title:"",
        content:"",
       key:""
    })

    this.props.navigation.navigate("Notes")

  }

    render() {
        return (
    <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Thay Đổi Nội Dung Ghi Chú</Text>
        <TextInput style={{marginTop:20, height:40, borderColor:'gray', borderWidth:1}} placeholder="Tiêu đề" onChangeText={title => this.setState({title})} value={this.state.title} />
        <TextInput style={{marginTop:20, height:90, borderColor:'gray', borderWidth:1, marginBottom:15}} placeholder="Nội dung" onChangeText={content => this.setState({content})} value={this.state.content} />
     <Button title="Sửa" onPress={this.submit} />
    
    </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
         padding:30,
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default connect(null, {editNote})(Edit);
