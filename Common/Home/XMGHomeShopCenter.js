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
    TouchableOpacity,
} from 'react-native';
import MyComonCell from './../Commons/XMGCommonMyCell';
import Home_D5 from './../LoacalData/XMG_Home_D5.json';

export default class ShopCenter extends Component {

    static defaultProps={
        popToHomeView:null
    }
    render() {
        return (
            <View style={styles.container}>
                <MyComonCell
                    leftIconName='gw'
                    leftTitleName="购物中心"
                    rightTitle={Home_D5.tips}
                />
                {/*下部分*/}
                <ScrollView
                    style={styles.scrollViewStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderAllItem()}
                </ScrollView>
            </View>
        );
    }

    renderAllItem(){
        var itemArr = [];
        var shopData = Home_D5.data;
        
        for (var i = 0;i<shopData.length;i++){
            var data = shopData[i];
            itemArr.push(
                <ShopCenterItem
                    key={i}
                    shopImage={data.img}
                    shopSale={data.showtext.text}
                    shopName={data.name}
                    detailurl={data.detailurl}
                    popTopShopCenter = {(url)=>this.popTopHome(url)}
                />
            )
        }
        return itemArr;
    }
    popTopHome(url){
        if (this.props.popToHomeView == null)return;
        this.props.popToHomeView(url);
    }
}


export class ShopCenterItem extends Component{
    static defaultProps={
        shopImage:'',
        shopSale:'',
        shopName:'',
        detailurl:'',
        popTopShopCenter:null
    }
    render() {
        return (
                <TouchableOpacity onPress={()=>this.clickItem(this.props.detailurl)}>
                    <View style={styles.itemViewStyle}>
                        <Image source={{uri:this.props.shopImage}} style={styles.imageStyle}/>
                        <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                        <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
                    </View>
                </TouchableOpacity>
            );
    }
    clickItem(url)
        {
            // 判断
            if (this.props.detailurl == null)return;
            //施行回调函数
            this.props.popTopShopCenter(url);
        }

}
const styles = StyleSheet.create({
    container: {
        marginTop:15
    },
    scrollViewStyle:{
        flexDirection:"row",
        backgroundColor:'white',
        padding:10
    },
    imageStyle:{
        width:120,
        height:100,
        borderRadius:8
    },
    itemViewStyle:{
        margin:8
    },
    shopSaleStyle:{
        position:'absolute',
        left:0,
        bottom:30,
        backgroundColor:'red',
        color:'white',
        padding:2
    },
    shopNameStyle:{
        textAlign:'center',
        marginTop:5
    }

});

module.exports = ShopCenter;
