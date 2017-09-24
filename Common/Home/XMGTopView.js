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
    ScrollView,
    Dimensions
} from 'react-native';

var width = Dimensions.get('window').width;
import TopMenu from './../LoacalData/TopMenu.json';
import TopListView from './XMGTopListView';
export default class TopView extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            activePage:0
        };
      }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref='scrollView'
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
                >
                    {this.renderScrollItem()}
                </ScrollView>
                <View style={styles.indicatorStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    }
    renderScrollItem(){
        var scrollItemArr = [];
        var dataArr = TopMenu.data;
        for(var j = 0;j<2;j++){
            scrollItemArr.push(
                <TopListView
                    key={j}
                    dataArr = {dataArr[j]}
                />
            )
        }
        return scrollItemArr;
    }

    onAnimationEnd(e){
        var offSetX = e.nativeEvent.contentOffset.x;
        var offSetX = parseInt(offSetX);
        var widt = parseInt(width);
        var currentPag = offSetX / widt;
        var currentPage = parseInt(currentPag);
        this.setState({
            activePage: currentPage
        });
    }
    renderIndicator(){
        var indicatorArr = [], style;
        for (var i = 0;i<2;i++){

            style = (i === this.state.activePage) ?{color:'orange'}:{color:'gray'};
            indicatorArr.push(
                <Text key={i} style={[{fontSize:40},style]}>&bull;</Text>
            )
        }
        return indicatorArr;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white'
    },
    indicatorStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:26
    }
});

module.exports = TopView;
