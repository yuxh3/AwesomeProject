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
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
var width = Dimensions.get("window").width;
export default class HomeDetail extends Component {


    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data:this.props.data
        };
      }
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <View style={styles.textStyle}>
                    <Text >{this.props.title}</Text>
                </View>
            </View>
        );
    }

    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>

                <TouchableOpacity onPress={()=>this.popTopHome()} style={styles.touLeftStyle}>
                    <Image source={{uri:'icon_back'}} style={styles.mineRightStyle}/>
                </TouchableOpacity>

                <TouchableOpacity >
                    <Text style={styles.navTextStyle}> {this.props.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{alert("我被点击了"+this.props.title)}} style={styles.touRightStyle}>
                    <Image source={{uri:'icon_14'}} style={styles.mineRightStyle}/>
                </TouchableOpacity>
            </View>
        )
    }

    popTopHome(){
        alert("data"+this.state.url);
        this.props.navigator.pop();
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    textStyle:{
        flex:1,
        backgroundColor:'#797990',
        alignItems:'center',
        justifyContent:'center'
    },
    navBarStyle:{
        width:width,
        height:64,
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    navTextStyle:{
        fontSize:24
    },
    touRightStyle:{
        width:40,
        height:30,
        position:'absolute',
        right:8,
    },
    touLeftStyle:{
        width:40,
        height:30,
        position:'absolute',
        left:8,
    },
    mineRightStyle:{
        width:30,
        height:30,


    }
});

module.exports = HomeDetail;
