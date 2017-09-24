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
    Dimensions,
    ScrollView
} from 'react-native';
var width = Dimensions.get("window").width;
import CommonCell from './../Commons/XMGCommonCell';

export default class Mine extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* 导航条*/}
                {this.renderNavBar()}
                {/** 条目*/}
                <ScrollView>
                    <View style={{marginTop:15}}>
                        <CommonCell
                            title="扫一扫"
                        />
                    </View>
                    <View style={{marginTop:15}}>
                        <CommonCell
                            title="省流量"
                            isSwitch={true}
                        />
                        <CommonCell
                            title="省流量"
                        />
                        <CommonCell
                            title="省流量"
                        />
                        <CommonCell
                            title="省流量"
                        />
                        <CommonCell
                            title="省流量"
                            rightText="1.99M"
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>
                <TouchableOpacity onPress={()=>{alert("我被点击了")}}>
                    <Text style={styles.navTextStyle}> 更多</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{alert("我被点击了")}} style={styles.touRightStyle}>
                    <Image source={{uri:'icon_14'}} style={styles.mineRightStyle}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#E8E8E8"
    },
    navBarStyle:{
        width:width,
        height:64,
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    navTextStyle:{
        fontSize:24,
    },
    touRightStyle:{
        width:40,
        height:30,
        position:'absolute',
        right:8,
    },
    mineRightStyle:{
        width:30,
        height:30,


    }
});

module.exports = Mine;
