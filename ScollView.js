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
    ScrollView,
    Image,

} from 'react-native';

// var TimerMixin = require('react-timer-mixin');
var Dimensions = require('Dimensions');
import ImageData from './app/Components/json.json';
var width = Dimensions.get('window').width;

class AwesomeProject extends Component {

    static defaultProps={
        duration: 3000,
    }
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            currentPage: 0,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref='scrollView'
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    //当一帧函数滚动结束
                    onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
                >
                    {this.renderAllImage()}
                </ScrollView>
                <View style={styles.pageViewStyle}>
                    {this.renderPageCircle()}
                </View>

            </View>
        );
    }

    // 开启定时器
    componentDidMount() {
        this.startTimer();

    }

    startTimer(){
        let scrollView = this.refs.scrollView;
        this.timer = setTimeout(
            ()=>{
                let imageCount = ImageData.data.length;
                //4.1 设置圆点
                let activePage = 0;
                //4.2判断
                if(this.state.currentPage>=imageCount-1){
                    activePage = 0;
                }else{
                    activePage = this.state.currentPage+1;
                }
                //4.3 更新状态机
                this.setState({currentPage:activePage});
                //4.4 让scrollview 滚动起来
                let offsetX = activePage * width;
                scrollView.scrollResponderScrollTo({x:offsetX,y:0,animated:true});
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
    renderPageCircle = () => {
        var indicatorArr = [];
        var imgArr = ImageData.data;

        var style;

        for (var i = 0;i<imgArr.length;i++){

            style = (this.state.currentPage == i)?{color:'orange'}:{color:'#ffffff'}

            indicatorArr.push(
                <Text key={i} style = {[{fontSize:40},style]}>&bull;</Text>
            );
        }
        return indicatorArr;
    }
    renderAllImage(){
        //数组
        var allImage = [];
        // 拿到图像数组
        var imgsArr = ImageData.data;
        for (var i = 0;i<imgsArr.length;i++){

            var imgItem = imgsArr[i];
            //创建组建装入数组
            allImage.push(
                <Image key={i} source={{uri: imgItem.img}} style={{width:width,height:140}}/>

            );
        }
        return allImage;
    }

    //当一帧结束的时候
    onAnimationEnd(e){
        var offSetX = e.nativeEvent.contentOffset.x;
        var offSetX = parseInt(offSetX);
        var widt = parseInt(width);
        var currentPag = offSetX / widt;
        var currentPage = parseInt(currentPag);
        this.setState({
            currentPage: currentPage
        });
    }

};


const styles = StyleSheet.create({
    container: {
        marginTop:15,
    },
    pageViewStyle:{
        width:width,
        height:25,
        backgroundColor:'rgba(0,0,0,0.4)',
        flexDirection: 'row',
        alignItems: 'center',
        position:'absolute',
        bottom:0,
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
