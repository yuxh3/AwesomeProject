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
    Touchable,
    Dimensions
} from 'react-native';

import MiddleData from './../LoacalData/middle.json';
var width = Dimensions.get('window').width;
var cell = 4;
var cellWH = 70;
var vMargin = (width - (cell * cellWH))/( cell + 1);
var hMargin = 15;
export default class MineMiddleView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    }
    renderAllItem(){
        var itemArr = [];
        var data = MiddleData.data;
        for (var i = 0;i<data.length;i++){
            var dataSource = data[i];
            itemArr.push(
            <InnerView
                key={i} iconName={dataSource.iconName} titleName={dataSource.titleName}
            />
            );
        }
        return itemArr;
    }
}

export class InnerView extends Component{
    static defaultProps={
        iconName:'',
        titleName:''
    }
    render(){
        return(
            <View style={styles.innerTopStyle}>
                <Image source={{uri:this.props.iconName}} style={styles.innerViewStyle}/>
                <Text style={[{fontSize:14},{marginTop:5}]}>{this.props.titleName}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        alignItems:'center',
        backgroundColor:'white',
    },
    innerViewStyle:{
        width:34,
        height:34
    },
    innerTopStyle:{
        width:cellWH,
        height:cellWH,
        marginLeft:vMargin,
        alignItems:'center',
        justifyContent:'center',
    }
});

module.exports = MineMiddleView;
