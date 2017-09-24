/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ListView
} from 'react-native';

import ShareData from './Common/LoacalData/json.json';
export default class AwesomeProject extends Component {

    // 构造
    constructor(props) {
        super(props);

        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };

        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ":" + rowID];
        };
        this.state={
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,//获取组数据
                getRowData: getRowData,//获取行数据
                rowHasChanged: (r1, r2)=>r1 !== r2,
                sectionHeaderHasChanged: (s1, s2)=>s1 !== s2
            })
        };
    }

    //操作一些耗时的操作
    componentDidMount() {
        this.loadDataFromjson()
    }

    loadDataFromjson() {
        var jsonData = ShareData.data;
        //定义一些变量
        var dataBolb = [],
            sectionIDs = [],
            cars = [],
            rowIDs = [];
        for (var i = 0; i < jsonData.length; i++) {
            sectionIDs.push(i);
            dataBolb[i] = jsonData[i].title;
            //取出所有的车
            cars = jsonData[i].cars;
            rowIDs[i] = [];
            for (var j = 0; j < cars.length; j++) {
                rowIDs[i].push(j);
                //把每一行的数据，放入到databolb数组当中
                dataBolb[i + ":" + j] = cars[j];
            }
        }
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBolb, sectionIDs, rowIDs)
        });
    }

    render() {
        return (
            <View style={styles.outerViewStyle}>

                <ListView style={styles.container}
                          dataSource={this.state.dataSource}
                          renderRow={this.renderRow}
                          renderSectionHeader={this.renderSectionHeader}
                />

            </View>
        );
    }

    renderRow(rowData){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={this.onPress()}>
                <View style={styles.rowStyle}>
                    <Image source={{uri: rowData.icon}} style={styles.rowImageStyle}/>
                    <Text style={styles.itemViewStyle}>{rowData.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    renderSectionHeader(sectionData,sectionID){
        return(
            <View style={styles.sectionHeaderViewstyle}>
                <Text style={styles.textStyle}>{sectionData}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    itemViewStyle:{
        fontSize:15,
        marginLeft:10,
    },
    rowStyle:{
        flexDirection:"row",
        marginLeft:10,
        marginTop:10,
        marginBottom:10,
        borderBottomWidth:1,
        borderBottomColor:"#33333333",
        alignItems:"center",
        paddingBottom:10
    },
    rowImageStyle:{
        width: 70,
        height:70
    },
    outerViewStyle:{
        //占满窗口
        flex:1

    },
    sectionHeaderViewstyle:{
        backgroundColor:"#e8e8e8e8",
        height:30,
        justifyContent:"center",
    },
    headerViewStyle:{
    },
    textStyle:{
        fontSize:24,
        color:"#000000",
        marginLeft:10
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
