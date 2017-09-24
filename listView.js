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
    ListView,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import shareData from './app/Components/json.json';
var clos = 3;
var screenWidth = Dimensions.get("window").width;
var cellWH = 100;
var vMargin = (screenWidth - cellWH*clos)/(clos +1);
var hMagin= 15;
export default class AwesomeProject extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(shareData.data)
        };
    }
    
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRo}
                contentContainerStyle={styles.listViewStyle}
            />
        );
    }

    renderRo(rowData){
        return(
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.viewStyle}>
                    <Image source={{uri: rowData.img}} style={styles.iconStyle}/>
                    <Text > {rowData.title}</Text>

                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    listViewStyle:{
        flexWrap:'wrap',
        flexDirection:'row',
    },
    iconStyle:{
        width: 60,
        height: 60,
    },
    viewStyle:{
        width:cellWH,
        height:cellWH,
        marginLeft:vMargin,
        marginTop:hMagin,

        alignItems:'center',
    }

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
