/**
 * ScreenBottomTab/index.js
 */

// 引入依赖
import React from 'react';

// 引入页面组件
import ScreenHome from "../ScreenHome";
import ScreenDetail from "../ScreenDetail";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from "react-navigation";


const ScreenTab = createBottomTabNavigator(
    // 配置 tab 路由
    {
        ScreenHomeTab: {
            screen: ScreenHome,
            navigationOptions: {
                tabBarLabel: '主页',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='home' color={tintColor} size={28} />
                ),
            }
        },
        ScreenDetailTab: {
            screen: ScreenDetail,
            navigationOptions: {
                tabBarLabel: '发现',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='map-marker-circle' color={tintColor} size={28} />
                ),
            }
        },
        Screen1Tab: {
            screen: ScreenHome,
            navigationOptions: {
                tabBarLabel: '信息',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='message' color={tintColor} size={28} />
                ),
            }
        },
        Screen2Tab: {
            screen: ScreenDetail,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='account' color={tintColor} size={28} />
                ),
            }
        }
    },
    // 其他配置选项
    {
        initialRouteName: 'ScreenHomeTab',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: '#efeaec',
            },
            indicatorStyle: {
                backgroundColor: '#fff'
            }
        }
    }
);

export default ScreenTab;