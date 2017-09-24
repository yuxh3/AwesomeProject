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

import TopMiddleData from "./HomeTopMiddleLeft.json";
import MiddleCommonView from './XMGMiddleCommonView';
var width = Dimensions.get("window").width;
export default class HomeMiddleView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* 左边*/}
                {this.renderLeftView()}

                {/* 右边*/}
                <View>
                    {this.renderRightView()}
                </View>
            </View>
        );
    }

    renderLeftView(){

        var data = TopMiddleData.dataLeft[0];
        return(
            <TouchableOpacity onPress={()=>{alert(0)}}>

                <View style={styles.leftViewStyle}>
                    <Image source={{uri:data.img1}} style={styles.leftImageStyle}/>
                    <Image source={{uri:data.img2}} style={styles.leftImageStyle}/>
                    <View style={{flexDirection:'row',marginTop:5}}>
                        <Text style={{color:'blue',marginRight:5}}>{data.price}</Text>
                        <Text style={{color:'orange',backgroundColor:'yellow'}}>{data.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )

    }

    renderRightView(){
        var itemArr =[];
        // 取出具体的数据
        var rightData = TopMiddleData.dataRight;
        for (var i = 0;i<rightData.length;i++){
            // 取出单独的数据
            var data = rightData[i];
            itemArr.push(
                <MiddleCommonView
                    title={data.title}
                    subTitle={data.subTitle}
                    rightIcon={data.rightImage}
                    titleColor={data.titleColor}
                    key={i}
                />
            );
        }
        // 返回组件数组
        return itemArr;
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        marginTop:10,
    },
    leftViewStyle:{
        alignItems:'center',
        width:width * 0.5,
        backgroundColor:'white',
        justifyContent:'center',
        height:119,
    },
    leftImageStyle:{
        width:120,
        height:30,
        resizeMode:'contain'
    }

});

module.exports = HomeMiddleView;
