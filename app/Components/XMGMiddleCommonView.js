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
export default class MiddleCommonView extends Component {

    static defaultProps={
        title:'',
        subTitle:'',
        rightIcon:'',
        tplurl:'',
        callBackClickCell:null
    }
    render() {
        return (

            <TouchableOpacity onPress={()=>this.clickCell(this.props.tplurl)}>
                <View style={styles.container}>
                    {/*左边*/}
                    <View>
                        <Text style={[{color:this.props.titleColor}, styles.titleStyle]}>{this.props.title}</Text>
                        <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                    </View>
                    {/*右边*/}
                    <Image source={{uri: this.props.rightIcon}} style={{width:64,height:43, resizeMode:'contain'}}/>
                </View>
            </TouchableOpacity>
        );
    }
    clickCell(data){
        if(this.props.callBackClickCell == null)return;
        // 执行回调函数
        this.props.callBackClickCell(data);
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        width:width*0.5 - 1,
        height:59,
        marginBottom:1,
        marginLeft:1,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-around'
    },
    titleStyle:{
        fontSize:18,
        fontWeight:'bold'
    },
    subTitleStyle:{
        color:'gray'
    }
});

module.exports = MiddleCommonView;
