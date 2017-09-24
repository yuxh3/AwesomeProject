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
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

var width = Dimensions.get("window").width;
var clos = 5;
var cellW = 70,cellH = 70;
var vMagrin = (width - cellW * clos) /(clos +1);

export default class ToplistView extends Component {
    
    
    static defaultProps={
        dataArr: []
    }
    
    // 构造
      constructor(props) {
        super(props);

          var ds = new ListView.DataSource({
              rowHasChanged:(row1,row2) => row1 !== row2
          });
         // 初始状态
        this.state = {
            dataSource: ds.cloneWithRows(this.props.dataArr)
        };
      }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
            />
        );
    }
    renderRow(rowdData){

        return(
            <TouchableOpacity onPress={()=>alert('0')}>
                <View style={styles.viewStyle}>
                    <Image source={{uri: rowdData.image}} style={styles.topViewStyle}/>
                    <Text style={{fontSize:14,color:'gray'}}>{rowdData.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    contentViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:width
    },
    viewStyle:{
        width:cellH,
        height:cellH,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:10
    },
    topViewStyle:{
        width:40,
        height:40
    }
});

module.exports = ToplistView;
