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
    View
} from 'react-native';
import CommonView from './../Commons/XMGMiddleCommonView';
import Home_D4 from './../LoacalData/XMG_Home_D4.json';

export default class Find extends Component {

    static defaultProps={
        // 回调函数
        popTopHome: null
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>

            </View>
        );
    }
    renderBottomItem(){
        var itemArr = [];
        var dataArr = Home_D4.data;

        for (var i = 0;i<dataArr.length;i++){
            var itemData = dataArr[i];
            itemArr.push(
                <CommonView
                    title={itemData.maintitle}
                    subtitle={itemData.deputytitle}
                    rightIcon={this.dealWithImgUrl(itemData.imageurl)}
                    titleColor={itemData.typeface_color}
                    tplurl={itemData.tplurl}
                    key={i}
                    callBackClickCell={(data)=>this.popToTopView(data)}
                />
            )
        }
        return itemArr;
    }

    popToTopView(data){
        this.props.popTopHome(data);
    }
    dealWithImgUrl(url){
        if (url.search('w.h') == -1){
            return url;
        }else {
            return url.replace('w.h','120.90');
        }
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:15
    },
    bottomViewStyle:{
        // 设置主轴的方向
        flexDirection:'row',
        flexWrap:'wrap'
    }
});

module.exports = Find;
