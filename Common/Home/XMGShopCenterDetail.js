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
    Dimensions,
    WebView
} from 'react-native';
var width = Dimensions.get("window").width;
export default class ShopCenterDetail extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            detailUrl:this.props.url+'?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.' +
            '6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_' +
            'name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingma' +
            'll_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2' +
            'VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
        };
      }
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        );
    }

    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>

                <TouchableOpacity onPress={()=>this.popTopHome()} style={styles.touLeftStyle}>
                    <Image source={{uri:'icon_back'}} style={styles.mineRightStyle}/>
                </TouchableOpacity>

                <TouchableOpacity >
                    <Text style={styles.navTextStyle}> {this.props.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{alert("我被点击了"+this.props.title)}} style={styles.touRightStyle}>
                    <Image source={{uri:'icon_14'}} style={styles.mineRightStyle}/>
                </TouchableOpacity>
            </View>
        )
    }

    popTopHome(){
        this.props.navigator.pop();
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    navBarStyle:{
        width:width,
        height:64,
        backgroundColor:'#F0F8FF',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    navTextStyle:{
        fontSize:24
    },
    touRightStyle:{
        width:40,
        height:30,
        position:'absolute',
        right:8,
    },
    touLeftStyle:{
        width:40,
        height:30,
        position:'absolute',
        left:8,
    },
    mineRightStyle:{
        width:30,
        height:30
    }

});

module.exports = ShopCenterDetail;
