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
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components';
var {width, height} = Dimensions.get("window");
import HomeDetail from './XMGHomeDetail';
import TopView from './XMGTopView';
import MiddleView from './XMGHomeMiddleView';
import MiddleBottomView from './XMGMiddleBottomView';
import ShopCenter from './XMGHomeShopCenter';
import ShopCenterDetail from './XMGShopCenterDetail';
import GeustYouLike from './XMGHomeGeustYouLike';
export default class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                {/* 首页导航条*/}
                {this.renderNarBar()}

                <ScrollView>
                    <TopView />
                    <MiddleView />
                    <MiddleBottomView
                        popTopHome={(data)=>this.pushToDetail(data)}
                    />
                    <ShopCenter
                        popToHomeView={(url)=>this.pushToShopCenterDetail(url)}
                    />

                    <GeustYouLike
                    />

                </ScrollView>
            </View>
        );
    }
    pushToDetail(data){
        this.props.navigator.push({
                component: HomeDetail,
                title:"详页",
                passProps:{//这个传递参数
                    title:"详情界面",
                    data:data
        }

            })}
    pushToShopCenterDetail(url){
        this.props.navigator.push({
            component:ShopCenterDetail,
            passProps:{
                url:this.dealWithUrl(url),
                title:'购物中心'
            }
        })
    }

    dealWithUrl(url){
        return url.replace('imeituan://www.meituan.com/web/?url=', '')
    }
    // 首页的导航条
    renderNarBar(){
        return(
            <View style={styles.navBarStyle}>
                {/* 左边*/}
                
                <TouchableOpacity onPress={()=>(alert('我被点击了'))}>
                    <Text style={{fontSize:20}}> 广州</Text>
                </TouchableOpacity>
                {/* 中间*/}

                <TextInput placeholder="输入商家, 品类, 商圈" style={styles.topInputStyle}
                           underlineColorAndroid='transparent'/>
                {/* 右边*/}

                <View style={styles.righrStyle}>
                <TouchableOpacity onPress={()=>(alert('我被点击了'))}>
                    <Image source={{uri: "icon_13"}} style={styles.navrightImgStyle}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>(alert('我被点击了'))}>
                    <Image source={{uri: "user_check_version"}} style={styles.navrightImgStyle}/>
                </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',
    },
    welcome:{
        fontSize:20,
        margin:10,
        textAlign:'center'
    },
    navBarStyle:{
        flexDirection:'row',
        height:64,
        backgroundColor:'rgba(255,96,0,1.0)',
        alignItems:'center',
        justifyContent:'space-around'

    },
    topInputStyle:{
        width:width * 0.7,
        height:40,
        backgroundColor:'white',
        borderRadius:19,
        paddingLeft:15,
        fontSize:16,
        marginLeft:5

    },
    righrStyle:{
        flexDirection:'row',
        alignItems:'center',
        width:width * 0.15,
        justifyContent:'space-around'
    },
    navrightImgStyle:{
        width:25,
        height:25
    }
});

module.exports = Home;
