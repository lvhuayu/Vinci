/**
 * route.js
 */

// 引入依赖
import React from "react";
import { createStackNavigator } from "react-navigation";

// 引入页面组件
import ScreenBottomTab from '../screens/ScreenBottomTab';
import ScreenHome from "../screens/ScreenHome";
import ScreenDetail from "../screens/ScreenDetail";
import ScreenLogin from "../screens/ScreenLogin";
import ScreenReg from "../screens/ScreenReg";
import ScreenCreateActivity from "../screens/ScreenCreateActivity";
import ScreenUserProfile from "../screens/ScreenUserProfile";
import ScreenUserDetailProfile from "../screens/ScreenUserDetailProfile";

// 配置路由
const AppNavigator = createStackNavigator({
    ScreenLogin: {
         screen: ScreenLogin  // 登录页
    },
    ScreenReg: {
         screen: ScreenReg  // 注册页
    },
    ScreenHome: {
        screen: ScreenHome  //主页
    },
    ScreenCreateActivity: {
        screen: ScreenCreateActivity  // 创建页
    },
    ScreenUserProfile: {
        screen: ScreenUserProfile
    },
    ScreenUserDetailProfile: {
        screen: ScreenUserDetailProfile
    },
    ScreenDetail: {
        screen: ScreenDetail
    },
    ScreenBottomTab: {
        screen: ScreenBottomTab
    },
});

export default () => <AppNavigator />;