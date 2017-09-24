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
    Dimensions,
    TouchableOpacity
} from 'react-native';

var width = Dimensions.get("window").width;
export default class HeadView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderTopView()}
                {this.renderBottomView()}
            </View>
        );
    }
    renderTopView(){
        return(
            <View style={styles.topViewStyle}>
                <Image source={{uri: 'see'}} style={styles.leftViewStyle}/>
                <View style={styles.rightTopViewStyle}>
                    <Text style={{fontSize:18,color: 'white',fontWeight:'bold'}}>小马哥电商</Text>
                    <Image source={{uri:'icon_01'}} style={styles.rightViewStyle}/>
                </View>
                <Image source={{uri:'icon_arrow'}} style={{width:20,height:20}}/>
            </View>
        )
    }

    renderBottomView(){
        return(
            <View style={styles.bottomViewStyle}>
                {this.renderBottomItem()}
            </View>
        )
    }
    renderBottomItem(){

        var itemArr = [];
        var data = [{"number":'100',"title":'码哥劵'},{"number":'12',"title":'评价'},{"number":'50',"title":'收藏'}]
        for(var i = 0;i<data.length;i++){
            var item = data[i];
            itemArr.push(
                <TouchableOpacity key={i}>
                    <View style={styles.bottomItemViewStyle}>
                        <Text style={{color:'white'}}>{item.number}</Text>
                        <Text style={{color:'white'}}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        return itemArr;
    }
}

const styles = StyleSheet.create({
    container: {
        height:200,
        backgroundColor:'rgba(255,96,0,1.0)'
    },
    topViewStyle:{
        flexDirection:"row",
        justifyContent:'space-around',
        marginTop:80,
        alignItems:'center'

    },
    rightTopViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        width:width*0.72
    },
    leftViewStyle:{
        width:60,
        height:60
    },
    rightViewStyle:{
        width:20,
        height:20,
        marginLeft:5,
    },

    bottomViewStyle:{
        flexDirection:'row',
        height:50,
        backgroundColor:'rgba(250,250,250,0.2)',
        position:'absolute',
        bottom:0,
        justifyContent:'center',
        alignItems:'center',
    },
    bottomItemViewStyle:{
        width:width/3 +1,
        height:40,
        borderLeftColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRightWidth:1,
        borderRightColor:'white',
    }
});

module.exports = HeadView;
