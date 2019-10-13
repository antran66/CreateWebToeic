import Notes from './Notes';
import Post from './Post';
import Edit from './Edit';

import {createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';


const Home = createStackNavigator({
    Notes:{
        screen:Notes,
        navigationOptions:() => ({
            headerTitle:"Danh sách ghi chú"
        })
    },
    Edit:{
        screen:Edit,
        navigationOptions:() => ({
            headerTitle:"Edit"
        })
    },
},{
    headerLayoutPreset:"center"
})

const BottomTab = createBottomTabNavigator({
    Home:{
        screen:Home
    },
    Thêm:{
        screen:Post
    }
})

export default Routes =createAppContainer(BottomTab)
