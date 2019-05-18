/**
 * ScreenBottomTab/index.js
 */

// 引入依赖
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from "react-navigation";

// 引入页面组件
import ScreenHome from "../ScreenHome";
import ScreenDetail from "../ScreenDetail";
import ScreenUserProfile from "../ScreenUserProfile";
import ScreenUserProfileTab from "../ScreenUserProfileTab";

const ScreenBottomTab = createBottomTabNavigator(
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
        // ScreenDetailTab: {
        //     screen: ScreenDetail,
        //     navigationOptions: {
        //         tabBarLabel: '发现',
        //         tabBarIcon: ({ tintColor }) => (
        //             <Icon name='map-marker-circle' color={tintColor} size={28} />
        //         ),
        //     }
        // },
        // ScreenMessageTab: {
        //     screen: ScreenHome,
        //     navigationOptions: {
        //         tabBarLabel: '信息',
        //         tabBarIcon: ({ tintColor }) => (
        //             <Icon name='message' color={tintColor} size={28} />
        //         ),
        //     }
        // },
        ScreenUserProfileTab: {
            screen: ScreenUserProfile,
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

ScreenBottomTab.navigationOptions = ({ navigation }) => {
    let { routeName } = navigation.state.routes[navigation.state.index];
    let headerTitle, headerLeft, headerBackTitle;
    if (routeName === 'ScreenHomeTab') {
        headerTitle = '主页';
        headerLeft = null;
        headerBackTitle = null;
    }
    if (routeName === 'ScreenUserProfileTab') {
        headerTitle = '个人主页';
        headerLeft = null;
        headerBackTitle = null;
    }
    return {
        headerTitle, headerLeft, headerBackTitle
    };
};

export default ScreenBottomTab;