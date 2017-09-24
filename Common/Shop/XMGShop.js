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
    Image
} from 'react-native';
import Main from './../Main/XMGMain';
export default class Launch extends Component {

    static defaultProps={
         duration: 1000,
        }
    render() {
        return (
            <Image source={{uri:'icon_01'}} style={styles.container}>
            </Image>
        );
    }
    // 开启定时器
    componentDidMount() {
        this.startTimer();

    }
    startTimer(){
        this.timer = setInterval(
            ()=>{
                this.props.navigator.replace({
                    component:Main,
                });
            },
            this.props.duration
        );
    }
    componentWillUnmount() {
        // 请注意Un"m"ount的m是小写

        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

module.exports = Launch;
