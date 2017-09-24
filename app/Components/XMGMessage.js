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
    ScrollView
} from 'react-native';
import MyCell from './XMGCommonMyCell';
import MessMiddleView from './XMGMiddleView';
import MessHeadView from './XMGMessHeadView';
export default class Message extends Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <MessHeadView />
                    <View>
                        <MyCell
                            leftIconName='icon_05'
                            leftTitleName="我的订单"
                            rightTitle='我的全部订单'
                        />

                        <MessMiddleView />
                    </View>
                </View>
                <View style={styles.mesTopStyle}>
                    <View style={styles.myCellStyle}>
                        <MyCell
                            leftIconName='icon_05'
                            leftTitleName="小马哥钱包"
                            rightTitle='账户余额:¥100'
                        />
                        <MyCell
                            leftIconName='icon_06'
                            leftTitleName='抵用卷'
                            rightTitle='0'
                        />
                    </View>
        
                    <View style={styles.myCellStyle}>
                        <MyCell
                            leftIconName='icon_07'
                            leftTitleName="积分商城"
                        />
                    </View>
    
                    <View style={styles.myCellStyle}>
                        <MyCell
                            leftIconName='icon_08'
                            leftTitleName="今日推荐"
                            rightIconName='icon_09'
                        />
                    </View>
    
                    <View style={styles.myCellStyle}>
                        <MyCell
                            leftIconName='icon_10'
                            leftTitleName="我要合作"
                            rightTitle="轻松开店，招财进宝"
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mesTopStyle:{
        backgroundColor:'#E8E8E8',

    },
    myCellStyle:{
        marginTop:20
    }
});

module.exports = Message;
