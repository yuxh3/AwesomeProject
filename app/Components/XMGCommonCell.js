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
    Switch
} from 'react-native';

export default class CommonCell extends Component {

    static defaultProps={
        title:'',//标题
        isSwitch:false,
        rightText:''
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isOn:false
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{alert('我被电击了')}}>
                    <Text style={[{fontSize:20},{marginLeft:8}]}> {this.props.title} </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{alert('我被电击了')}}>
                    {this.renderRightView()}
                </TouchableOpacity>
            </View>
        );
    }

    renderRightView(){
        if(this.props.isSwitch){
            return(
                <Switch value={this.state.isOn == true}
                        onValueChange={()=>{this.setState({isOn: !this.state.isOn});
                        this.renderSwitchView()}}
                />
            )
        }else{
            return(
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    {this.rightTitile()}
                    <Image source={{uri:"icon_arrow"}} style={styles.cellStyle}/>
                </View>
            )
        }
    }

    renderSwitchView(){

        if(this.state.isOn){
            alert('我被电击了'+this.state.isOn)
        }
    }

    rightTitile() {
        if (this.props.rightText.length > 0) {
            return (
                <Text style={{color:'gray'}}>{this.props.rightText}</Text>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        height:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        borderBottomWidth:1,
        borderBottomColor:'#E8E8E8'
    },
    cellStyle:{
        width:24,
        height:24,
        marginRight:8
    }
});

module.exports = CommonCell;
