/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    Image
} from 'react-native'
import {Navigator} from 'react-native-deprecated-custom-components';
import Lanuch from './app/Components/XMGShop';

export default class AwesomeProject extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name:"启动页",component:Lanuch}}
                configureScene={(route)=>{
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                renderScene={(route,navigator)=>{
                let Component = route.component;
                    return<Component navigator={navigator} {...route.passProps} />
                    }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    commonViewStyle:{
        flex:1,
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
