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
    Switch
} from 'react-native';

export default class MyCell extends Component {

    static defaultProps={
        leftIconName:'',//标题
        leftTitleName:'',
        rightTitle:'',
        rightIconName:'',

    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isOn:false
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:this.props.leftIconName}} style={styles.leftImgStyle}/>
                    <Text>{this.props.leftTitleName}</Text>
                </View>

                <View style={styles.rightViewStyle}>
                    {this.renderIcon()}
                    <Image source={{uri:'icon_arrow'}} style={styles.rightImgStyle}/>
                </View>
            </View>
        );
    }

    renderIcon(){
        if(this.props.rightIconName.length > 0){
                return (
                    <Image source={{uri:this.props.rightIconName}} style={styles.leftImgStyle}/>
                )
        }else{
            return(
               <Text style={{fontSize:14}}>{this.props.rightTitle}</Text>
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        height:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        borderBottomWidth:1,
        borderBottomColor:'#E8E8E8'
    },
    leftViewStyle:{
        flexDirection:'row',
        alignItems:'center',
    },
    leftImgStyle:{
        width:24,
        height:24,
        marginLeft:6,
        marginRight:8,
    },
    rightViewStyle:{
        flexDirection:'row',
        alignItems:'center',
    },
    rightImgStyle:{
        width:24,
        height:24,
        marginRight:8,
    }
});

module.exports = MyCell;
