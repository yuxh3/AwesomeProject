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
    Platform
} from 'react-native';
/**----导入组件-------*/
import Mine from './../Mine/XMGMine';
import Home from './../Home/XMGHome';
import Find from './../Find/XMGFind';
import Message from './../Message/XMGMessage';
import TabNavigator from 'react-native-tab-navigator';
import {Navigator} from 'react-native-deprecated-custom-components';
export default class Main extends Component {
    
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab: "home"
        };
          this.renderTabItem= this.renderTabItem.bind(this);
      }
    render() {
        return (
            <TabNavigator>
                {this.renderTabItem("支付宝","icon_01","home","支付宝",Home)}
                {this.renderTabItem("QQ","icon_02","find","QQ",Find)}
                {this.renderTabItem("微信","icon_03","message","微信",Message)}
                {this.renderTabItem("新浪","icon_04","mine","新浪",Mine)}
            </TabNavigator>
        );
    }
    //每一个Tabbar
    renderTabItem(title,iconName,selectedTab,componentName,component){
        return(
            <TabNavigator.Item
                title= {title}
                renderIcon={() => <Image source={{uri:iconName}} style={styles.homeImageStyle} />}
                onPress={()=>{this.setState({selectedTab: selectedTab})}}
                selected={this.state.selectedTab === selectedTab}
            >
                <Navigator
                    initialRoute={{name:componentName,component:component}}
                    configureScene={(route)=>{
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                let Component = route.component;
                    return<Component  navigator={navigator} {...route.passProps} />
                    }}
                />
            </TabNavigator.Item>
        )
    }
}
const styles = StyleSheet.create({
    homeImageStyle:{
        width:25,
        height:25
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

module.exports = Main;
