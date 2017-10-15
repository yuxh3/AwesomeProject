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
    ListView,
    TouchableOpacity
} from 'react-native';
import MyCommonCell from './../Commons/XMGCommonMyCell';
import youLikeData from './../LoacalData/HomeGeustYouLike.json';

export default class GeustYouLike extends Component {

    static defaultProps={
        api_url:'http://api.meituan1.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=a' +
        'pi.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%' +
        '3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__s' +
        'kts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777D' +
        'FC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB' +
        '689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&off' +
        'set=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA20' +
        '32F30C6C2016-04-04-08-38594'
    };

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2})
        };
        this.loadDataFormNet = this.loadDataFormNet.bind(this);
      };

    render() {
        return (
            <View style={styles.container}>
                <MyCommonCell
                    leftIconName="cnxh"
                    leftTitleName="猜你喜欢"
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    };

    renderRow(rowData){
        return(
            <TouchableOpacity onPress={()=>alert(0)}>
                 <View style={styles.listViewStyle}>
                     <Image source={{uri:rowData.imageUrl}} style={styles.imageViewStyle}/>

                     <View style={styles.rightViewStyle}>
                         <View style={styles.rightTopViewStyle}>
                             <Text>{rowData.title}</Text>
                             <Text>{rowData.topRightInfo}</Text>
                         </View>
                         <Text>{rowData.subTitle}</Text>
                         <View style={styles.rightBottomViewStyle}>
                             <Text style={{color:'red'}}>{rowData.subMessage}</Text>
                             <Text>{rowData.bottomRightInfo}</Text>
                         </View>
                     </View>
                 </View>
            </TouchableOpacity>
        )
    };
    //处理数据的宽高
    deal(url){
        alert(0);
        if (url.search('w.h') == -1){
            return url;
        }else {
            return url.replace('w.h','120.90');
        }
    };
    //请求网络
    componentDidMount() {
        this.loadDataFormNet();
    };
    //加载数据
    loadDataFormNet(){
        fetch(this.props.api_url)
            .then((response) =>response.json())
            .then((responseData)=>{
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(responseData.data)
                });
            })
            .catch((error)=>{
                // 更新数据源
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(youLikeData.data)
                });
            })
    };
}

const styles = StyleSheet.create({
    container: {
        marginTop:15
    },
    listViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
        backgroundColor:'#fff'
    },
    imageViewStyle:{
        width:120,
        height:90
    },
    rightViewStyle:{
        justifyContent:'center',
        marginLeft:8,
        width:220
    },
    rightTopViewStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:7
    },
    rightBottomViewStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:7
    }
});

module.exports = GeustYouLike;
